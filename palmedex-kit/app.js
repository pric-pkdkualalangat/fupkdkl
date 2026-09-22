/**
 * Palmedex Interactive Presentation Kit & Mobile Simulator
 */

// Sample Clinical Medication Reference Data for Live Search Simulation
const CLINICAL_DRUGS = [
  {
    generic: "Amoxicillin + Clavulanate",
    brand: "Augmentin • Clavamox",
    desc: "Oral Tablet 625mg / Suspension 228mg/5ml",
    mdc: "J01CR02",
    category: "Cat B (Specialist / MO)",
    type: "antibiotic",
    hasQuota: true
  },
  {
    generic: "Metformin HCl",
    brand: "Glucophage 500mg, 850mg",
    desc: "Biguanide oral hypoglycaemic agent",
    mdc: "A10BA02",
    category: "Unrestricted PKD",
    type: "endocrine",
    hasQuota: false
  },
  {
    generic: "Amlodipine Besylate",
    brand: "Norvasc 5mg, 10mg",
    desc: "Dihydropyridine Calcium Channel Blocker",
    mdc: "C08CA01",
    category: "Reference Standard",
    type: "cvs",
    hasQuota: false
  },
  {
    generic: "Cefuroxime Axetil",
    brand: "Zinnat 250mg, 500mg",
    desc: "Second-generation cephalosporin antibiotic",
    mdc: "J01DC02",
    category: "Cat A* (Specialist Only)",
    type: "antibiotic",
    hasQuota: true
  },
  {
    generic: "Insulin Human (Isophane / Soluble)",
    brand: "Insulatard / Actrapid HM",
    desc: "Intermediate / Rapid acting recombinant insulin",
    mdc: "A10AC01",
    category: "Cat B (Cold Chain Monitored)",
    type: "endocrine",
    hasQuota: false
  },
  {
    generic: "Perindopril Erbumine",
    brand: "Coversyl 4mg, 8mg",
    desc: "Long-acting ACE inhibitor for hypertension",
    mdc: "C09AA04",
    category: "Reference Standard",
    type: "cvs",
    hasQuota: false
  }
];

// Screen Explainer Notes Map
const SCREEN_NOTES = {
  search: "Instant client-side filter with zero server dependency. Matches generic names, brand names, and MDC categories instantaneously with offline cache.",
  quota: "High-visibility Warning Amber (#facc15) banner with glowing outline. Flags restricted medications, tier-based prescriber policies, and quota authorizations.",
  monograph: "Detailed clinical monographs covering dosing regimens, renal CrCl clearance adjustments, pregnancy risk ratings, and direct NPRA Quest3+ references.",
  sync: "Local IndexedDB telemetry monitoring 542 drug items, 48 quota protocols, and instantaneous background synchronization without interrupting clinical care."
};

// Initialize DOM Events
document.addEventListener('DOMContentLoaded', () => {
  setupScreenTabs();
  setupLiveSearch();
  setupFilterChips();
});

/**
 * Configure Mobile Simulator Tab Switching
 */
function setupScreenTabs() {
  const tabs = document.querySelectorAll('.sim-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const screenId = tab.getAttribute('data-screen');
      switchSimulatorTab(screenId);
    });
  });
}

/**
 * Switch Active Simulator Screen View
 * @param {string} screenId 
 */
function switchSimulatorTab(screenId) {
  // Update Tab States
  document.querySelectorAll('.sim-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-screen') === screenId);
  });

  // Update Screen Views inside Phone
  document.querySelectorAll('.screen-view').forEach(view => {
    view.classList.toggle('active', view.id === `view-${screenId}`);
  });

  // Update Explainer Notes
  const notesContainer = document.getElementById('featureNotesContent');
  if (notesContainer && SCREEN_NOTES[screenId]) {
    notesContainer.textContent = SCREEN_NOTES[screenId];
  }
}

/**
 * Configure Live Search Input and Clear Button
 */
function setupLiveSearch() {
  const searchInput = document.getElementById('liveSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');

  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    renderMedicationList(searchInput.value, getActiveFilter());
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchInput.focus();
      renderMedicationList('', getActiveFilter());
    });
  }
}

