"use strict";

const RARITY_ORDER = Object.keys(RARITIES);
const HAMSTER_BY_ID = new Map(HAMSTERS.map(hamster => [hamster.id, hamster]));
const RARITY_TOTALS = Object.fromEntries(RARITY_ORDER.map(r => [r, HAMSTERS.filter(h => h.rarity === r).length]));
const DEX_PAGE = 60;
const $ = selector => document.querySelector(selector);
const dex = {
  toggle: $("#catalog-toggle"), progress: $("#catalog-progress"), modal: $("#catalog-modal"),
  close: $("#catalog-close"), backdrop: $("#catalog-backdrop"), count: $("#dex-count"), bar: $("#dex-bar"),
  bonus: $("#dex-bonus"), chips: $("#dex-chips"), search: $("#dex-search"), owned: $("#dex-owned"),
  maxAll: $("#dex-maxall"), grid: $("#dex-grid"), more: $("#dex-more"), detail: $("#dex-detail")
};
const dexView = { rarity: "all", owned: "all", query: "", shown: DEX_PAGE, selected: null };
const fold = text => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const ownedCount = () => Object.keys(state.hamsters).length;

function getLevelUpCost(hamster, level) {
  return Math.floor(RARITIES[hamster.rarity].upgradeBase * 1.3 ** (level - 1));
}

function levelUpHamster(id) {
  const hamster = HAMSTER_BY_ID.get(id);
  const level = state.hamsters[id] || 0;
  if (!hamster || !level || level >= MAX_LEVEL) return;
  const cost = getLevelUpCost(hamster, level);
  if (state.coins < cost) return;
  state.coins -= cost;
  state.hamsters[id] = level + 1;
  renderHamsters();
  updateDisplay();
  saveState();
  renderCatalog();
  showToast(`${hamster.name} passe au niveau ${level + 1} !`);
}

function visibleHamsters() {
  const query = fold(dexView.query.trim());
  return HAMSTERS.map((h, i) => ({ h, i, lv: state.hamsters[h.id] || 0 }))
    .filter(({ h, lv }) => (dexView.rarity === "all" || h.rarity === dexView.rarity)
      && (dexView.owned === "all" || (dexView.owned === "owned") === lv > 0)
      && (!query || (lv > 0 && fold(h.name).includes(query))))
    .sort((a, b) => RARITY_ORDER.indexOf(b.h.rarity) - RARITY_ORDER.indexOf(a.h.rarity)
      || (b.lv > 0) - (a.lv > 0) || b.lv - a.lv || a.i - b.i);
}

function renderCatalog() {
  const owned = ownedCount();
  dex.count.textContent = `${owned} / ${HAMSTERS.length} découverts`;
  dex.bar.style.width = `${owned / HAMSTERS.length * 100}%`;
  dex.bonus.textContent = `Bonus de collection : +${formatNumber((getCollectionMultiplier() - 1) * 100)} % de revenus`;

  const chips = [["all", "Tous", owned, HAMSTERS.length], ...RARITY_ORDER.map(r => [
    r, RARITIES[r].label, HAMSTERS.filter(h => h.rarity === r && state.hamsters[h.id]).length, RARITY_TOTALS[r]
  ])];
  dex.chips.innerHTML = chips.map(([r, label, o, t]) =>
    `<button class="dex-chip${r === "all" ? "" : ` r-${r}`}" type="button" data-rarity="${r}" aria-pressed="${dexView.rarity === r}">${label} ${o}/${t}</button>`).join("");

  dex.maxAll.textContent = dexView.rarity === "all" ? "⏫ Maxxer tout" : `⏫ Maxxer ${RARITIES[dexView.rarity].label.toLowerCase()}s`;

  const list = visibleHamsters();
  dex.grid.innerHTML = list.slice(0, dexView.shown).map(({ h, lv }) => lv
    ? `<button class="dex-card r-${h.rarity}" type="button" data-id="${h.id}">
        <img src="${h.image}" alt="${h.name}" loading="lazy" draggable="false">
        <span class="dex-name">${h.name}</span><span class="dex-lv">Niv. ${lv}</span></button>`
    : `<button class="dex-card is-locked r-${h.rarity}" type="button" data-id="${h.id}" aria-label="Hamster ${RARITIES[h.rarity].label} non découvert">
        <span class="dex-q" aria-hidden="true">?</span>
        <span class="dex-name">Inconnu</span><span class="dex-lv">${RARITIES[h.rarity].label}</span></button>`
  ).join("") || `<p class="dex-empty">Aucun hamster ne correspond à ces filtres.</p>`;
  dex.more.hidden = list.length <= dexView.shown;
  dex.more.textContent = `Afficher ${Math.min(DEX_PAGE, list.length - dexView.shown)} de plus`;
  renderDetail();
}

