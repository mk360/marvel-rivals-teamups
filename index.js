let currentTeam = [null, null, null, null, null, null];
let teamSlots = ['free', 'free', 'free', 'free', 'free', 'free'];
let currentSlotIndex = null;
const gameVersionSelect = document.getElementById("gameVersion");

// Initialize the app
function init() {
    createTeamSlots();
    populateHeroRoster();
    setupEventListeners();
}

function createTeamSlots() {
    const teamSlotsContainer = document.getElementById('teamSlots');
    teamSlotsContainer.innerHTML = '';

    for (let i = 0; i < 6; i++) {
        const slot = document.createElement('div');
        slot.className = 'bg-marvel-accent/20 border-2 border-dashed border-marvel-accent/30 rounded-lg p-4 min-h-[120px] flex flex-col items-center justify-center cursor-pointer hover:border-blue-500/50 transition-colors group';
        slot.innerHTML = `
                    <div class="text-center">
                        <div class="w-12 h-12 bg-marvel-accent/30 rounded-lg mb-2 mx-auto flex items-center justify-center">
                            <span class="text-2xl">?</span>
                        </div>
                        <div class="text-sm font-medium mb-1">Slot ${i + 1}</div>
                        <div class="text-xs text-marvel-text/70">${teamSlots[i] === 'free' ? 'Any Role' : teamSlots[i].toUpperCase()}</div>
                        <button class="text-xs text-blue-400 hover:text-blue-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity slot-${i + 1}">
                            ${currentTeam[i] ? 'Change' : 'Select'}
                        </button>
                    </div>
                `;
        teamSlotsContainer.appendChild(slot);
        const btn = document.getElementsByClassName("slot-" + (i + 1))[0];
        btn.addEventListener('click', () => openCharacterModal(i));
    }
}

function updateTeamSlot(index) {
    const slots = document.querySelectorAll('#teamSlots > div');
    const slot = slots[index];
    const hero = currentTeam[index];

    if (hero) {
        const role = getHeroRole(hero);
        const roleColors = {
            tank: 'border-blue-500 bg-blue-500/10',
            dps: 'border-red-500 bg-red-500/10',
            healer: 'border-green-500 bg-green-500/10'
        };

        slot.className = `${roleColors[role]} border-2 rounded-lg p-4 min-h-[120px] flex flex-col items-center justify-center cursor-pointer hover:brightness-110 transition-all group`;
        slot.innerHTML = `
                    <div class="text-center">
                        <div class="w-12 h-12 rounded-lg mb-2 mx-auto flex items-center justify-center text-xs font-bold hero-picture ${hero.toLowerCase().replace(/[. &]/g, "")}">
                        </div>
                        <div class="text-sm font-medium mb-1">${hero}</div>
                        <div class="text-xs text-marvel-text/70">${role.toUpperCase()}</div>
                        <button class="text-xs text-blue-400 hover:text-blue-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            Change
                        </button>
                        <button class="text-xs text-red-400 hover:text-red-300 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" onclick="removeHero(${index}); event.stopPropagation();">
                            Remove
                        </button>
                    </div>
                `;
    }
}

function populateHeroRoster() {
    const currentSeason = gameVersionSelect.value;
    const { HEROES: heroes } = TEAMUPS_DATA[currentSeason];
    populateHeroGrid('tankHeroes', heroes.tank, 'tank');
    populateHeroGrid('dpsHeroes', heroes.dps, 'dps');
    populateHeroGrid('healerHeroes', heroes.healer, 'healer');

    populateHeroGrid('modalTankHeroes', heroes.tank, 'tank');
    populateHeroGrid('modalDpsHeroes', heroes.dps, 'dps');
    populateHeroGrid('modalHealerHeroes', heroes.healer, 'healer');
}

