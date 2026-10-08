"use strict";

const SAVE_KEY = "hamster-club-save-v1";
const RARITIES = {
  common: { label: "Commun", chance: 58, baseIncome: 0.6 },
  rare: { label: "Rare", chance: 26, baseIncome: 2 },
  epic: { label: "Épique", chance: 11, baseIncome: 7 },
  legendary: { label: "Légendaire", chance: 4, baseIncome: 22 },
  mythic: { label: "Mythique", chance: 1, baseIncome: 80 }
};

const elements = {
  coins: document.querySelector("#coins"),
  income: document.querySelector("#income"),
  clickValue: document.querySelector("#click-value"),
  cube: document.querySelector("#click-cube"),
  upgrade: document.querySelector("#click-upgrade"),
  upgradeLevel: document.querySelector("#upgrade-level"),
  upgradeCost: document.querySelector("#upgrade-cost"),
  rouletteToggle: document.querySelector("#roulette-toggle"),
  spinCost: document.querySelector("#spin-cost"),
  rouletteModal: document.querySelector("#roulette-modal"),
  modalClose: document.querySelector("#modal-close"),
  modalBackdrop: document.querySelector("#modal-backdrop"),
  wheelStage: document.querySelector("#wheel-stage"),
  reelTrack: document.querySelector("#reel-track"),
  wheelResult: document.querySelector("#wheel-result"),
  hamsterSwarm: document.querySelector("#hamster-swarm"),
  toast: document.querySelector("#toast")
};

function createInitialState() {
  return { coins: 0, clickUpgradeLevel: 0, roulettePurchases: 0, totalClicks: 0, hamsters: {} };
}

function normalizeState(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return createInitialState();
  const hamsters = {};
  if (value.hamsters && typeof value.hamsters === "object" && !Array.isArray(value.hamsters)) {
    for (const hamster of HAMSTERS) {
      const level = Number(value.hamsters[hamster.id]);
      if (Number.isSafeInteger(level) && level > 0) hamsters[hamster.id] = Math.min(level, 1_000_000);
    }
  }
  return {
    coins: finiteNonNegative(value.coins),
    clickUpgradeLevel: Math.min(Math.floor(finiteNonNegative(value.clickUpgradeLevel)), 1_000_000),
    roulettePurchases: Math.min(Math.floor(finiteNonNegative(value.roulettePurchases)), 1_000_000),
    totalClicks: Math.min(Math.floor(finiteNonNegative(value.totalClicks)), Number.MAX_SAFE_INTEGER),
    hamsters
  };
}

function finiteNonNegative(value) {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? number : 0;
}

function loadState() {
  try {
    const saved = localStorage.getItem(SAVE_KEY);
    return saved ? normalizeState(JSON.parse(saved)) : createInitialState();
  } catch (error) {
    console.error("Impossible de charger la sauvegarde Hamster Club.", error);
    showToast("Sauvegarde illisible ou indisponible : une nouvelle partie démarre.");
    return createInitialState();
  }
}

let state = loadState();
let storageWarningShown = false;
let toastTimeout;

function saveState() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Impossible d'enregistrer la partie Hamster Club.", error);
    if (!storageWarningShown) {
      storageWarningShown = true;
      showToast("La sauvegarde locale est indisponible sur cet appareil.");
    }
  }
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => elements.toast.classList.remove("visible"), 2600);
}

