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

function getClickPower() {
  return 1 + state.clickUpgradeLevel;
}

function getHamsterIncome(hamster, level) {
  return RARITIES[hamster.rarity].baseIncome * (1 + (level - 1) * 0.5);
}

function getCollectionMultiplier() {
  return 1 + Object.keys(state.hamsters).length * COLLECTION_BONUS;
}

function getIncomePerSecond() {
  const base = HAMSTERS.reduce((total, hamster) => {
    const level = state.hamsters[hamster.id] || 0;
    return total + (level ? getHamsterIncome(hamster, level) : 0);
  }, 0);
  return base * getCollectionMultiplier();
}

function getUpgradeCost() {
  return Math.floor(20 * (1.65 ** state.clickUpgradeLevel));
}

function getSpinCost() {
  return Math.floor(25 * (1.25 ** state.roulettePurchases));
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
  if (typeof refreshCollectionUI === "function") refreshCollectionUI();
}

function renderHamsters() {
  const owned = HAMSTERS.filter(hamster => state.hamsters[hamster.id]);
  const sizeScale = Math.max(0.3, Math.sqrt(24 / Math.max(owned.length, 24)));
  const spriteWidth = Math.max(22, Math.min(82, window.innerWidth * 0.07) * sizeScale);
  const spriteHeight = Math.max(28, Math.min(102, window.innerWidth * 0.09) * sizeScale);
  const ownedIds = new Set(owned.map(hamster => hamster.id));
  for (const id of hamsterSprites.keys()) {
    if (!ownedIds.has(id)) {
      hamsterSprites.get(id).element.remove();
      hamsterSprites.delete(id);
    }
  }

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

  const bounds = elements.hamsterSwarm.getBoundingClientRect();
  const resized = bounds.width !== swarmSize.width || bounds.height !== swarmSize.height;
  const margin = 6;
  const usableHeight = bounds.height - getBottomSafeArea();
  const rowCount = Math.max(1, Math.floor((usableHeight - spriteHeight - margin * 2) / (spriteHeight + 3)) + 1);
  const rowSpacing = rowCount > 1 ? (usableHeight - spriteHeight - margin * 2) / (rowCount - 1) : 0;
  for (const [index, hamster] of owned.entries()) {
    const element = elements.hamsterSwarm.querySelector(`[data-hamster-id="${hamster.id}"]`);
    const dimensions = element.getBoundingClientRect();
    let sprite = hamsterSprites.get(hamster.id);
    if (!sprite) {
      const sideIndex = Math.floor(index / 2);
      const column = Math.floor(sideIndex / rowCount);
      const row = sideIndex % rowCount;
      const leftSide = index % 2 === 0;
      const horizontalOffset = margin + column * (spriteWidth + 10);
      const homeX = leftSide
        ? horizontalOffset
        : bounds.width - horizontalOffset - dimensions.width;
      const homeY = margin + row * rowSpacing;
      sprite = {
        element,
        x: homeX,
        y: homeY,
        homeX,
        homeY,
        width: dimensions.width,
        height: dimensions.height,
        vx: 0,
        vy: 0
      };
      hamsterSprites.set(hamster.id, sprite);
    } else {
      sprite.element = element;
      if (resized && swarmSize.width && swarmSize.height) {
        sprite.x *= bounds.width / swarmSize.width;
        sprite.y *= bounds.height / swarmSize.height;
        sprite.homeX *= bounds.width / swarmSize.width;
        sprite.homeY *= bounds.height / swarmSize.height;
      }
      sprite.width = dimensions.width;
      sprite.height = dimensions.height;
    }
    sprite.homeX = Math.max(margin, Math.min(bounds.width - sprite.width - margin, sprite.homeX));
    sprite.homeY = Math.max(margin, Math.min(bounds.height - sprite.height - getBottomSafeArea(), sprite.homeY));
    setHamsterPosition(sprite, bounds.width, bounds.height);
  }
  swarmSize = { width: bounds.width, height: bounds.height };
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
  const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 100 : 5600;
  elements.reelTrack.animate(
    [{ transform: from }, { transform: to }],
    { duration, easing: "cubic-bezier(.08,.72,.12,1)", fill: "forwards" }
  );

  window.setTimeout(() => {
    const previousLevel = state.hamsters[hamster.id] || 0;
    const maxed = previousLevel >= MAX_LEVEL;
    const refund = Math.floor(cost * 0.5);
    state.coins -= cost;
    if (maxed) state.coins += refund;
    state.roulettePurchases += 1;
    state.hamsters[hamster.id] = Math.min(previousLevel + 1, MAX_LEVEL);
    elements.rouletteToggle.dataset.spinning = "false";
    elements.reelTrack.style.transform = to;
    elements.wheelResult.className = `wheel-result result-${hamster.rarity}`;
    elements.wheelResult.textContent = maxed
      ? `${hamster.name} est déjà au max : ${formatNumber(refund)} ◈ remboursées.`
      : previousLevel
      ? `${hamster.name} passe au niveau ${previousLevel + 1} !`
      : `${hamster.name} rejoint ta tribu !`;
    renderHamsters();
    updateDisplay();
    saveState();
    showToast(maxed ? `${hamster.name} est au max : ${formatNumber(refund)} ◈ remboursées.` : previousLevel ? `Doublon ! ${hamster.name} passe niveau ${previousLevel + 1}.` : `${hamster.name} rejoint ta tribu !`);
  }, duration + 100);
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
