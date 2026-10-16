"use strict";

const SAVE_KEY = "hamster-club-save-v1";
const RARITIES = {
  common: { label: "Commun", chance: 58, baseIncome: 0.6, upgradeBase: 40 },
  rare: { label: "Rare", chance: 26, baseIncome: 2, upgradeBase: 160 },
  epic: { label: "Épique", chance: 11, baseIncome: 7, upgradeBase: 650 },
  legendary: { label: "Légendaire", chance: 4, baseIncome: 22, upgradeBase: 2800 },
  mythic: { label: "Mythique", chance: 1, baseIncome: 80, upgradeBase: 12000 }
};
const MAX_LEVEL = 30;
const COLLECTION_BONUS = 0.005;
const CLICK_MILESTONE_BONUS = 1.25; // ×1,25 de valeur de clic tous les 5 niveaux de doigt
const CLICK_LEVEL_GAIN = 0.5; // +0,5 de base par niveau de doigt
const MILESTONE_BONUS = 1.5; // ×1,5 de revenus tous les 5 niveaux d'un hamster

const elements = {
  coins: document.querySelector("#coins"),
  income: document.querySelector("#income"),
  clickValue: document.querySelector("#click-value"),
  cube: document.querySelector("#click-cube"),
  upgrade: document.querySelector("#click-upgrade"),
  upgradeLevel: document.querySelector("#upgrade-level"),
  upgradeCost: document.querySelector("#upgrade-cost"),
  upgradeMax: document.querySelector("#click-upgrade-max"),
  upgradeMaxCost: document.querySelector("#upgrade-max-cost"),
  upgradeMaxCount: document.querySelector("#upgrade-max-count"),
  maxAll: document.querySelector("#dex-maxall"),
  rouletteToggle: document.querySelector("#roulette-toggle"),
  spinCost: document.querySelector("#spin-cost"),
  maxSpinCount: document.querySelector("#max-spin-count"),
  spinQuantityButtons: [...document.querySelectorAll(".spin-quantity")],
  rouletteModal: document.querySelector("#roulette-modal"),
  modalClose: document.querySelector("#modal-close"),
  modalBackdrop: document.querySelector("#modal-backdrop"),
  batchRouletteGrid: document.querySelector("#batch-roulette-grid"),
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
      if (Number.isSafeInteger(level) && level > 0) hamsters[hamster.id] = Math.min(level, MAX_LEVEL);
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
let selectedSpinQuantity = 1;
let selectedSpinMax = false;
const hamsterSprites = new Map();
let activeHamsterDrag = null;
let hamsterAnimationFrame = 0;
let lastHamsterFrameTime = 0;
let swarmSize = { width: 0, height: 0 };
let suppressNextHamsterClick = false;
let suppressHamsterClickTimeout;

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

function getClickMilestone() {
  return CLICK_MILESTONE_BONUS ** Math.floor(state.clickUpgradeLevel / 5);
}

function getClickPower() {
  return (1 + state.clickUpgradeLevel * CLICK_LEVEL_GAIN) * getClickMilestone() * (isFrenzy() ? FRENZY.click : 1);
}

function getHamsterIncome(hamster, level) {
  return RARITIES[hamster.rarity].baseIncome * (1 + (level - 1) * 0.7) * MILESTONE_BONUS ** Math.floor(level / 5);
}

function getCollectionMultiplier() {
  return 1 + Object.keys(state.hamsters).length * COLLECTION_BONUS;
}

function getIncomePerSecond() {
  const base = HAMSTERS.reduce((total, hamster) => {
    const level = state.hamsters[hamster.id] || 0;
    return total + (level ? getHamsterIncome(hamster, level) : 0);
  }, 0);
  return base * getCollectionMultiplier() * (isFrenzy() ? FRENZY.income : 1);
}

function getUpgradeCost(level = state.clickUpgradeLevel) {
  return Math.floor(15 * (1.15 ** level));
}

function getSpinBatchCost(quantity, purchases = state.roulettePurchases) {
  let total = 0;
  for (let index = 0; index < quantity; index += 1) {
    total += Math.floor(30 * (purchases + index + 1) ** 2.2);
  }
  return total;
}

function getMaxAffordableSpinCount() {
  let count = 0;
  let spent = 0;
  while (count < Number.MAX_SAFE_INTEGER) {
    const cost = Math.floor(30 * (state.roulettePurchases + count + 1) ** 2.2);
    if (!Number.isFinite(cost) || spent + cost > state.coins) break;
    spent += cost;
    count += 1;
  }
  return count;
}

function updateDisplay() {
  const clickPower = getClickPower();
  const income = getIncomePerSecond();
  elements.coins.textContent = formatNumber(state.coins);
  elements.income.textContent = formatNumber(income);
  elements.clickValue.textContent = formatNumber(clickPower);
  elements.upgradeLevel.textContent = `Niv. ${formatNumber(state.clickUpgradeLevel)} · ×${getClickMilestone().toFixed(2).replace(".", ",")}`;
  elements.upgradeCost.textContent = formatNumber(getUpgradeCost());
  elements.upgrade.disabled = state.coins < getUpgradeCost();
  const maxPlan = planHamsterMax("all");
  elements.upgradeMax.disabled = maxPlan.upgrades < 1;
  elements.upgradeMaxCost.textContent = maxPlan.upgrades ? formatNumber(maxPlan.spent) : "MAX";
  elements.upgradeMaxCount.textContent = `+${formatNumber(maxPlan.upgrades)} niv.`;
  const maxSpinCount = getMaxAffordableSpinCount();
  const spinQuantity = selectedSpinMax ? maxSpinCount : selectedSpinQuantity;
  const spinBatchCost = spinQuantity ? getSpinBatchCost(spinQuantity) : 0;
  elements.maxSpinCount.textContent = formatNumber(maxSpinCount);
  elements.spinQuantityButtons.forEach(button => {
    const isMax = button.dataset.quantity === "max";
    button.setAttribute("aria-pressed", String(isMax ? selectedSpinMax : !selectedSpinMax && Number(button.dataset.quantity) === selectedSpinQuantity));
    button.disabled = elements.rouletteToggle.dataset.spinning === "true" || (isMax && maxSpinCount === 0);
  });
  elements.spinCost.textContent = formatNumber(spinBatchCost);
  elements.rouletteToggle.setAttribute("aria-label", `Lancer ${formatNumber(spinQuantity)} roulette${spinQuantity === 1 ? "" : "s"} pour ${formatNumber(spinBatchCost)} pièces`);
  elements.rouletteToggle.disabled = spinQuantity === 0 || state.coins < spinBatchCost || elements.rouletteToggle.dataset.spinning === "true";
  if (typeof refreshCollectionUI === "function") refreshCollectionUI();
}

const SWARM_RARITY_RANK = { mythic: 0, legendary: 1, epic: 2, rare: 3, common: 4 };

/* Rangement : les hamsters sont triés (raretés les plus hautes, puis niveaux les plus hauts) et rangés en colonnes
   serrées de chaque côté du cube, en partant des bords. La taille s'adapte pour que tout tienne sans
   jamais passer sur le cube central. */
function computeSwarmLayout(count, width, height) {
  const margin = 6;
  const gap = 6;
  const usableHeight = Math.max(60, height - getBottomSafeArea() - margin * 2);
  const perSide = Math.ceil(count / 2);
  const maxWidth = Math.max(22, Math.min(82, window.innerWidth * 0.07));
  const attempts = [
    { centerGap: Math.min(width * 0.36, 380), minWidth: 22 },
    { centerGap: Math.min(width * 0.22, 240), minWidth: 14 }
  ];
  let layout = null;
  for (const { centerGap, minWidth } of attempts) {
    const sideWidth = Math.max(40, (width - centerGap) / 2 - margin);
    let spriteWidth = maxWidth;
    while (true) {
      const spriteHeight = spriteWidth * 1.24;
      const cols = Math.max(1, Math.floor((sideWidth + gap) / (spriteWidth + gap)));
      const rows = Math.max(1, Math.floor((usableHeight + gap) / (spriteHeight + gap)));
      layout = { margin, gap, spriteWidth, spriteHeight, cols, rows, usableHeight, fits: cols * rows >= perSide };
      if (layout.fits || spriteWidth <= minWidth) break;
      spriteWidth = Math.max(minWidth, spriteWidth * 0.94);
    }
    if (layout.fits) break;
  }
  return layout;
}

function renderHamsters() {
  const owned = HAMSTERS.filter(hamster => state.hamsters[hamster.id]).sort((a, b) =>
    SWARM_RARITY_RANK[a.rarity] - SWARM_RARITY_RANK[b.rarity]
    || state.hamsters[b.id] - state.hamsters[a.id]
    || a.name.localeCompare(b.name, "fr")
  );
  const ownedIds = new Set(owned.map(hamster => hamster.id));
  for (const id of hamsterSprites.keys()) {
    if (!ownedIds.has(id)) {
      hamsterSprites.get(id).element.remove();
      hamsterSprites.delete(id);
    }
  }

  const bounds = elements.hamsterSwarm.getBoundingClientRect();
  const layout = computeSwarmLayout(owned.length, bounds.width, bounds.height);
  const { margin, gap, spriteWidth, spriteHeight, cols, rows, usableHeight } = layout;

  elements.hamsterSwarm.innerHTML = owned.map((hamster, index) => {
    const level = state.hamsters[hamster.id];
    const delay = -((index * 0.73) % 6);
    return `<figure class="hamster-sprite rarity-border-${hamster.rarity}" data-hamster-id="${hamster.id}" style="--sprite-delay:${delay}s;width:${spriteWidth}px;height:${spriteHeight}px" title="${hamster.name} — niveau ${level}">
      <span class="hamster-art">
        <img src="${hamster.image}" alt="${hamster.name}" loading="lazy" draggable="false">
        <figcaption>Lv ${formatNumber(level)}</figcaption>
      </span>
    </figure>`;
  }).join("");

  const perSide = Math.ceil(owned.length / 2);
  const rowsUsed = Math.max(1, Math.min(rows, perSide));
  const rowStep = rowsUsed > 1 ? Math.min(spriteHeight + 22, (usableHeight - spriteHeight) / (rowsUsed - 1)) : 0;
  const blockHeight = spriteHeight + rowStep * (rowsUsed - 1);
  const topOffset = margin + Math.max(0, (usableHeight - blockHeight) / 2);
  const resized = bounds.width !== swarmSize.width || bounds.height !== swarmSize.height;

  for (const [index, hamster] of owned.entries()) {
    const element = elements.hamsterSwarm.querySelector(`[data-hamster-id="${hamster.id}"]`);
    const leftSide = index % 2 === 0;
    const slot = Math.floor(index / 2);
    // Les cases se remplissent colonne par colonne en partant du bord de l'écran vers le centre.
    const column = Math.floor(slot / rows);
    const row = slot % rows;
    const offset = margin + column * (spriteWidth + gap);
    const homeX = leftSide ? offset : bounds.width - offset - spriteWidth;
    const homeY = topOffset + row * rowStep;
    let sprite = hamsterSprites.get(hamster.id);
    if (!sprite) {
      sprite = { element, x: homeX, y: homeY, homeX, homeY, width: spriteWidth, height: spriteHeight, vx: 0, vy: 0 };
      hamsterSprites.set(hamster.id, sprite);
    } else {
      sprite.element = element;
      if (resized && swarmSize.width && swarmSize.height) {
        sprite.x *= bounds.width / swarmSize.width;
        sprite.y *= bounds.height / swarmSize.height;
      }
      sprite.homeX = homeX;
      sprite.homeY = homeY;
      sprite.width = spriteWidth;
      sprite.height = spriteHeight;
    }
    setHamsterPosition(sprite, bounds.width, bounds.height);
  }
  swarmSize = { width: bounds.width, height: bounds.height };
  startHamsterAnimation();
}

function getBottomSafeArea() {
  return window.innerWidth <= 600 ? 72 : 84;
}

function setHamsterPosition(sprite, width, height) {
  const margin = 5;
  const maxY = Math.max(margin, height - sprite.height - getBottomSafeArea());
  sprite.x = Math.max(margin, Math.min(width - sprite.width - margin, sprite.x));
  sprite.y = Math.max(margin, Math.min(maxY, sprite.y));
  sprite.element.style.transform = `translate3d(${sprite.x}px, ${sprite.y}px, 0)`;
}

function animateHamsters(timestamp) {
  hamsterAnimationFrame = 0;
  const bounds = elements.hamsterSwarm.getBoundingClientRect();
  const step = lastHamsterFrameTime ? Math.min((timestamp - lastHamsterFrameTime) / 16.67, 2) : 1;
  lastHamsterFrameTime = timestamp;
  const cellSize = 110;
  const cells = new Map();

  for (const [id, sprite] of hamsterSprites) {
    const centerX = sprite.x + sprite.width / 2;
    const centerY = sprite.y + sprite.height / 2;
    const cellKey = `${Math.floor(centerX / cellSize)},${Math.floor(centerY / cellSize)}`;
    if (!cells.has(cellKey)) cells.set(cellKey, []);
    cells.get(cellKey).push([id, sprite]);
  }

  let settled = !activeHamsterDrag;
  for (const [id, sprite] of hamsterSprites) {
    if (activeHamsterDrag?.id === id) continue;

    let forceX = (sprite.homeX - sprite.x) * 0.018;
    let forceY = (sprite.homeY - sprite.y) * 0.018;
    if (activeHamsterDrag) {
      const centerX = sprite.x + sprite.width / 2;
      const centerY = sprite.y + sprite.height / 2;
      const cellX = Math.floor(centerX / cellSize);
      const cellY = Math.floor(centerY / cellSize);
      for (let dx = -1; dx <= 1; dx += 1) {
        for (let dy = -1; dy <= 1; dy += 1) {
          for (const [otherId, other] of cells.get(`${cellX + dx},${cellY + dy}`) || []) {
            if (id === otherId) continue;
            let distanceX = centerX - (other.x + other.width / 2);
            let distanceY = centerY - (other.y + other.height / 2);
            let distance = Math.hypot(distanceX, distanceY);
            const minDistance = (Math.max(sprite.width, sprite.height) + Math.max(other.width, other.height)) * 0.35;
            if (distance >= minDistance) continue;
            if (distance < 0.01) {
              distanceX = id < otherId ? -1 : 1;
              distanceY = 0;
              distance = 1;
            }
            const push = (minDistance - distance) * 0.09 / distance;
            forceX += distanceX * push;
            forceY += distanceY * push;
          }
        }
      }
    }

    sprite.vx = (sprite.vx + forceX * step) * Math.pow(0.78, step);
    sprite.vy = (sprite.vy + forceY * step) * Math.pow(0.78, step);
    const speed = Math.hypot(sprite.vx, sprite.vy);
    if (speed > 8) {
      sprite.vx = sprite.vx / speed * 8;
      sprite.vy = sprite.vy / speed * 8;
    }
    sprite.x += sprite.vx * step;
    sprite.y += sprite.vy * step;
    setHamsterPosition(sprite, bounds.width, bounds.height);

    if (Math.hypot(sprite.homeX - sprite.x, sprite.homeY - sprite.y) > 0.7 || Math.hypot(sprite.vx, sprite.vy) > 0.2) {
      settled = false;
    } else {
      sprite.x = sprite.homeX;
      sprite.y = sprite.homeY;
      sprite.vx = 0;
      sprite.vy = 0;
      setHamsterPosition(sprite, bounds.width, bounds.height);
    }
  }

  if (!settled) {
    hamsterAnimationFrame = window.requestAnimationFrame(animateHamsters);
  } else {
    lastHamsterFrameTime = 0;
  }
}

function startHamsterAnimation() {
  if (!hamsterAnimationFrame) hamsterAnimationFrame = window.requestAnimationFrame(animateHamsters);
}

elements.hamsterSwarm.addEventListener("pointerdown", event => {
  const element = event.target.closest(".hamster-sprite");
  if (!element || !event.isPrimary || (event.pointerType === "mouse" && event.button !== 0)) return;
  const sprite = hamsterSprites.get(element.dataset.hamsterId);
  if (!sprite) return;
  event.preventDefault();
  element.setPointerCapture(event.pointerId);
  element.classList.add("is-dragging");
  const bounds = elements.hamsterSwarm.getBoundingClientRect();
  activeHamsterDrag = {
    id: element.dataset.hamsterId,
    pointerId: event.pointerId,
    offsetX: event.clientX - bounds.left - sprite.x,
    offsetY: event.clientY - bounds.top - sprite.y,
    startX: event.clientX,
    startY: event.clientY,
    moved: false
  };
  startHamsterAnimation();
});

elements.hamsterSwarm.addEventListener("pointermove", event => {
  if (!activeHamsterDrag || activeHamsterDrag.pointerId !== event.pointerId) return;
  const bounds = elements.hamsterSwarm.getBoundingClientRect();
  const sprite = hamsterSprites.get(activeHamsterDrag.id);
  if (!activeHamsterDrag.moved && Math.hypot(event.clientX - activeHamsterDrag.startX, event.clientY - activeHamsterDrag.startY) > 6) {
    activeHamsterDrag.moved = true;
  }
  sprite.x = event.clientX - bounds.left - activeHamsterDrag.offsetX;
  sprite.y = event.clientY - bounds.top - activeHamsterDrag.offsetY;
  sprite.vx = 0;
  sprite.vy = 0;
  setHamsterPosition(sprite, bounds.width, bounds.height);
  startHamsterAnimation();
});

function releaseHamsterDrag(event) {
  if (!activeHamsterDrag || activeHamsterDrag.pointerId !== event.pointerId) return;
  if (activeHamsterDrag.moved) {
    suppressNextHamsterClick = true;
    window.clearTimeout(suppressHamsterClickTimeout);
    suppressHamsterClickTimeout = window.setTimeout(() => {
      suppressNextHamsterClick = false;
    }, 0);
  }
  const sprite = hamsterSprites.get(activeHamsterDrag.id);
  sprite?.element.classList.remove("is-dragging");
  activeHamsterDrag = null;
  startHamsterAnimation();
}

elements.hamsterSwarm.addEventListener("pointerup", releaseHamsterDrag);
elements.hamsterSwarm.addEventListener("pointercancel", releaseHamsterDrag);
elements.hamsterSwarm.addEventListener("lostpointercapture", releaseHamsterDrag);
elements.hamsterSwarm.addEventListener("click", event => {
  if (!event.target.closest(".hamster-sprite")) return;
  if (suppressNextHamsterClick) {
    suppressNextHamsterClick = false;
    window.clearTimeout(suppressHamsterClickTimeout);
    return;
  }
  handleClick(event);
});
window.addEventListener("resize", () => {
  renderHamsters();
  startHamsterAnimation();
});

function showClickPop(event, amount) {
  const rect = elements.cube.getBoundingClientRect();
  const hasPoint = event && event.clientX;
  const pop = document.createElement("span");
  pop.className = "click-pop";
  pop.textContent = `+${formatNumber(amount)}`;
  pop.style.left = `${hasPoint ? event.clientX : rect.left + rect.width / 2}px`;
  pop.style.top = `${hasPoint ? event.clientY : rect.top + rect.height / 2}px`;
  document.body.append(pop);
  window.setTimeout(() => pop.remove(), 800);
}

function handleClick(event) {
  showClickPop(event, getClickPower());
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

/* Max hamsters : on dépense les pièces des hamsters les plus rares aux moins rares (à rareté égale, les plus
   hauts niveaux d'abord). Chaque hamster est monté tant que c'est payable, puis on passe au suivant avec le reste.
   Même coût que le bouton « Améliorer » de la fiche (getLevelUpCost, dans collection.js). */
function planHamsterMax(rarity = "all", budget = state.coins) {
  const plan = { upgrades: 0, spent: 0, levels: new Map() };
  if (typeof getLevelUpCost !== "function") return plan;
  const order = HAMSTERS
    .filter(hamster => state.hamsters[hamster.id] && state.hamsters[hamster.id] < MAX_LEVEL && (rarity === "all" || hamster.rarity === rarity))
    .sort((a, b) => SWARM_RARITY_RANK[a.rarity] - SWARM_RARITY_RANK[b.rarity]
      || state.hamsters[b.id] - state.hamsters[a.id]
      || a.name.localeCompare(b.name, "fr"));
  let coins = budget;
  for (const hamster of order) {
    let level = state.hamsters[hamster.id];
    while (level < MAX_LEVEL) {
      const cost = getLevelUpCost(hamster, level);
      if (cost > coins) break;
      coins -= cost;
      plan.spent += cost;
      plan.upgrades += 1;
      level += 1;
    }
    if (level !== state.hamsters[hamster.id]) plan.levels.set(hamster.id, level);
    if (coins <= 0) break;
  }
  return plan;
}

function maxHamsters(rarity = "all") {
  const plan = planHamsterMax(rarity);
  if (!plan.upgrades) {
    const any = HAMSTERS.some(hamster => state.hamsters[hamster.id] && (rarity === "all" || hamster.rarity === rarity));
    showToast(!any ? "Tu n'as aucun hamster dans cette catégorie." : "Pas assez de pièces (ou déjà tout au max).");
    return;
  }
  state.coins -= plan.spent;
  for (const [id, level] of plan.levels) state.hamsters[id] = level;
  renderHamsters();
  updateDisplay();
  saveState();
  if (typeof renderCatalog === "function") renderCatalog();
  showToast(`${formatNumber(plan.upgrades)} niveau${plan.upgrades > 1 ? "x" : ""} sur ${plan.levels.size} hamster${plan.levels.size > 1 ? "s" : ""} pour ${formatNumber(plan.spent)} ◈, des plus rares aux moins rares.`);
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

function closeRoulette() {
  if (elements.rouletteToggle.dataset.spinning === "true") return;
  elements.rouletteModal.classList.remove("is-open");
  elements.rouletteModal.setAttribute("aria-hidden", "true");
}

function spinRoulette() {
  const maxSpinCount = getMaxAffordableSpinCount();
  const quantity = selectedSpinMax ? maxSpinCount : selectedSpinQuantity;
  const cost = getSpinBatchCost(quantity);
  if (!quantity || state.coins < cost || elements.rouletteToggle.dataset.spinning === "true") return;
  const results = Array.from({ length: quantity }, () => chooseHamster());
  const columns = Math.max(1, Math.min(quantity, Math.ceil(Math.sqrt(quantity * window.innerWidth / Math.max(240, window.innerHeight - 240)))));
  const reelWinnerIndex = 15;
  const reelLength = 21;
  elements.batchRouletteGrid.style.setProperty("--batch-columns", columns);
  elements.batchRouletteGrid.setAttribute("aria-label", "Roulettes en cours");
  elements.batchRouletteGrid.innerHTML = results.map((hamster, index) => {
    const reel = Array.from({ length: reelLength }, (_, reelIndex) => reelIndex === reelWinnerIndex ? hamster : chooseHamster());
    return `
    <article class="batch-roulette-card is-spinning">
      <div class="batch-roulette-art">
        <div class="batch-reel-window" aria-hidden="true">
          <div class="batch-reel-track">${reel.map(candidate => `
            <span class="batch-reel-item"><img src="${candidate.image}" alt=""></span>
          `).join("")}</div>
          <span class="batch-reel-pointer"></span>
        </div>
        <img src="${hamster.image}" alt="${hamster.name}">
      </div>
      <strong class="batch-roulette-name">Roulette ${index + 1}</strong>
      <span class="batch-roulette-rarity">En cours…</span>
    </article>
  `;
  }).join("");
  elements.rouletteToggle.dataset.spinning = "true";
  elements.rouletteModal.classList.add("is-open");
  elements.rouletteModal.setAttribute("aria-hidden", "false");
  elements.wheelResult.className = "wheel-result";
  elements.wheelResult.textContent = `${formatNumber(quantity)} roulette${quantity === 1 ? "" : "s"} en cours…`;
  updateDisplay();

  const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 700 : 5600;
  for (const card of elements.batchRouletteGrid.children) {
    const reelWindow = card.querySelector(".batch-reel-window");
    const reelTrack = card.querySelector(".batch-reel-track");
    const reelItemSize = reelWindow.clientHeight;
    reelTrack.style.setProperty("--reel-item-size", `${reelItemSize}px`);
    const winnerCard = reelTrack.children[reelWinnerIndex];
    const endOffset = reelWindow.clientWidth / 2 - winnerCard.offsetLeft - winnerCard.offsetWidth / 2;
    reelTrack.animate(
      [{ transform: "translateX(0px)" }, { transform: `translateX(${endOffset}px)` }],
      { duration, easing: "cubic-bezier(.08,.72,.12,1)", fill: "forwards" }
    );
  }

  window.setTimeout(() => {
    let newHamsters = 0;
    let levelUps = 0;
    let refunds = 0;
    for (const [index, hamster] of results.entries()) {
      const previousLevel = state.hamsters[hamster.id] || 0;
      const maxed = previousLevel >= MAX_LEVEL;
      const refund = Math.floor(Math.floor(30 * (state.roulettePurchases + index + 1) ** 2.2) * 0.5);
      if (maxed) {
        state.coins += refund;
        refunds += 1;
      } else if (previousLevel) {
        levelUps += 1;
      } else {
        newHamsters += 1;
      }
      state.hamsters[hamster.id] = Math.min(previousLevel + 1, MAX_LEVEL);
      const card = elements.batchRouletteGrid.children[index];
      card.className = `batch-roulette-card result-${hamster.rarity}`;
      card.querySelector(".batch-roulette-name").textContent = hamster.name;
      card.querySelector(".batch-roulette-rarity").textContent = RARITIES[hamster.rarity].label;
    }
    state.coins -= cost;
    state.roulettePurchases += quantity;
    elements.rouletteToggle.dataset.spinning = "false";
    elements.batchRouletteGrid.setAttribute("aria-label", "Résultats des roulettes");
    elements.wheelResult.className = "wheel-result";
    elements.wheelResult.textContent = `${formatNumber(quantity)} roulette${quantity === 1 ? "" : "s"} terminée${quantity === 1 ? "" : "s"} : ${formatNumber(newHamsters)} nouveau${newHamsters === 1 ? "" : "x"} hamster${newHamsters === 1 ? "" : "s"}, ${formatNumber(levelUps)} niveau${levelUps === 1 ? "" : "x"} gagné${levelUps === 1 ? "" : "s"}${refunds ? `, ${formatNumber(refunds)} remboursement${refunds === 1 ? "" : "s"}` : ""}.`;
    renderHamsters();
    updateDisplay();
    saveState();
    showToast(`${formatNumber(quantity)} roulette${quantity === 1 ? "" : "s"} terminée${quantity === 1 ? "" : "s"} !`);
  }, duration + 100);
}

elements.cube.addEventListener("click", handleClick);
elements.upgrade.addEventListener("click", buyUpgrade);
elements.upgradeMax.addEventListener("click", () => maxHamsters("all"));
elements.maxAll?.addEventListener("click", () => maxHamsters(typeof dexView !== "undefined" ? dexView.rarity : "all"));
elements.spinQuantityButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.dataset.quantity === "max") {
      selectedSpinMax = true;
    } else {
      selectedSpinMax = false;
      selectedSpinQuantity = Number(button.dataset.quantity);
    }
    updateDisplay();
  });
});
elements.rouletteToggle.addEventListener("click", spinRoulette);
elements.modalClose.addEventListener("click", closeRoulette);
elements.modalBackdrop.addEventListener("click", closeRoulette);
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeRoulette();
});
/* Frénésie : une étoile apparaît de temps en temps, l'attraper active x3 revenus et x5 clics pendant 1 min */
const FRENZY = { duration: 60000, income: 3, click: 5, orbLife: 14000, minDelay: 60000, maxDelay: 150000 };
let frenzyUntil = 0;
let frenzyTicker = 0;
const frenzyUI = {
  banner: document.querySelector("#frenzy-banner"),
  time: document.querySelector("#frenzy-time"),
  bar: document.querySelector("#frenzy-bar"),
  world: document.querySelector(".game-world")
};