function formatNumber(value) {
  if (value < 1000) return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: value < 10 && value % 1 ? 1 : 0 }).format(value);
  return new Intl.NumberFormat("fr-FR", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

function getClickPower() {
  return 1 + state.clickUpgradeLevel;
}

function getHamsterIncome(hamster, level) {
  return RARITIES[hamster.rarity].baseIncome * (1 + (level - 1) * 0.5);
}

function getIncomePerSecond() {
  return HAMSTERS.reduce((total, hamster) => {
    const level = state.hamsters[hamster.id] || 0;
    return total + (level ? getHamsterIncome(hamster, level) : 0);
  }, 0);
}

function getUpgradeCost() {
  return Math.floor(20 * (1.65 ** state.clickUpgradeLevel));
}

function getSpinCost() {
  return Math.floor(35 * (1.52 ** state.roulettePurchases));
}

function updateDisplay() {
  const clickPower = getClickPower();
  const income = getIncomePerSecond();
  elements.coins.textContent = formatNumber(state.coins);
  elements.income.textContent = formatNumber(income);
  elements.clickValue.textContent = formatNumber(clickPower);
  elements.upgradeLevel.textContent = `Niv. ${formatNumber(state.clickUpgradeLevel)}`;
  elements.upgradeCost.textContent = formatNumber(getUpgradeCost());
  elements.upgrade.disabled = state.coins < getUpgradeCost();
  elements.spinCost.textContent = formatNumber(getSpinCost());
  elements.rouletteToggle.disabled = state.coins < getSpinCost() || elements.rouletteToggle.dataset.spinning === "true";
}

function renderHamsters() {
  const owned = HAMSTERS.filter(hamster => state.hamsters[hamster.id]);
  elements.hamsterSwarm.innerHTML = owned.map((hamster, index) => {
    const level = state.hamsters[hamster.id];
    const side = index % 2 === 0 ? "left" : "right";
    const row = Math.floor(index / 2);
    const top = 18 + ((row * 19 + (index % 3) * 7) % 67);
    const offset = 3 + ((row * 9 + index * 3) % 13);
    const delay = -((index * 0.73) % 6);
    return `<figure class="hamster-sprite rarity-border-${hamster.rarity}" style="--sprite-top:${top}%;--sprite-side:${offset}%;--sprite-delay:${delay}s" title="${hamster.name} — niveau ${level}">
      <img src="${hamster.image}" alt="${hamster.name}" loading="lazy">
      <figcaption>Lv ${formatNumber(level)}</figcaption>
    </figure>`;
  }).join("");
}

function handleClick() {
  state.coins += getClickPower();
  state.totalClicks += 1;
  updateDisplay();
  saveState();
}

function buyUpgrade() {
  const cost = getUpgradeCost();
  if (state.coins < cost) return;
  state.coins -= cost;
  state.clickUpgradeLevel += 1;
  updateDisplay();
  saveState();
  showToast(`Doigt turbo niveau ${state.clickUpgradeLevel} !`);
}

function chooseHamster() {
  const roll = Math.random() * 100;
  let threshold = 0;
  const rarity = Object.entries(RARITIES).find(([, details]) => {
    threshold += details.chance;
    return roll < threshold;
  })[0];
  const candidates = HAMSTERS.filter(hamster => hamster.rarity === rarity);
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function makeReel(winner) {
  const winnerIndex = 34;
  const reel = Array.from({ length: 42 }, chooseHamster);
  reel[winnerIndex] = winner;
  elements.reelTrack.innerHTML = reel.map(hamster => `<div class="reel-item rarity-${hamster.rarity}">
    <img src="${hamster.image}" alt="">
    <span>${RARITIES[hamster.rarity].label}</span>
  </div>`).join("");
  return winnerIndex;
}

function closeRoulette() {
  if (elements.rouletteToggle.dataset.spinning === "true") return;
  elements.rouletteModal.classList.remove("is-open");
  elements.rouletteModal.setAttribute("aria-hidden", "true");
}

function spinRoulette() {
  const cost = getSpinCost();
  if (state.coins < cost || elements.rouletteToggle.dataset.spinning === "true") return;
  const hamster = chooseHamster();
  const winnerIndex = makeReel(hamster);
  elements.rouletteToggle.dataset.spinning = "true";
  elements.rouletteToggle.disabled = true;
  elements.rouletteModal.classList.add("is-open");
  elements.rouletteModal.setAttribute("aria-hidden", "false");
  elements.wheelResult.className = "wheel-result";
  elements.wheelResult.textContent = "La roulette tourne…";
  updateDisplay();

  const firstCard = elements.reelTrack.firstElementChild;
  const winnerCard = elements.reelTrack.children[winnerIndex];
  const centerOffset = elements.wheelStage.clientWidth / 2 - firstCard.offsetWidth / 2;
  const from = `translateX(${centerOffset}px)`;
  const to = `translateX(${elements.wheelStage.clientWidth / 2 - winnerCard.offsetLeft - winnerCard.offsetWidth / 2}px)`;
  elements.reelTrack.style.transform = from;
  const animation = elements.reelTrack.animate(
    [{ transform: from }, { transform: to }],
    { duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 100 : 5600, easing: "cubic-bezier(.08,.72,.12,1)", fill: "forwards" }
  );

  animation.finished.then(() => {
    const previousLevel = state.hamsters[hamster.id] || 0;
    state.coins -= cost;
    state.roulettePurchases += 1;
    state.hamsters[hamster.id] = previousLevel + 1;
    elements.rouletteToggle.dataset.spinning = "false";
    elements.reelTrack.style.transform = to;
    elements.wheelResult.className = `wheel-result result-${hamster.rarity}`;
    elements.wheelResult.textContent = previousLevel
      ? `${hamster.name} passe au niveau ${previousLevel + 1} !`
      : `${hamster.name} rejoint ta tribu !`;
    renderHamsters();
    updateDisplay();
    saveState();
    showToast(previousLevel ? `Doublon ! ${hamster.name} passe niveau ${previousLevel + 1}.` : `${hamster.name} rejoint ta tribu !`);
  }).catch(error => {
    console.error("La roulette n'a pas pu terminer son animation.", error);
    elements.rouletteToggle.dataset.spinning = "false";
    updateDisplay();
    showToast("La roulette a rencontré un problème d’animation.");
  });
}

elements.cube.addEventListener("click", handleClick);
elements.upgrade.addEventListener("click", buyUpgrade);
elements.rouletteToggle.addEventListener("click", spinRoulette);
elements.modalClose.addEventListener("click", closeRoulette);
elements.modalBackdrop.addEventListener("click", closeRoulette);
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeRoulette();
});
window.addEventListener("beforeunload", saveState);

renderHamsters();
updateDisplay();
window.setInterval(() => {
  const income = getIncomePerSecond();
  if (income > 0) {
    state.coins += income;
    updateDisplay();
    saveState();
  }
}, 1000);