function populateHeroGrid(containerId, heroList, role) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    heroList.forEach(hero => {
        const heroElement = document.createElement('div');
        const isSelected = currentTeam.includes(hero);
        const roleColors = {
            tank: 'border-blue-500/50',
            dps: 'border-red-500/50',
            healer: 'border-green-500/50'
        };

        heroElement.className = `relative bg-marvel-accent/20 ${roleColors[role]} border rounded-lg p-2 cursor-pointer hover:bg-marvel-accent/30 transition-colors ${isSelected ? 'opacity-50' : ''}`;
        heroElement.innerHTML = `
                    <div class="aspect-square rounded mb-1 flex items-center justify-center text-xs font-bold hero-picture ${hero.toLowerCase().replace(/[. &]/g, "")}">
                    </div>
                    <div class="text-xs text-center leading-tight">${hero}</div>
                    ${isSelected ? '<div class="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center"><span class="text-xs font-bold">SELECTED</span></div>' : ''}
                `;

        if (containerId.startsWith('modal') && !isSelected) {
            heroElement.addEventListener('click', () => selectHero(hero));
        }

        container.appendChild(heroElement);
    });
}

function openCharacterModal(slotIndex) {
    currentSlotIndex = slotIndex;
    document.getElementById('characterModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCharacterModal() {
    document.getElementById('characterModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
    currentSlotIndex = null;
}

function selectHero(hero) {
    if (currentSlotIndex !== null) {
        currentTeam[currentSlotIndex] = hero;
        const role = getHeroRole(hero);
        teamSlots[currentSlotIndex] = role;
        updateTeamSlot(currentSlotIndex);
        populateHeroRoster(); // Refresh to show selected state
        closeCharacterModal();
        checkTeamUps(currentTeam);
    }
}

function removeHero(index) {
    currentTeam[index] = null;
    teamSlots[index] = "free";
    createTeamSlots(); // Recreate slots to reset appearance
    for (let i = 0; i < 6; i++) {
        updateTeamSlot(i);
    }
    populateHeroRoster(); // Refresh hero roster
    checkTeamUps(currentTeam);
}

function getHeroRole(hero) {
    const currentSeason = gameVersionSelect.value;
    const { HEROES: heroes } = TEAMUPS_DATA[currentSeason];
    if (heroes.tank.includes(hero)) return 'tank';
    if (heroes.dps.includes(hero)) return 'dps';
    if (heroes.healer.includes(hero)) return 'healer';
    return 'unknown';
}

function checkTeamUps(team) {
    const currentSeason = gameVersionSelect.value;
    const teamUps = TEAMUPS_DATA[currentSeason].TEAMUP_NAMES;
    const activeTeamUps = team.filter((mem) => {
        const isAnchor = mem in teamUps;
        if (isAnchor) {
            const teamupActivated = TEAMUPS_DATA[currentSeason].TEAM_UPS[mem].some((partner) => team.includes(partner));
            return isAnchor && teamupActivated;
        }
        return false;
    }).map((anchor) => {
        const teamupName = TEAMUPS_DATA[currentSeason].TEAMUP_NAMES[anchor].teamup;
        const teamupEffect = TEAMUPS_DATA[currentSeason].TEAMUP_NAMES[anchor].effect;
        const memberList = TEAMUPS_DATA[currentSeason].TEAM_UPS[anchor].map((partner) => ({
            partner,
            included: team.includes(partner)
        }));
        return {
            teamupName,
            memberList: memberList.sort((i, j) => +j.included - +i.included),
            anchor,
            effect: teamupEffect
        };
    });

    displayTeamUps(activeTeamUps);
}

function displayTeamUps(activeTeamUps) {
    const explanation = document.getElementById('teamupExplanation');
    const details = document.getElementById('teamupDetails');

    if (activeTeamUps.length === 0) {
        explanation.classList.add('hidden');
        return;
    }

    explanation.classList.remove('hidden');
    details.innerHTML = '';

    activeTeamUps.forEach(teamUp => {
        const teamUpElement = document.createElement('div');
        teamUpElement.className = 'bg-marvel-accent/20 rounded-lg py-4 px-2 border border-marvel-accent/30 grid grid-cols-[1fr_4fr] gap-x-4 grid-rows-[auto_auto_auto]';
        teamUpElement.innerHTML = `
                    <div></div>
                    <h4 class="font-semibold text-lg mb-2 text-yellow-400">${teamUp.teamupName}</h4>
                    <img class="md:h-full md:w-full w-24 h-24" src="./teamup-icons/${teamUp.teamupName.replace(/[ :]/g, "-").toLowerCase()}.webp" />
                    <div>
                        <div class="flex gap-4 items-center"><div class="w-24 h-24 rounded-lg font-bold hero-picture ${teamUp.anchor.toLowerCase().replace(/[. &]/g, "")}"></div>
                        ${teamUp.memberList.map((partnerData) => {
            return `<div class="bg-marvel-accent/20 my-4 w-24 h-24 rounded-lg font-bold hero-picture ${partnerData.partner.toLowerCase().replace(/[. &]/g, "")}">
                            ${!partnerData.included ? `<div class="h-full w-full bg-black/50"></div>` : ""}
            </div>`;
        }).join("")}
        </div>
        </div>
        <div class="md:block sm:hidden"></div>
        <p class="text-sm mb-2 md:col-span-1 sm:col-span-2"><strong>Effect:</strong> ${teamUp.effect}</p>
                `;
        details.appendChild(teamUpElement);
    });
}

function generateTeam() {
    // Simple team generation logic
    const teamupMode = document.querySelector('input[name="teamupMode"]:checked').value;
    const teamGenerationStrategy = TEAMUP_STRATEGIES[teamupMode];

    if (!teamGenerationStrategy) {
        alert("An error happened. Please report it using the GitHub link.");
    } else {
        const currentSeason = gameVersionSelect.value;
        const tankLimit = +document.getElementById("tank-count").value;
        const dpsLimit = +document.getElementById("dps-count").value;
        const healerLimit = +document.getElementById("strategists-count").value;
        const teamupLimit = +document.getElementById("teamupLimit").value;

        const context = {
            currentLineup: currentTeam.filter(Boolean),
            roleRestrictions: {
                tank: tankLimit,
                dps: dpsLimit,
                healer: healerLimit
            },
            currentSeason,
            teamupLimit
        };

        const generatedTeam = teamGenerationStrategy(context);
        currentTeam = generatedTeam;

        // Update all slots
        for (let i = 0; i < 6; i++) {
            updateTeamSlot(i);
        }

        populateHeroRoster();
        checkTeamUps(currentTeam);

        // Scroll to team-up explanation if visible
        setTimeout(() => {
            const explanation = document.getElementById('teamupExplanation');
            if (!explanation.classList.contains('hidden')) {
                explanation.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
}

function setupEventListeners() {
    gameVersionSelect.onchange = function () {
        currentTeam = [null, null, null, null, null, null];
        teamSlots = ['free', 'free', 'free', 'free', 'free', 'free'];
        currentSlotIndex = null;
        populateHeroRoster();
        createTeamSlots();
        document.getElementById("teamupDetails").innerHTML = "";
    };
    // Close modal
    document.getElementById('closeModal').addEventListener('click', closeCharacterModal);
    document.getElementById('characterModal').addEventListener('click', (e) => {
        if (e.target.id === 'characterModal') {
            closeCharacterModal();
        }
    });

    // Team-up mode controls
    document.querySelectorAll('input[name="teamupMode"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const limitControls = document.getElementById('teamupLimitControls');
            const roleSpreadControls = document.getElementById("roleSpreadControls");
            if (e.target.value === 'limited') {
                limitControls.classList.remove('hidden');
                roleSpreadControls.classList.add('hidden');

            } else if (e.target.value === "role-spread") {
                limitControls.classList.add('hidden');
                roleSpreadControls.classList.remove("hidden");
            } else {
                roleSpreadControls.classList.add("hidden");
                limitControls.classList.add('hidden');
            }
        });
    });

    // Team-up limit slider
    const teamupLimit = document.getElementById('teamupLimit');
    const teamupLimitValue = document.getElementById('teamupLimitValue');
    teamupLimit.addEventListener('input', (e) => {
        teamupLimitValue.textContent = e.target.value;
    });

    // role spread controls
    const roleSpreadInputs = document.querySelectorAll('input[name="role-spread"]');
    function updateRoleSpreadMax() {
        const values = Array.from(roleSpreadInputs).map(input => parseInt(input.value, 10) || 0);
        const total = values.reduce((a, b) => a + b, 0);
        roleSpreadInputs.forEach((input, idx) => {
            const othersSum = total - values[idx];
            input.max = Math.max(0, 6 - othersSum);
        });
    }
    roleSpreadInputs.forEach(input => {
        input.addEventListener('input', updateRoleSpreadMax);
    });
    updateRoleSpreadMax();

    // Generate team button
    document.getElementById('generateTeam').addEventListener('click', generateTeam);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCharacterModal();
        }
    });
}

// Global function for removing heroes (called from onclick)
window.removeHero = removeHero;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);