function renderDetail() {
  const hamster = HAMSTER_BY_ID.get(dexView.selected);
  dex.detail.hidden = !hamster;
  if (!hamster) return;
  const level = state.hamsters[hamster.id] || 0;
  const rarity = RARITIES[hamster.rarity];
  const mult = getCollectionMultiplier();
  const odds = (rarity.chance / RARITY_TOTALS[hamster.rarity]).toFixed(2).replace(".", ",");
  let body = `<p class="dex-hint">Pas encore découvert. Chaque tirage a ${odds} % de chance de le faire apparaître.</p>`;
  if (level) {
    const cost = getLevelUpCost(hamster, level);
    const next = level < MAX_LEVEL
      ? `<div><dt>Au niveau ${level + 1}</dt><dd>+${formatNumber(getHamsterIncome(hamster, level + 1) * mult)} / s</dd></div>` : "";
    body = `<div class="dex-meter"><i style="width:${level / MAX_LEVEL * 100}%"></i></div>
      <dl class="dex-stats">
        <div><dt>Niveau</dt><dd>${level} / ${MAX_LEVEL}</dd></div>
        <div><dt>Revenu</dt><dd>+${formatNumber(getHamsterIncome(hamster, level) * mult)} / s</dd></div>${next}
        <div><dt>Chance de tirage</dt><dd>${odds} %</dd></div>
      </dl>
      ${level < MAX_LEVEL
        ? `<button class="dex-upgrade" type="button" data-act="up" data-cost="${cost}" ${state.coins < cost ? "disabled" : ""}>Améliorer · ◈ ${formatNumber(cost)}</button>`
        : `<p class="dex-hint">Niveau maximum. Les doublons de ce hamster rembourseront la moitié du prix du tirage.</p>`}
      <p class="dex-hint">${level < MAX_LEVEL ? `Palier : revenus ×${String(MILESTONE_BONUS).replace(".", ",")} au niveau ${(Math.floor(level / 5) + 1) * 5}. ` : ""}Un doublon tiré à la roulette ajoute aussi un niveau.</p>`;
  }
  dex.detail.innerHTML = `<div class="dex-sheet r-${hamster.rarity}">
    <div class="dex-portrait">${level ? `<img src="${hamster.image}" alt="${hamster.name}">` : `<span class="dex-q">?</span>`}</div>
    <div class="dex-info">
      <h3>${level ? hamster.name : "Hamster inconnu"}</h3>
      <span class="dex-rarity">${rarity.label}</span>${body}
      <button class="dex-back" type="button" data-act="back">Retour à la collection</button>
    </div></div>`;
}

function refreshCollectionUI() {
  dex.progress.textContent = `${ownedCount()}/${HAMSTERS.length}`;
  dex.toggle.disabled = elements.rouletteToggle.dataset.spinning === "true";
  const button = dex.detail.querySelector("[data-act=up]");
  if (button) button.disabled = state.coins < Number(button.dataset.cost);
}

function openCatalog() {
  if (dex.toggle.disabled) return;
  dexView.shown = DEX_PAGE;
  dexView.selected = null;
  renderCatalog();
  dex.modal.classList.add("is-open");
  dex.modal.setAttribute("aria-hidden", "false");
  dex.close.focus();
}

function closeCatalog() {
  dex.modal.classList.remove("is-open");
  dex.modal.setAttribute("aria-hidden", "true");
  dexView.selected = null;
}

dex.toggle.addEventListener("click", openCatalog);
dex.close.addEventListener("click", closeCatalog);
dex.backdrop.addEventListener("click", closeCatalog);
dex.more.addEventListener("click", () => { dexView.shown += DEX_PAGE; renderCatalog(); });
dex.grid.addEventListener("click", event => {
  const card = event.target.closest(".dex-card");
  if (card) { dexView.selected = card.dataset.id; renderDetail(); }
});
dex.chips.addEventListener("click", event => {
  const chip = event.target.closest(".dex-chip");
  if (chip) { dexView.rarity = chip.dataset.rarity; dexView.shown = DEX_PAGE; renderCatalog(); }
});
dex.search.addEventListener("input", () => { dexView.query = dex.search.value; dexView.shown = DEX_PAGE; renderCatalog(); });
dex.owned.addEventListener("change", () => { dexView.owned = dex.owned.value; dexView.shown = DEX_PAGE; renderCatalog(); });
dex.detail.addEventListener("click", event => {
  const act = event.target.closest("[data-act]")?.dataset.act;
  if (act === "back") { dexView.selected = null; renderDetail(); }
  if (act === "up") levelUpHamster(dexView.selected);
});
document.addEventListener("keydown", event => {
  if (event.key !== "Escape" || !dex.modal.classList.contains("is-open")) return;
  if (dexView.selected) { dexView.selected = null; renderDetail(); } else closeCatalog();
});

refreshCollectionUI();
updateDisplay();
