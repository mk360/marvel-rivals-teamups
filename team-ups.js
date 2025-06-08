const TEAMUP_STRATEGIES = {
    "role-spread": generateTeamWithRoleSpread,
    "full-teamups": generateTeamupOptimizedTeam,
    "limited": generateHybridTeam
};

function generateTeamWithRoleSpread({ currentLineup, roleRestrictions, currentSeason }) {
    const { CHARACTER_ROLES, TEAM_UPS, HEROES: heroes } = TEAMUPS_DATA[currentSeason];
    const roleCounts = { tank: 0, dps: 0, healer: 0 };
    const finalTeam = new Set(currentLineup);
    finalTeam.forEach((member) => {
        const role = getHeroRole(member);
        if (role) {
            roleCounts[role]++;
        } else {
            console.warn("Unknown Role for character: ", member);
        }
    });
    if (roleCounts.tank > roleRestrictions.tank) {
        alert(`Invalid criteria: specified a team with ${roleRestrictions.tank} tank(s), found ${roleCounts.tank}.`);
        return currentLineup;
    }
    if (roleCounts.dps > roleRestrictions.dps) {
        alert(`Invalid criteria: specified a team with ${roleRestrictions.dps} DPS, found ${roleCounts.dps}.`);
        return currentLineup;
    }
    if (roleCounts.healer > roleRestrictions.healer) {
        alert(`Invalid criteria: specified a team with ${roleRestrictions.healer} Healer(s), found ${roleCounts.healer}.`);
        return currentLineup;
    }

    // prune invalid choices: remove characters whose slots are already full
    const validRoster = Object.keys(CHARACTER_ROLES).filter((char) => {
        const role = getHeroRole(char);
        return roleRestrictions[role] !== roleCounts[role];
    }).sort(() => {
        return Math.random() < 0.5 ? -1 : 1; // because why not
    });


    const validTeamAnchors = validRoster.filter((i) => i in TEAM_UPS);

    while (finalTeam.size <= 5 && validTeamAnchors.length) {
        const randomAnchor = validTeamAnchors.splice(Math.floor(Math.random() * validTeamAnchors.length), 1)[0];
        const anchorRole = getHeroRole(randomAnchor);
        const spotsToBook = {
            dps: 0,
            tank: 0,
            healer: 0,
            [anchorRole]: 1
        };
        const anchorCanBeAdded = roleCounts[anchorRole] + 1 <= roleRestrictions[anchorRole];
        if (anchorCanBeAdded) {
            const partners = TEAM_UPS[randomAnchor].filter((partner) => {
                const partnerRole = getHeroRole(partner);
                spotsToBook[partnerRole]++;
                // ie with adam & mantis' teamup, we need to save 1 healer spot for Adam, and 1 for Mantis
                const partnerCanBeAdded = roleCounts[partnerRole] + spotsToBook[partnerRole] <= roleRestrictions[partnerRole];
                if (!partnerCanBeAdded) spotsToBook[partnerRole]--; // although this doesn't change much, it keeps the counter state in sync
                return partnerCanBeAdded;
            });

            if (partners.length) {
                finalTeam.add(randomAnchor);
                roleCounts[anchorRole]++;
                for (let partner of partners) {
                    roleCounts[getHeroRole(partner)]++;
                    finalTeam.add(partner);
                }
            }
        }
    }

    const remainingRolesToFill = ["tank", "dps", "healer"].filter((role) => roleCounts[role] < roleRestrictions[role]);
    for (let role of remainingRolesToFill) {
        const validHeroes = heroes[role].filter((hero) => !finalTeam.has(hero));
        finalTeam.add(validHeroes.splice(Math.floor(Math.random() * validHeroes.length), 1)[0]);
        roleCounts[role]++;
        if (roleCounts[role] === roleRestrictions[role]) continue;
        if (finalTeam.size === 6) break;
    }

    return [...finalTeam];
}

function generateHybridTeam({ currentLineup, teamupLimit, currentSeason }) {
    const { CHARACTER_ROLES, TEAM_UPS } = TEAMUPS_DATA[currentSeason];
    const team = new Set(currentLineup);
    const teamUpsKeys = Object.keys(TEAM_UPS);
    const existingTeamups = teamUpsKeys.filter((anchor) => {
        const partners = TEAM_UPS[anchor];
        const alreadyTeamupped = currentLineup.includes(anchor) && !!partners.filter((partner) => currentLineup.includes(partner)).length;
        return alreadyTeamupped;
    });
    let currentTeamupCount = existingTeamups.length;

    while (currentTeamupCount < teamupLimit) {
        const remainingTeamups = teamUpsKeys.filter((anchor) => {
            return !existingTeamups.includes(anchor);
        }).sort(() => {
            return Math.random() < 0.5 ? -1 : 1; // because why not
        });

        const randomPick = remainingTeamups.pop();
        const partners = TEAM_UPS[randomPick].filter((p) => !team.has(p));
        let needAnchor = false;
        for (let partner of partners) {
            if (team.size <= 5) {
                team.add(partner);
                needAnchor = true;
            }
        }
        if (needAnchor) {
            team.add(randomPick);
            currentTeamupCount++;
        }
    }

    if (team.size === 6) return [...team];

    const remainingCharacters = Object.keys(CHARACTER_ROLES).filter((i) => !team.has(i));

    const teamupsCopy = { ...TEAM_UPS };
    for (let anchor in teamupsCopy) {
        const partners = teamupsCopy[anchor];
        if (team.has(anchor) || !!partners.filter((i) => team.has(i)).length) {
            remainingCharacters.splice(remainingCharacters.indexOf(anchor), 1);
        }
    }

    while (team.size < 6) {
        const [pick] = remainingCharacters.sort(() => {
            return Math.random() < 0.5 ? -1 : 1; // because, again why not
        });
        team.add(pick);
    }
    return [...team];
}


function generateTeamupOptimizedTeam({ currentLineup, currentSeason }) {
    const TEAMUPS_COPY = { ...TEAMUPS_DATA[currentSeason].TEAM_UPS };
    const finalTeam = new Set(currentLineup);
    const seen = new Set(finalTeam);

    function addTeamUpsFrom(character) {
        let added = false;
        const direct = TEAMUPS_COPY[character] || [];
        for (const partner of direct) {
            if (!seen.has(partner)) {
                finalTeam.add(partner);
                seen.add(partner);
                added = true;
                if (finalTeam.size >= 6) return true;
            }
        }

        for (const [hero, partners] of Object.entries(TEAMUPS_COPY)) {
            if (partners.includes(character) && !seen.has(hero)) {
                finalTeam.add(hero);
                seen.add(hero);
                added = true;
                if (finalTeam.size >= 6) return true;
            }
        }

        return added;
    }

    // Step 1: Expand existing members with known team-ups
    let expanded = true;
    while (expanded && finalTeam.size < 6) {
        expanded = false;
        for (const member of [...finalTeam]) {
            if (addTeamUpsFrom(member)) {
                expanded = true;
                if (finalTeam.size >= 6) break;
            }
        }
    }

    // Step 2: If no more expansions, pick random and repeat
    const allHeroes = Object.keys(TEAMUPS_COPY);
    while (finalTeam.size < 6) {
        const pool = allHeroes.filter(h => !seen.has(h));
        if (pool.length === 0) break;

        const randomPick = pool[Math.floor(Math.random() * pool.length)];
        finalTeam.add(randomPick);
        seen.add(randomPick);

        addTeamUpsFrom(randomPick);
    }

    return [...finalTeam].slice(0, 6);
}
