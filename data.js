const TEAMUPS_DATA = {
    "Season 2.5": { // ultron update
        TEAM_UPS: {
            // previous team-ups
            "Spider-Man": ["Squirrel Girl"],
            "Hela": ["Loki", "Thor"],
            "Cloak & Dagger": ["Moon Knight"],
            "Invisible Woman": ["Human Torch", "The Thing", "Mr. Fantastic"],
            "Captain America": ["Winter Soldier"],
            "Adam Warlock": ["Star-Lord", "Mantis"],
            "Hulk": ["Namor"],
            "Iron Fist": ["Luna Snow"],
            "Magik": ["Black Panther"],
            "Emma Frost": ["Psylocke", "Magneto"],
            "Dr. Strange": ["Scarlet Witch"],
            "Storm": ["Human Torch"],
            "Wolverine": ["The Thing", "Hulk"],
            "Groot": ["Jeff the Land Shark", "Rocket Raccoon"],
            // new team-ups
            "Luna Snow": ["Hawkeye"],
            "Jeff the Land Shark": ["Storm"],
            "The Punisher": ["Black Widow"],
            "Iron Man": ["Ultron"],
            "Rocket Raccoon": ["Peni Parker"],
            "Venom": ["Jeff the Land Shark"],
        },
        CHARACTER_ROLES: {
            "Captain America": "tank",
            "Dr. Strange": "tank",
            "Emma Frost": "tank",
            "Groot": "tank",
            "Hulk": "tank",
            "Magneto": "tank",
            "Peni Parker": "tank",
            "The Thing": "tank",
            "Thor": "tank",
            "Venom": "tank",
            "Black Panther": "dps",
            "Black Widow": "dps",
            "Hawkeye": "dps",
            "Hela": "dps",
            "Human Torch": "dps",
            "Iron Fist": "dps",
            "Iron Man": "dps",
            "Magik": "dps",
            "Moon Knight": "dps",
            "Mr. Fantastic": "dps",
            "Namor": "dps",
            "Psylocke": "dps",
            "Squirrel Girl": "dps",
            "Spider-Man": "dps",
            "Star-Lord": "dps",
            "The Punisher": "dps",
            "Winter Soldier": "dps",
            "Wolverine": "dps",
            "Scarlet Witch": "dps",
            "Storm": "dps",
            "Adam Warlock": "healer",
            "Cloak & Dagger": "healer",
            "Invisible Woman": "healer",
            "Jeff the Land Shark": "healer",
            "Loki": "healer",
            "Ultron": "healer",
            "Luna Snow": "healer",
            "Mantis": "healer",
            "Rocket Raccoon": "healer"
        },
        TEAMUP_NAMES: {
            "Dr. Strange": {
                teamup: "Arcane Order",
                effect: "Grants Dr. Strange 150 extra HP. Replaces Scarlet Witch's E Ability with Mystic Burst."
            },
            "Iron Fist": {
                teamup: "Atlas Bond",
                effect: "Grants Iron Fist a 10% damage boost. Grants Luna Snow the \"Frozen Chi\" Ability, which hits enemies with an ice shockwave."
            },
            "Luna Snow": {
                teamup: "Chilling Assault",
                effect: "Grants Luna Snow a 15% healing boost. Grants Hawkeye the \"Ice Arrow\" Ability, which pierces through obstacles and freezes enemies."
            },
            "Magik": {
                teamup: "Dimensional Shortcut",
                effect: "Grants Magik a 15% damage boost. Grants Black Panther the \"Wakandan Master\" Ability, allowing him to get Bonus Health and teleport back a few steps."
            },
            "Spider-Man": {
                teamup: "ESU Alumnus",
                effect: "Grants Spider-Man a 10% damage boost. Grants Squirrel Girl the \"Webbed Acorn\" Ability, which is a projectile that stuns targets in place."
            },
            "Invisible Woman": {
                teamup: "Fantastic Four",
                effect: "Grants Invisible Woman a 15% healing boost. Grants the other Fantastic 4 members an extra Ability, which grants Bonus Health."
            },
            "Wolverine": {
                teamup: "Metal Cannonball",
                effect: "Grants Hulk and The Thing an Ability which allows them to launch Wolverine forward. They can launch him together, or separately."
            },
            "Hulk": {
                teamup: "Gamma Monstro",
                effect: "Grants Hulk 100 extra HP in both his transformed forms. Grants Namor the \"Gamma Monstro\" Ability, which allows him to summon an upgraded Monstro."
            },
            "Adam Warlock": {
                teamup: "Guardian Revival",
                effect: "Grants Adam Warlock a 15% healing boost. Grants Mantis and Star-Lord the Ability to respawn in-battle when they die."
            },
            "Jeff the Land Shark": {
                teamup: "Jeff-Nado",
                effect: "When Storm activates Omega Hurricane, then Jeff activates It's Jeff!, both Ultimates can combine, swallowing enemies and trapping them inside the hurricane."
            },
            "Cloak & Dagger": {
                teamup: "Lunar Force",
                effect: "Grants Cloak & Dagger a 15% healing boost. Grants Moon Knight the \"Full Moon\" Ability, allowing him to create an area where he can heal and become invisible."
            },
            "Emma Frost": {
                teamup: "Mental Projection",
                effect: "Grants Emma Frost 100 extra HP. Grants Magneto and Psylocke an Ability which summons a clone that deals damage separately."
            },
            "The Punisher": {
                teamup: "Operation: Microchip",
                effect: "Grants The Punisher a 5% damage boost and 25 extra HP. Grants Black Widow the \"Pulse Rifle\" Ability, which allows her to pierce through multiple enemies."
            },
            "Groot": {
                teamup: "Planet X Pals",
                effect: "Grants Groot 150 extra HP. Grants whoever rides Groot's shoulder (either Rocket Raccoon or Jeff the Land Shark) 35% damage reduction."
            },
            "Hela": {
                teamup: "Ragnarok Rebirth",
                effect: "Grants Hela a 15% damage boost. Whenever Hela makes a kill, resurrects Thor and Loki if they are waiting to respawn, or grants them Bonus Health if they were alive."
            },
            "Rocket Raccoon": {
                teamup: "Rocket Network",
                effect: "Grants Rocket Raccoon a 5% healing boost. Upgrades his E Ability, spawning Arachno-Mines and Spider-Drones on top of its existing function. Grants Peni the \"Armored Spider-Nest\" Ability, which spawns an additional Spider-Nest."
            },
            "Captain America": {
                teamup: "Stars Aligned",
                effect: "Grants Captain America a 5% damage boost and 100 extra HP. Grants both members an extra Ability, which grants bonus health to any ally in the activation range (including Captain America and Winter Soldier)."
            },
            "Iron Man": {
                teamup: "Stark Protocol",
                effect: "Grants Iron Man a 5% damage boost. Grants Ultron the \"Nano Ray\" Ability, which deals piercing damage to enemies while healing allies in the beam's path."
            },
            "Storm": {
                teamup: "Storming Ignition",
                effect: "When either of Human Torch or Storm activate their Ultimate Ability, the other can follow up with theirs, creating a burning hurricane."
            },
            "Venom": {
                teamup: "Symbiote Shenanigans",
                effect: "Grants Venom 150 extra HP. Grants Jeff the Land Shark the \"Guardian of the Deep\" Ability, enabling passive healing, with extra bonus health."
            }
        },
        HEROES: {
            tank: ['Captain America', 'Dr. Strange', 'Emma Frost', 'Groot', 'Hulk', 'Magneto', 'Peni Parker', 'The Thing', 'Thor', 'Venom'],
            dps: ['Black Panther', 'Black Widow', 'Hawkeye', 'Hela', 'Human Torch', 'Iron Fist', 'Iron Man', 'Magik', 'Moon Knight', 'Mr. Fantastic', 'Namor', 'Psylocke', 'Scarlet Witch', 'Squirrel Girl', 'Spider-Man', 'Star-Lord', 'Storm', 'The Punisher', 'Winter Soldier', 'Wolverine'],
            healer: ['Adam Warlock', 'Cloak & Dagger', 'Invisible Woman', 'Jeff the Land Shark', 'Loki', 'Luna Snow', 'Mantis', 'Rocket Raccoon', "Ultron"]
        }
    },
    "Season 2": { // emma frost update
        TEAM_UPS: {
            // old team-ups
            "Rocket Raccoon": ["The Punisher"],
            "Venom": ["Spider-Man", "Peni Parker"],
            "Spider-Man": ["Squirrel Girl"],
            "Hela": ["Loki", "Thor"],
            "Cloak & Dagger": ["Moon Knight"],
            "Hawkeye": ["Black Widow"],
            "Groot": ["Jeff the Land Shark", "Rocket Raccoon"],
            "Invisible Woman": ["Human Torch", "The Thing", "Mr. Fantastic"],
            "Adam Warlock": ["Star-Lord", "Mantis"],
            "Luna Snow": ["Jeff the Land Shark"],
            "Iron Fist": ["Luna Snow"],
            "Magik": ["Black Panther"],
            "Storm": ["Human Torch"],
            // new team-ups
            "Hulk": ["Namor", "Iron Man"],
            "Captain America": ["Winter Soldier"],
            "Dr. Strange": ["Scarlet Witch"],
            "Wolverine": ["The Thing", "Hulk"],
            "Emma Frost": ["Psylocke", "Magneto"],
        },
        TEAMUP_NAMES: {
            "Adam Warlock": {
                teamup: "Guardian Revival",
                effect: "Grants Adam Warlock a 15% healing boost. Grants Mantis and Star-Lord the Ability to respawn in-battle when they die."
            },
            "Captain America": {
                teamup: "Stars Aligned",
                effect: "Grants Captain America a 5% damage boost and 100 extra HP. Grants both members an extra Ability, which grants bonus health to any ally in the activation range (including Captain America and Winter Soldier)."
            },
            "Cloak & Dagger": {
                teamup: "Lunar Force",
                effect: "Grants Cloak & Dagger a 15% healing boost. Grants Moon Knight the \"Full Moon\" Ability, allowing him to create an area where he can heal and become invisible."
            },
            "Dr. Strange": {
                teamup: "Arcane Order",
                effect: "Grants Dr. Strange 150 extra HP. Replaces Scarlet Witch's E Ability with Mystic Burst."
            },
            "Emma Frost": {
                teamup: "Mental Projection",
                effect: "Grants Emma Frost 100 extra HP. Grants Magneto and Psylocke an Ability which summons a clone that deals damage separately."
            },
            "Groot": {
                teamup: "Planet X Pals",
                effect: "Grants Groot 150 extra HP. Grants whoever rides Groot's shoulder (either Rocket Raccoon or Jeff the Land Shark) 35% damage reduction."
            },
            "Hawkeye": {
                teamup: "Allied Agents",
                effect: "Grants Hawkeye a 15% damage boost. Grants Black Widow the \"Supersensory Hunt\" Ability, which makes enemies generate afterimages that can be damaged."
            },
            "Hela": {
                teamup: "Ragnarok Rebirth",
                effect: "Grants Hela a 15% damage boost. Whenever Hela makes a kill, resurrects Thor and Loki if they are waiting to respawn, or grants them Bonus Health if they were alive."
            },
            "Hulk": {
                teamup: "Gamma Boost",
                effect: "Grants Hulk 100 extra HP in both his transformed forms. Grants Namor the \"Gamma Monstro\" Ability, which allows him to summon an upgraded Monstro. Grants Iron Man the \"Gamma Overdrive\" Ability, which upgrades his \"Armor Overdrive\" Ability."
            },
            "Iron Fist": {
                teamup: "Atlas Bond",
                effect: "Grants Iron Fist a 10% damage boost. Grants Luna Snow the \"Frozen Chi\" Ability, which hits enemies with an ice shockwave."
            },
            "Invisible Woman": {
                teamup: "Fantastic Four",
                effect: "Grants Invisible Woman a 15% healing boost. Grants the other Fantastic 4 members an extra Ability, which grants Bonus Health."
            },
            "Luna Snow": {
                teamup: "Chilling Charisma",
                effect: "Grants Luna Snow a 15% healing boost. Grants Jeff the Land Shark the \"Frozen Spitball\" Ability, which temporarily replaces his \"Aqua Burst\" Ability."
            },
            "Magik": {
                teamup: "Dimensional Shortcut",
                effect: "Grants Magik a 15% damage boost. Grants Black Panther the \"Wakandan Master\" Ability, allowing him to get Bonus Health and teleport back a few steps."
            },
            "Rocket Raccoon": {
                teamup: "Ammo Overload",
                effect: "Grants Rocket Raccoon a 5% healing boost. Grants him the \"Ammo Invention\" Ability, which grants The Punisher an increase in bullet firing speed and unlimited ammo when in range."
            },
            "Spider-Man": {
                teamup: "ESU Alumnus",
                effect: "Grants Spider-Man a 10% damage boost. Grants Squirrel Girl the \"Webbed Acorn\" Ability, which is a projectile that stuns targets in place."
            },
            "Storm": {
                teamup: "Storming Ignition",
                effect: "When either of Human Torch or Storm activate their Ultimate Ability, the other can follow up with theirs, creating a burning hurricane."
            },
            "Venom": {
                teamup: "Symbiote Bond",
                effect: "Grants Venom 150 extra HP. Grants Spider-Man and Peni Parker an Ability which deals additional damage and grants them temporary invincibility and."
            },
            "Wolverine": {
                teamup: "Metal Cannonball",
                effect: "Grants Hulk and The Thing an Ability which allows them to launch Wolverine forward. They can launch him together, or separately."
            }
        },
        HEROES: {
            tank: ['Captain America', 'Dr. Strange', 'Emma Frost', 'Groot', 'Hulk', 'Magneto', 'Peni Parker', 'The Thing', 'Thor', 'Venom'],
            dps: ['Black Panther', 'Black Widow', 'Hawkeye', 'Hela', 'Human Torch', 'Iron Fist', 'Iron Man', 'Magik', 'Moon Knight', 'Mr. Fantastic', 'Namor', 'Psylocke', 'Scarlet Witch', 'Squirrel Girl', 'Spider-Man', 'Star-Lord', 'Storm', 'The Punisher', 'Winter Soldier', 'Wolverine'],
            healer: ['Adam Warlock', 'Cloak & Dagger', 'Invisible Woman', 'Jeff the Land Shark', 'Loki', 'Luna Snow', 'Mantis', 'Rocket Raccoon']
        },
        CHARACTER_ROLES: {
            "Captain America": "tank",
            "Dr. Strange": "tank",
            "Emma Frost": "tank",
            "Groot": "tank",
            "Hulk": "tank",
            "Magneto": "tank",
            "Peni Parker": "tank",
            "The Thing": "tank",
            "Thor": "tank",
            "Venom": "tank",
            "Black Panther": "dps",
            "Black Widow": "dps",
            "Hawkeye": "dps",
            "Hela": "dps",
            "Human Torch": "dps",
            "Iron Fist": "dps",
            "Iron Man": "dps",
            "Magik": "dps",
            "Moon Knight": "dps",
            "Mr. Fantastic": "dps",
            "Namor": "dps",
            "Psylocke": "dps",
            "Squirrel Girl": "dps",
            "Spider-Man": "dps",
            "Star-Lord": "dps",
            "The Punisher": "dps",
            "Winter Soldier": "dps",
            "Wolverine": "dps",
            "Scarlet Witch": "dps",
            "Storm": "dps",
            "Adam Warlock": "healer",
            "Cloak & Dagger": "healer",
            "Invisible Woman": "healer",
            "Jeff the Land Shark": "healer",
            "Loki": "healer",
            "Luna Snow": "healer",
            "Mantis": "healer",
            "Rocket Raccoon": "healer"
        },
    },
    "Season 1.5": { // Human Torch & The Thing update
        TEAM_UPS: {
            // old team-ups
            "Rocket Raccoon": ["The Punisher", "Winter Soldier"],
            "Venom": ["Spider-Man", "Peni Parker"],
            "Spider-Man": ["Squirrel Girl"],
            "Hela": ["Loki", "Thor"],
            "Cloak & Dagger": ["Moon Knight"],
            "Hawkeye": ["Black Widow"],
            "Groot": ["Jeff the Land Shark", "Rocket Raccoon"],
            "Invisible Woman": ["Human Torch", "The Thing", "Mr. Fantastic"],
            "Adam Warlock": ["Star-Lord", "Mantis"],
            "Luna Snow": ["Jeff the Land Shark", "Namor"],
            "Hulk": ["Iron Man", "Dr. Strange"],
            "Iron Fist": ["Luna Snow"],
            "Magik": ["Black Panther", "Psylocke"],
            "Thor": ["Captain America", "Storm"],
            "Scarlet Witch": ["Magneto"],
            // new team-ups
            "Storm": ["Human Torch"],
            "Wolverine": ["Hulk", "The Thing"]
        },
        HEROES: {
            tank: ['Captain America', 'Dr. Strange', 'Emma Frost', 'Groot', 'Hulk', 'Magneto', 'Peni Parker', 'The Thing', 'Thor', 'Venom'],
            dps: ['Black Panther', 'Black Widow', 'Hawkeye', 'Hela', 'Human Torch', 'Iron Fist', 'Iron Man', 'Magik', 'Moon Knight', 'Mr. Fantastic', 'Namor', 'Psylocke', 'Scarlet Witch', 'Squirrel Girl', 'Spider-Man', 'Star-Lord', 'Storm', 'The Punisher', 'Winter Soldier', 'Wolverine'],
            healer: ['Adam Warlock', 'Cloak & Dagger', 'Invisible Woman', 'Jeff the Land Shark', 'Loki', 'Luna Snow', 'Mantis', 'Rocket Raccoon']
        },
        TEAMUP_NAMES: {
            "Adam Warlock": {
                teamup: "Guardian Revival",
                effect: "Grants Adam Warlock a 15% healing boost. Grants Mantis and Star-Lord the Ability to respawn in-battle when they die."
            },
            "Cloak & Dagger": {
                teamup: "Lunar Force",
                effect: "Grants Cloak & Dagger a 15% healing boost. Grants Moon Knight the \"Full Moon\" Ability, allowing him to create an area where he can heal and become invisible."
            },
            "Groot": {
                teamup: "Planet X Pals",
                effect: "Grants Groot 150 extra HP. Grants whoever rides Groot's shoulder (either Rocket Raccoon or Jeff the Land Shark) 35% damage reduction."
            },
            "Hawkeye": {
                teamup: "Allied Agents",
                effect: "Grants Hawkeye a 15% damage boost. Grants Black Widow the \"Supersensory Hunt\" Ability, which makes enemies generate afterimages that can be damaged."
            },
            "Hela": {
                teamup: "Ragnarok Rebirth",
                effect: "Grants Hela a 15% damage boost. Whenever Hela makes a kill, resurrects Thor and Loki if they are waiting to respawn, or grants them Bonus Health if they were alive."
            },
            "Hulk": {
                teamup: "Gamma Boost",
                effect: "Grants Hulk 100 extra HP in both his transformed forms. Upgrades Dr. Strange's \"Maelstrom of Madness\" Ability. Grants Iron Man the \"Gamma Overdrive\" Ability, which temporarily upgrades his kit."
            },
            "Invisible Woman": {
                teamup: "Fantastic Four",
                effect: "Grants Invisible Woman a 15% healing boost. Grants the other members of the Fantastic 4 an extra Ability, which grants Bonus Health."
            },
            "Iron Fist": {
                teamup: "Atlas Bond",
                effect: "Grants Iron Fist a 10% damage boost. Grants Luna Snow the \"Frozen Chi\" Ability, which hits enemies with an ice shockwave."
            },
            "Luna Snow": {
                teamup: "Chilling Assault",
                effect: "Grants Luna Snow a temporarily replaces% healing boost. Grants Jeff the Land Shark the \"Frozen Spitball\" Ability, which upgrades his \"Aqua Burst\" Ability. Grants Namor the \"Frozen Spawn\" Ability, which lets him summon an Ice Monstro."
            },
            "Magik": {
                teamup: "Dimensional Shortcut",
                effect: "Grants Magik a 15% damage boost. Grants Black Panther and Psylocke Abilities allowing them to get Bonus Health and teleport back a few steps."
            },
            "Rocket Raccoon": {
                teamup: "Ammo Overload",
                effect: "Grants Rocket Raccoon a 5% healing boost. Grants him the \"Ammo Invention\" Ability, which grants The Punisher and Winter Soldier an increase in bullet firing speed and unlimited ammo when in range."
            },
            "Scarlet Witch": {
                teamup: "Metallic Chaos",
                effect: "Grants Scarlet Witch a 10% damage boost. Grants Magneto the \"Metallic Fusion\" Ability, which replaces his Primary Fire."
            },
            "Storm": {
                teamup: "Storming Ignition",
                effect: "When either of Human Torch or Storm activate their Ultimate Ability, the other can follow up with theirs, creating a burning hurricane."
            },
            "Spider-Man": {
                teamup: "ESU Alumnus",
                effect: "Grants Spider-Man a 10% damage boost. Grants Squirrel Girl the \"Webbed Acorn\" Ability, which is a projectile that stuns targets in place."
            },
            "Thor": {
                teamup: "Voltaic Union",
                effect: "Grants Thor 100 extra HP. Grants Captain America the \"Charged Aegis\" Ability, which imbues his shield with thunder. Grants Storm the \"Charged Gale\" Ability, which allows her to strike enemies with lightning."
            },
            "Venom": {
                teamup: "Symbiote Bond",
                effect: "Grants Venom 150 extra HP. Grants Spider-Man and Peni Parker an Ability which deals additional damage and grants them temporary invincibility and."
            },
            "Wolverine": {
                teamup: "Fastball Special",
                effect: "Grants Hulk and The Thing an Ability which allows them to launch Wolverine forward."
            },
        },
        CHARACTER_ROLES: {
            "Captain America": "tank",
            "Dr. Strange": "tank",
            "Emma Frost": "tank",
            "Groot": "tank",
            "Hulk": "tank",
            "Magneto": "tank",
            "Peni Parker": "tank",
            "The Thing": "tank",
            "Thor": "tank",
            "Venom": "tank",
            "Black Panther": "dps",
            "Black Widow": "dps",
            "Hawkeye": "dps",
            "Hela": "dps",
            "Human Torch": "dps",
            "Iron Fist": "dps",
            "Iron Man": "dps",
            "Magik": "dps",
            "Moon Knight": "dps",
            "Mr. Fantastic": "dps",
            "Namor": "dps",
            "Psylocke": "dps",
            "Squirrel Girl": "dps",
            "Spider-Man": "dps",
            "Star-Lord": "dps",
            "The Punisher": "dps",
            "Winter Soldier": "dps",
            "Wolverine": "dps",
            "Scarlet Witch": "dps",
            "Storm": "dps",
            "Adam Warlock": "healer",
            "Cloak & Dagger": "healer",
            "Invisible Woman": "healer",
            "Jeff the Land Shark": "healer",
            "Loki": "healer",
            "Luna Snow": "healer",
            "Mantis": "healer",
            "Rocket Raccoon": "healer"
        },
    },
    "Season 1": { // Vanilla + Invisible Woman & Mr. Fantastic
        TEAM_UPS: {
            // vanilla team-ups
            "Rocket Raccoon": ["The Punisher", "Winter Soldier"],
            "Venom": ["Spider-Man", "Peni Parker"],
            "Spider-Man": ["Squirrel Girl"],
            "Hela": ["Loki", "Thor"],
            "Cloak & Dagger": ["Moon Knight"],
            "Hawkeye": ["Black Widow"],
            "Groot": ["Jeff the Land Shark", "Rocket Raccoon"],
            "Adam Warlock": ["Star-Lord", "Mantis"],
            "Hulk": ["Iron Man", "Dr. Strange"],
            "Iron Fist": ["Luna Snow"],
            "Luna Snow": ["Jeff the Land Shark", "Namor"],
            "Magik": ["Black Panther", "Psylocke"],
            "Thor": ["Captain America", "Storm"],
            "Scarlet Witch": ["Magneto"],
            "Wolverine": ["Hulk"],
            // new team-ups
            "Invisible Woman": ["Mr. Fantastic"],
        },
        TEAMUP_NAMES: {
            "Adam Warlock": {
                teamup: "Guardian Revival",
                effect: "Grants Adam Warlock a 15% healing boost. Grants Mantis and Star-Lord the Ability to respawn in-battle when they die."
            },
            "Cloak & Dagger": {
                teamup: "Lunar Force",
                effect: "Grants Cloak & Dagger a 15% healing boost. Grants Moon Knight the \"Full Moon\" Ability, allowing him to create an area where he can heal and become invisible."
            },
            "Groot": {
                teamup: "Planet X Pals",
                effect: "Grants Groot 150 extra HP. Grants whoever rides Groot's shoulder (either Rocket Raccoon or Jeff the Land Shark) 35% damage reduction."
            },
            "Hawkeye": {
                teamup: "Allied Agents",
                effect: "Grants Hawkeye a 15% damage boost. Grants Black Widow the \"Supersensory Hunt\" Ability, which makes enemies generate afterimages that can be damaged."
            },
            "Hela": {
                teamup: "Ragnarok Rebirth",
                effect: "Grants Hela a 15% damage boost. Whenever Hela makes a kill, resurrects Thor and Loki if they are waiting to respawn, or grants them Bonus Health if they were alive."
            },
            "Hulk": {
                teamup: "Gamma Boost",
                effect: "Grants Hulk 100 extra HP in both his transformed forms. Upgrades Dr. Strange's \"Maelstrom of Madness\" Ability. Grants Iron Man the \"Gamma Overdrive\" Ability, which temporarily upgrades his kit."
            },
            "Invisible Woman": {
                teamup: "Fantastic Four",
                effect: "Grants Invisible Woman a 15% healing boost. Grants Mr. Fantastic the \"Wedded Harmony\" Ability, which grants Bonus Health."
            },
            "Iron Fist": {
                teamup: "Atlas Bond",
                effect: "Grants Iron Fist a 10% damage boost. Grants Luna Snow the \"Frozen Chi\" Ability, which hits enemies with an ice shockwave."
            },
            "Luna Snow": {
                teamup: "Chilling Assault",
                effect: "Grants Luna Snow a temporarily replaces% healing boost. Grants Jeff the Land Shark the \"Frozen Spitball\" Ability, which upgrades his \"Aqua Burst\" Ability. Grants Namor the \"Frozen Spawn\" Ability, which lets him summon an Ice Monstro."
            },
            "Magik": {
                teamup: "Dimensional Shortcut",
                effect: "Grants Magik a 15% damage boost. Grants Black Panther and Psylocke Abilities allowing them to get Bonus Health and teleport back a few steps."
            },
            "Scarlet Witch": {
                teamup: "Metallic Chaos",
                effect: "Grants Scarlet Witch a 10% damage boost. Grants Magneto the \"Metallic Fusion\" Ability, which replaces his Primary Fire."
            },
            "Spider-Man": {
                teamup: "ESU Alumnus",
                effect: "Grants Spider-Man a 10% damage boost. Grants Squirrel Girl the \"Webbed Acorn\" Ability, which is a projectile that stuns targets in place."
            },
            "Rocket Raccoon": {
                teamup: "Ammo Overload",
                effect: "Grants Rocket Raccoon a 5% healing boost. Grants him the \"Ammo Invention\" Ability, which grants The Punisher and Winter Soldier an increase in bullet firing speed and unlimited ammo when in range."
            },
            "Thor": {
                teamup: "Voltaic Union",
                effect: "Grants Thor 100 extra HP. Grants Captain America the \"Charged Aegis\" Ability, which imbues his shield with thunder. Grants Storm the \"Charged Gale\" Ability, which allows her to strike enemies with lightning."
            },
            "Venom": {
                teamup: "Symbiote Bond",
                effect: "Grants Venom 150 extra HP. Grants Spider-Man and Peni Parker an Ability which deals additional damage and grants them temporary invincibility and."
            },
            "Wolverine": {
                teamup: "Fastball Special",
                effect: "Grants Hulk an Ability which allows him to launch Wolverine forward."
            },
        },
        HEROES: {
            tank: ['Captain America', 'Dr. Strange', 'Emma Frost', 'Groot', 'Hulk', 'Magneto', 'Peni Parker', 'Thor', 'Venom'],
            dps: ['Black Panther', 'Black Widow', 'Hawkeye', 'Hela', 'Iron Fist', 'Iron Man', 'Magik', 'Moon Knight', 'Mr. Fantastic', 'Namor', 'Psylocke', 'Scarlet Witch', 'Squirrel Girl', 'Spider-Man', 'Star-Lord', 'Storm', 'The Punisher', 'Winter Soldier', 'Wolverine'],
            healer: ['Adam Warlock', 'Cloak & Dagger', 'Invisible Woman', 'Jeff the Land Shark', 'Loki', 'Luna Snow', 'Mantis', 'Rocket Raccoon']
        },
        CHARACTER_ROLES: {
            "Captain America": "tank",
            "Dr. Strange": "tank",
            "Emma Frost": "tank",
            "Groot": "tank",
            "Hulk": "tank",
            "Magneto": "tank",
            "Peni Parker": "tank",
            "Thor": "tank",
            "Venom": "tank",
            "Black Panther": "dps",
            "Black Widow": "dps",
            "Hawkeye": "dps",
            "Hela": "dps",
            "Iron Fist": "dps",
            "Iron Man": "dps",
            "Magik": "dps",
            "Moon Knight": "dps",
            "Mr. Fantastic": "dps",
            "Namor": "dps",
            "Psylocke": "dps",
            "Squirrel Girl": "dps",
            "Spider-Man": "dps",
            "Star-Lord": "dps",
            "The Punisher": "dps",
            "Winter Soldier": "dps",
            "Wolverine": "dps",
            "Scarlet Witch": "dps",
            "Storm": "dps",
            "Adam Warlock": "healer",
            "Cloak & Dagger": "healer",
            "Invisible Woman": "healer",
            "Jeff the Land Shark": "healer",
            "Loki": "healer",
            "Luna Snow": "healer",
            "Mantis": "healer",
            "Rocket Raccoon": "healer"
        },
    }
};