function isFrenzy() {
  return Date.now() < frenzyUntil;
}

function scheduleFrenzyOrb() {
  window.setTimeout(spawnFrenzyOrb, FRENZY.minDelay + Math.random() * (FRENZY.maxDelay - FRENZY.minDelay));
}

function spawnFrenzyOrb() {
  if (isFrenzy() || document.hidden) return scheduleFrenzyOrb();
  const orb = document.createElement("button");
  orb.type = "button";
  orb.className = "frenzy-orb";
  orb.setAttribute("aria-label", "Attraper la frénésie");
  orb.innerHTML = '<span aria-hidden="true">⭐</span><b>Frénésie !</b>';
  orb.style.left = `${15 + Math.random() * 70}%`;
  orb.style.top = `${24 + Math.random() * 46}%`;
  const expire = window.setTimeout(() => { orb.remove(); scheduleFrenzyOrb(); }, FRENZY.orbLife);
  orb.addEventListener("click", () => {
    window.clearTimeout(expire);
    orb.remove();
    startFrenzy();
  }, { once: true });
  frenzyUI.world.append(orb);
}

function startFrenzy() {
  frenzyUntil = Date.now() + FRENZY.duration;
  document.body.classList.add("frenzy");
  frenzyUI.banner.hidden = false;
  window.clearInterval(frenzyTicker);
  frenzyTicker = window.setInterval(tickFrenzy, 250);
  tickFrenzy();
  updateDisplay();
  showToast("Frénésie ! Revenus ×3 et clics ×5 pendant 1 minute.");
}

function tickFrenzy() {
  const remaining = frenzyUntil - Date.now();
  if (remaining <= 0) {
    window.clearInterval(frenzyTicker);
    document.body.classList.remove("frenzy");
    frenzyUI.banner.hidden = true;
    updateDisplay();
    scheduleFrenzyOrb();
    return;
  }
  frenzyUI.time.textContent = `${Math.ceil(remaining / 1000)} s`;
  frenzyUI.bar.style.width = `${remaining / FRENZY.duration * 100}%`;
}

scheduleFrenzyOrb();
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