/**
 * Configure Filter Chips
 */
function setupFilterChips() {
  const chips = document.querySelectorAll('.filter-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const searchInput = document.getElementById('liveSearchInput');
      renderMedicationList(searchInput ? searchInput.value : '', chip.getAttribute('data-filter'));
    });
  });
}

/**
 * Get Current Active Filter Type
 * @returns {string}
 */
function getActiveFilter() {
  const activeChip = document.querySelector('.filter-chip.active');
  return activeChip ? activeChip.getAttribute('data-filter') : 'all';
}

/**
 * Render Filtered Medication Cards
 * @param {string} query 
 * @param {string} filterType 
 */
function renderMedicationList(query, filterType) {
  const container = document.getElementById('medListContainer');
  if (!container) return;

  const cleanQuery = (query || '').toLowerCase().trim();

  const filtered = CLINICAL_DRUGS.filter(drug => {
    const matchesQuery = !cleanQuery || 
      drug.generic.toLowerCase().includes(cleanQuery) ||
      drug.brand.toLowerCase().includes(cleanQuery) ||
      drug.mdc.toLowerCase().includes(cleanQuery);

    if (!matchesQuery) return false;

    if (filterType === 'all') return true;
    if (filterType === 'quota') return drug.hasQuota;
    return drug.type === filterType;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="padding: 1.5rem; text-align: center; color: var(--slate-400); font-size: 0.78rem;">
        No local clinical entries matching "<strong>${query}</strong>".
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(drug => `
    <div class="med-card ${drug.hasQuota ? 'has-quota' : ''}" onclick="${drug.hasQuota ? "switchSimulatorTab('quota')" : "switchSimulatorTab('monograph')"}">
      <div class="med-top">
        <div>
          <div class="med-generic">${drug.generic}</div>
          <div class="med-brand">${drug.brand}</div>
        </div>
        ${drug.hasQuota ? '<span class="badge-quota-mini">QUOTA</span>' : '<span class="badge-cat-b">CAT B</span>'}
      </div>
      <div class="med-desc">${drug.desc}</div>
      <div class="med-footer">
        <span class="tag-mdc">MDC: ${drug.mdc}</span>
        <span class="tag-cat ${drug.hasQuota ? 'text-amber' : 'text-teal'}">${drug.category}</span>
      </div>
    </div>
  `).join('');
}

/**
 * Simulate Offline Database Background Sync Sequence
 */
function runSyncSimulation() {
  const shield = document.getElementById('syncShield');
  const title = document.getElementById('syncTitleText');
  const timestamp = document.getElementById('syncTimestampDisplay');
  const triggerBtn = document.getElementById('triggerSyncBtn');

  if (!shield || !title || !triggerBtn) return;

  triggerBtn.disabled = true;
  triggerBtn.style.opacity = '0.6';
  shield.classList.add('spinning');
  title.textContent = 'Syncing Medication DB (v2.8.5)...';

  setTimeout(() => {
    shield.classList.remove('spinning');
    title.textContent = '100% Offline Ready';
    
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    if (timestamp) {
      timestamp.textContent = `Today at ${timeStr}`;
    }

    triggerBtn.disabled = false;
    triggerBtn.style.opacity = '1';
    showToast('Database Synchronized & Cached in IndexedDB!');
  }, 1200);
}

/**
 * Copy Color Token Hex Code to Clipboard
 * @param {string} hexCode 
 * @param {string} name 
 */
function copyToken(hexCode, name) {
  navigator.clipboard.writeText(hexCode).then(() => {
    showToast(`Copied ${name} (${hexCode})`);
  }).catch(() => {
    showToast(`Hex code: ${hexCode}`);
  });
}

/**
 * Fetch and Copy Raw SVG Content to Clipboard
 * @param {string} filePath 
 */
function copyFileContent(filePath) {
  fetch(filePath)
    .then(res => res.text())
    .then(text => {
      navigator.clipboard.writeText(text).then(() => {
        showToast('SVG XML Code copied to clipboard!');
      });
    })
    .catch(() => {
      showToast('Downloaded SVG asset directly.');
    });
}

/**
 * Display User Feedback Toast
 * @param {string} message 
 */
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}
