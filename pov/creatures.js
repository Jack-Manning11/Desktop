// Assuming you have loaded the creatures data from the JSON into a variable called 'creaturesData'
const creaturesData = 
    [
        {
            "name": "Celestial Owlite",
            "type": "companion",
            "description": "An owl with feathers that resemble a night sky filled with stars. Its hoots echo with magical resonance, providing guidance to those who listen. While their presence is quite rare, sightings of these owls tend to come to those seeking knowledge, their eyes sparkling with moving celestial bodies.",
            "location": ["Crescentwood Thicket", "Serenity's Glade"],
            "img": "Images/creatures/owlite.jpg",
            "powers": [
                {
                    "name": "Starlight Vision: ",
                    "type": "passive",
                    "effect": "The Celestial Owlite can cast the Guidance Spell at will. They can cast this spell a number of times per day equal to their companions Proficiency Bonus."
                },
                {
                    "name": "Flyby: ",
                    "type": "passive",
                    "effect": "The creature doesn't provoke opportunity attacks when it flies out of an enemy's reach."
                },
                {
                    "name": "Radiant Talons: ",
                    "type": "action",
                    "effect": "Melee Weapon Attack: +3 to hit, reach 5 ft. Hit: (1d6 + 2) Slashing damage. "
                },
                {
                    "name": "Starfall Barrage (Recharge 2): ",
                    "type": "action",
                    "effect": "The Owlite chooses a point with 60ft. of them. Creatures within 10ft. of that point must make a DC 12 Dexterity Saving Throw or take 2d8 radiant damage, half as much on a save. "
                },
                {
                    "name": "Ethereal Dodge: ",
                    "type": "reaction",
                    "effect": "The Celestial Owlite can use its reaction to phase briefly into the ethereal plane, imposing disadvantage on any incoming attack or gaining advantage on a saving throw for area of effect damage."
                }
            ]
        },
        {
            "name": "Magequill",
            "type": "companion",
            "description": "These small spiked creatures boast quills that resemble miniature wands, each one crackling with arcane energy. As they scamper, the quills leave behind ephemeral trails of glittering stardust, creating a trail of magic wherever they go.",
            "location": ["Serenity's Glade", "Verdant Spire", "Mossheart Grotto"],
            "img": "Images/creatures/magequill.jpg",
            "powers": [
                {
                    "name": "Mana Absorption: ",
                    "type": "passive",
                    "effect": "Whenever an enemy creature within 5 feet of Magequill casts a spell, it gains 1d4 temporary hitpoints"
                },
                {
                    "name": "Quill Swipe: ",
                    "type": "action",
                    "effect": "Melee Weapon Attack: +3 to hit, reach 5 ft., 1 target. Hit:  (2d6 + 2) Slashing damage. "
                },
                {
                    "name": "Thornstorm (Recharge 3): ",
                    "type": "action",
                    "effect": "Magequill releases a burst of thorns in a 15-foot cone. Creatures in the area must make a Dexterity saving throw, taking 2d6 piercing damage on a failed save, half on a successful one."
                },
                {
                    "name": "Arcane Needlespin (Recharge 2): ",
                    "type": "action",
                    "effect": "Gathering magical energy its quills rotate rapidly around its body. It then releases the quills in a spiraling pattern, creating a swirling vortex of enchanted needles. Enemy creatures who can see the Magequill's attack must make a DC 12 + PB Charisma Saving Throw or be distracted. On a failed save attacks made my that creature have disadvantage, and they have disadvantage on Constitution Saving throws to maintain spells until the start of Magequill's turn. "
                },
                {
                    "name": "Spiky Counter: ",
                    "type": "reaction",
                    "effect": "When hit my a melee attack the Magequill can retaliate with 1d4 piercing damage."
                }
            ]
        },
        {
            "name": "Puddling",
            "type": "companion",
            "description": "Charming ducks with feathers that shimmer like rippling water, graceful yet clumsy at the same time. As it quacks, magical droplets form in the air around it, manifesting water-themed abilities that allow it to manipulate aquatic forces and create mesmerizing displays of liquid magic in its wake.",
            "location": ["Serenity's Glade", "Riversong Sanctuary", "Mossheart Grotto", "The Isle of Whispers"],
            "img": "Images/creatures/puddling.jpg",
            "powers": [
                {
                    "name": "Healing Waters: ",
                    "type": "passive",
                    "effect": "When the Puddling or its companion is healed using a spell or ability, the amount of hit points restored is increased by 1d4."
                },
                {
                    "name": "Splash's Embrace: ",
                    "type": "action",
                    "effect": "Beating its wings and stomping its webbed feet the Puddling is able to conjure up 1d4 + 1 illusory versions of itself. Forming no more than 15ft away from them they look and act exactly like itself. Physical interaction with those versions reveal them to be illusions, otherwise a creature can use their action to try a DC 15 Investigation check to reveal the illusion as well."
                },
                {
                    "name": "Furios Peck: ",
                    "type": "action",
                    "effect": "Melee Weapon Attack: +3 to hit, reach 5 ft., 1 target. Hit: (1d6 + 2) Piercing damage. "
                },
                {
                    "name": "Tide's Fury: ",
                    "type": "action",
                    "effect": "Ranged Weapon Attack: +3 to hit, range 25 ft., 1 target. Hit: (1d6 + 2) Bludgeoning damage. If the target is wet or standing in water they must make a DC 12 Strength Saving throw or be pushed 5ft"
                },
                {
                    "name": "Liquid Deflection: ",
                    "type": "reaction",
                    "effect": " When targeted by a ranged attack, the Puddling can use its reaction to create a watery shield, gaining a +2 bonus to its AC until the start of its next turn."
                }
            ]
        },
        {
            "name": "Thornback Drake",
            "type": "companion",
            "description": "Small, lizard-like creatures covered in thorny protrusions. They possess the ability to curl into a protective ball, resembling a spiky seed pod. Thornback Drakes are known for their playful nature and are often kept as companions by the inhabitants of the world",
            "location": ["Serenity's Glade", "Mossheart Grotto", "Crescentwood Thicket"],
            "img": "Images/creatures/thornback.jpg",
            "powers": [
                {
                    "name": "Seedling Resonance: ",
                    "type": "passive",
                    "effect": "The Thornback Drake can sense the presence of nearby plant life, acting as a living compass for characters looking for flora or specific herbs."
                },
                {
                    "name": "False Appearance: ",
                    "type": "passive",
                    "effect": "While the Thornback Drake remains motionless it is invisible in its chosen environment, hanging from trees."
                },
                {
                    "name": "Tail Swipe: ",
                    "type": "action",
                    "effect": "Melee Weapon Attack: +3 to hit, reach 5 ft. Hit:  (1d8 + 2) piercing damage."
                },
                {
                    "name": "Thorn Barrage: ",
                    "type": "action",
                    "effect": "Ranged Weapon Attack: The drake shoots sharp thorns in a 20ft line. Each creature in the line must make a DC 15 Dexterity saving throw, taking 1d6 piercing damage on a failed save, half as much on a successful one."
                },
                {
                    "name": "Thorn Shield: ",
                    "type": "reaction",
                    "effect": "When hit by a melee attack, the Thornback Drake can use its reaction to erect a temporary thorn barrier, gaining a +2 bonus to AC until the start of its next turn."
                }
            ]
        },
        {
            "name": "Mossback Snapper",
            "type": "companion",
            "description": "A turtle with a shell covered in vibrant moss, the Mossback Snapper ambles through lush forests and tranquil ponds. Its presence brings harmony to the ecosystem, encouraging the growth of flora and the flourishing of fauna.",
            "location": ["Serenity's Glade", "Mossheart Grotto"],
            "img": "Images/creatures/mossbacksnapper.jpeg",
            "powers": [
                {
                    "name": "Nature's Embrace: ",
                    "type": "passive",
                    "effect": "The Snapper can cast Goodberry at will, producing a small supply of nourishing berries that can sustain a creature for a day."
                },
                {
                    "name": "Mossy Armor: ",
                    "type": "passive",
                    "effect": "The Mossback Snapper's moss-covered shell provides natural armor, increasing its AC by 2."
                },
                {
                    "name": "Photosynthesis: ",
                    "type": "passive",
                    "effect": "While in sunlight, the Mossback Snapper gains regeneration, healing 1d6 hit points at the start of each of its turns."
                },
                {
                    "name": "Shell Slame: ",
                    "type": "action",
                    "effect": "The Snapper retreats into its shell and charges forward, slamming into enemies with tremendous force. Melee Weapon Attack: +5 to hit, reach 5 ft. Hit: (2d6 + 3) Bludgeoning damage."
                },
                {
                    "name": "Mossy Aura (Recharge 2): ",
                    "type": "action",
                    "effect": "The Snapper releases a burst of spores, creating an aura of rejuvenating moss. Allies within a 20-foot radius gain temporary hit points equal to the Snapper's Constitution modifier."
                }
            ]
        },
        {
            "name": "Spectral Prowler",
            "type": "companion",
            "description": "A spectral wolf with ethereal fur that shimmers like moonlight filtering through leaves, the Spectral Treewalker prowls through moonlit forests and shadowy groves. Its haunting howl echoes through the night, sending shivers down the spines of those who hear it.",
            "location": ["Serenity's Glade", "Crescentwood Thicket"],
            "img": "Images/creatures/spectralprowler.jpeg",
            "powers": [
                {
                    "name": "Moonlit Stalker: ",
                    "type": "passive",
                    "effect": "The Treewalker gains advantage on Stealth checks while in moonlight or shadowy areas."
                },
                {
                    "name": "Ethereal Form ",
                    "type": "passive",
                    "effect": "The Spectral Treewalker can phase through solid objects and move through difficult terrain without hindrance."
                },
                {
                    "name": "Piercing Bite: ",
                    "type": "action",
                    "effect": "Melee Weapon Attack: +5 to hit, reach 5 ft. Hit: (1d8 + 3) Piercing damage. The Treewalker's bite bypasses resistance to nonmagical attacks and can harm incorporeal creatures."
                },
                {
                    "name": "Howl of the Hunt: ",
                    "type": "action",
                    "effect": "The Prowler unleashes a haunting howl, instilling fear in enemies within a 30-foot radius. Creatures must make a DC 13 Wisdom saving throw or be frightened for 1 minute."
                },
                {
                    "name": "Ethereal Shift: ",
                    "type": "reaction",
                    "effect": "When targeted by a spell or attack that would cause it to take damage, the Spectral Prowler can use its reaction to shift partially into the Ethereal Plane, becoming resistant to all damage from that source."
                }
            ]
        },
        {
            "name": "Blossomwing Bat",
            "type": "companion",
            "description": "A diminutive bat with wings adorned with shimmering petals, resembling blossoms in full bloom. Known for its gentle demeanor and affinity for floral nectar, the Blossomwing Bat is a symbol of beauty and grace in the enchanted forests.",
            "location": ["Serenity's Glade"],
            "img": "Images/creatures/blossomwingbat.jpeg",
            "powers": [
                {
                    "name": "Nectar Feast: ",
                    "type": "passive",
                    "effect": "The Blossomwing Bat gains temporary hit points equal to half its Charisma modifier whenever it consumes floral nectar."
                },
                {
                    "name": "Petal Glide: ",
                    "type": "action",
                    "effect": "The bat takes flight, leaving behind a trail of vibrant petals that confuses and disorients enemies within a 10-foot radius. Affected creatures must succeed on a DC 12 Wisdom saving throw or be charmed until the end of their next turn."
                },
                {
                    "name": "Echo Location: ",
                    "type": "passive",
                    "effect": "The bat emits a series of high-pitched echolocation pulses, allowing it to detect the presence and location of creatures within 60 feet, even through barriers."
                },
                {
                    "name": "Sugar Rush: ",
                    "type": "action",
                    "effect": "The blossomwing provides 1 of it's enchanted honeyfruits to its companion, giving that creature the benefits of the haste spell for 1 minute. The blossomwing can take this action only if it has some of the fruit on it, gaining 1 charge for each short rest spent foraging with its companion up to a maximum of 4."
                },
                {
                    "name": "Floral Harmony: ",
                    "type": "reaction",
                    "effect": "When an ally within 30 feet of the Blossomwing Bat is targeted by an attack, the bat can use its reaction to release a soothing aura of floral magic, granting the ally resistance to all damage from that attack."
                }
            ]
        },
        {
            "name": "Soaring Acornwing",
            "type": "companion",
            "description": "A graceful flying squirrel with wings resembling autumn leaves, adorned with patterns reminiscent of acorns. Agile and elusive, the Soaring Acornwing glides effortlessly through the forest canopy, spreading the essence of autumn wherever it goes.",
            "location": ["Serenity's Glade", "Mossheart Grotto"],
            "img": "Images/creatures/acornwing.jpeg",
            "powers": [
                {
                    "name": "Leaf Glide",
                    "type": "passive",
                    "effect": "The Soaring Acornwing cannot fly but has the ability to glide long distances. The Acornwing can travel 15 feet in any direction for every 5 feet it falls and is completely immune to fall damage."
                },
                {
                    "name": "Acorn Barrage",
                    "type": "action",
                    "effect": "The squirrel launches a barrage of magical acorns at a target within 30 feet, dealing 1d6 bludgeoning damage on a hit. The target must succeed on a DC 12 Dexterity saving throw or be knocked prone."
                },
                {
                    "name": "Autumn Harvest",
                    "type": "action",
                    "effect": "The Soaring Acornwing scatters enchanted acorns in a 15-foot radius, creating an area of difficult terrain that is lightly obscured. Creatures that start their turn in the area take 1d4 magical bludgeoning damage and have their movespeed decreased by 50%."
                },
                {
                    "name": "Furious Bite",
                    "type": "action",
                    "effect": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1d6 + 2 piercing damage. If the acornwing was thrown this turn the target must make a DC14 STR saving throw or be knocked prone."
                },
                {
                    "name": "Aerial Assault",
                    "type": "reaction",
                    "effect": "When thrown by its companion, the Soaring Acornwing can use its reaction to enhance the momentum of the throw, dealing an additional 1d6 bludgeoning damage on impact. Additionally, the Acornwing can make a bite attack against a creature within 5 feet upon landing, using its reaction."
                }
            ]
        },
        {
            "name": "Grovewarden Baboon",
            "type": "companion",
            "description": "A baboon enveloped in a shimmering aura of nature's essence, with eyes that radiate ancient wisdom. Revered as the protector of the sacred woods, the Grovewarden Baboon is accompanied by ethereal nature spirits, which it channels to safeguard the forest's sanctity.",
            "location": ["Serenity's Glade", "Crescentwood Thicket"],
            "img": "Images/creatures/grovewarden.jpeg",
            "powers": [
                {
                    "name": "Sylvan Aura",
                    "type": "passive",
                    "effect": "The Forest Guardian Baboon emits an aura of natural energy, granting allies within 10 feet resistance to poison damage and advantage on saving throws against poison."
                },
                {
                    "name": "Nature's Whispers",
                    "type": "action",
                    "effect": "The baboon channels the wisdom of the forest, allowing it to communicate telepathically with creatures within 60 feet, sharing insights and warnings."
                },
                {
                    "name": "Spiritual Swarm",
                    "type": "action",
                    "effect": "The baboon summons a swarm of nature spirits to protect its allies. A spectral swarm manifests in a 15-foot radius centered on a point within 30 feet, providing half cover to allies within the area."
                },
                {
                    "name": "Blessing of the Grove",
                    "type": "action",
                    "effect": "The baboon invokes the ancient spirits of the forest, bestowing upon allies within 30 feet temporary hit points equal to its Wisdom modifier plus its proficiency bonus."
                },
                {
                    "name": "Nature's Shield",
                    "type": "reaction",
                    "effect": "When an ally within 30 feet is targeted by an attack, the Forest Guardian Baboon can use its reaction to summon a protective barrier of swirling leaves and vines, imposing disadvantage on the attack roll."
                }
            ]
        },
        {
            "name": "Marshcaller",
            "type": "companion",
            "description": "The Marshcaller is a frog-like creature with iridescent skin that shimmers with hues of blue and green. It dwells in mist-shrouded marshlands, its croak echoing through the murky waters. Known for its affinity with water and its ability to manipulate mist, the Marshcaller is both revered by those who traverse its domain.",
            "location": ["Serenity's Glade", "Mossheart Grotto", "Riversong Sanctuary"],
            "img": "Images/creatures/marshcaller.jpeg",
            "powers": [
                {
                    "name": "Mistweaver's Blessing (Recharge 5)",
                    "type": "reaction",
                    "effect": "When an allied creature within 5 feet of the Marshcaller makes a ranged attack the Marshcaller can call on the blessing of the mist, enhancing the damage by 2d6 on a hit."
                },
                {
                    "name": "Aqueous Assault",
                    "type": "action",
                    "effect": "The frog can expel a jet of water from its mouth, with a range of 30 feet. It makes a ranged spell attack against a target, dealing 2d6 bludgeoning damage on a hit and potentially knocking the target prone if it fails a Strength saving throw (DC 12)."
                },
                {
                    "name": "Camouflage",
                    "type": "passive",
                    "effect": "The Mistwater Marshcaller can blend seamlessly with its surroundings, becoming invisible to creatures that rely on sight to perceive it."
                },
                {
                    "name": "Amphibious Agility",
                    "type": "passive",
                    "effect": "The creature is incredibly agile both on land and in water, with a jump distance of 20 feet and a swimming speed of 40 feet."
                },
                {
                    "name": "Mystical Croak",
                    "type": "action",
                    "effect": "The Marshcaller's croak possesses magical properties, capable of disorienting foes using nearby bodies of water. Creatures within a 30-foot radius of the Marshcaller must succeed on a Wisdom saving throw (DC 12) or become charmed or frightened (Marshcaller's choice) for 1 minute."
                }
            ]
        },
        {
            "name": "Mossling Hare",
            "type": "companion",
            "description": "The Mossling Hare is a breed of bunny that roams the lush forest floors and mossy gnolls, its fur adorned with patches of vibrant moss. These hares are known for their agility and their symbiotic relationship with the forest, often serving as messengers for the woodland creatures.",
            "location": ["Mossheart Grotto"],
            "img": "Images/creatures/mossling-hares.jpg",
            "powers": [
                {
                    "name": "Mossy Camouflage",
                    "type": "passive",
                    "effect": "The Mossling Hare can blend seamlessly with its surroundings, gaining advantage on Dexterity (Stealth) checks made to hide in natural terrain."
                },
                {
                    "name": "Mossheart Blessing (Recharge 3)",
                    "type": "reaction",
                    "effect": "When an allied creature within 15 feet of the Mossling Hare fails on an attack roll, saving throw, or ability check the Hare can allow to reroll that die, using the new result no matter what."
                },
                {
                    "name": "Nature's Bound",
                    "type": "action",
                    "effect": "The hare calls upon the power of the forest to entangle its foes. It casts the Entangle spell centered on itself, affecting creatures in a 20-foot radius."
                },
                {
                    "name": "Lucky Footing",
                    "type": "passive",
                    "effect": "The Mossling Hare's innate luck allows it to move effortlessly across difficult terrain, ignoring movement restrictions caused by natural hazards such as thorns, brambles, and slippery surfaces."
                },
                {
                    "name": "Fortunate Strike",
                    "type": "action",
                    "effect": "The Mossling Hare can deliver a swift and precise melee attack, using its luck to strike a vital point. It makes a melee weapon attack with advantage, dealing 1d6 piercing damage on a hit."
                }
            ]
        },
        {
            "name": "Shadowfox",
            "type": "companion",
            "description": "A mysterious and stealthy creature that merges the cunning nature of a fox with the darkness of shadows. It has the sleek body and intelligence of a fox, but its fur is pure darkness, allowing it to blend seamlessly into the shadows. Shadowfoxes are known for their desire to play hide and seek with humans and other creatures alike.",
            "location": ["Serenity's Glade", "Crescentwood Thicket"],
            "img": "Images/creatures/shadowfox.jpg",
            "powers": [
                {
                    "name": "Shadow Blend",
                    "type": "passive",
                    "effect": "The Shadowfox can blend into shadows, gaining advantage on Dexterity (Stealth) checks made to hide in dim light or darkness."
                },
                {
                    "name": "Eclipse Pounce",
                    "type": "action",
                    "effect": "The Shadowfox can leap from the shadows with deadly precision. It makes a melee weapon attack with advantage against a surprised target, dealing 1d8+4 piercing damage on a hit."
                },
                {
                    "name": "Shadow Step",
                    "type": "action",
                    "effect": "The Shadowfox can teleport between shadows as a bonus action, moving up to 30 feet to an unoccupied space that it can see within dim light or darkness. The Shadowfox can choose to bring its companion in this shadow step a number of times per day equal to the companion's proficiency bonus, regaining these charges at midnight."
                },
                {
                    "name": "Whispering Shadows",
                    "type": "passive",
                    "effect": "The Shadowfox can communicate telepathically with creatures within 30 feet of it, speaking directly into their minds with whispers of shadowy secrets."
                },
                {
                    "name": "Night's Embrace",
                    "type": "reaction",
                    "effect": "When targeted by an attack, the Shadowfox can meld into the shadows, imposing disadvantage on the attack roll."
                }
            ]
        },
        {
            "name": "Whispertail Deer",
            "type": "companion",
            "description": "Elegant, ethereal deer with translucent, glowing antlers. They possess the ability to move soundlessly through the forest, their footsteps leaving no trace other than a soft afterglow of their forms bounding through the forest. Whispertail Deer are considered guardians of the woods, embodying grace, mysticism, and the secrets of the wilderness.",
            "type": ["Serenity's Glade", "Mossheart Grotto"],
            "img": "Images/creatures/whispertail-deer.jpg",
            "powers": [
                {
                    "name": "Silent Stride",
                    "type": "passive",
                    "effect": "The Whispertail Deer moves with supernatural grace, leaving no trace of its passage. It can move through difficult terrain without penalty and makes no noise while doing so. All creatures attempting to track the Whispertail Deer and its companion roll at disadvantage."
                },
                {
                    "name": "Ethereal Antlers",
                    "type": "passive",
                    "effect": "The glowing antlers of the Whispertail Deer emit a soft, ethereal light, illuminating the surrounding area with a gentle glow. Creatures within 10 feet of the deer gain advantage on Wisdom (Perception) checks made to see in dim light or darkness."
                },
                {
                    "name": "Whispering Aura",
                    "type": "passive",
                    "effect": "The Whispertail Deer exudes an aura of tranquility, calming those around it. Creatures within 30 feet of the deer have advantage on saving throws against being frightened or charmed."
                },
                {
                    "name": "Mystic Leap (Recharge 4): ",
                    "type": "action",
                    "effect": "The Whispertail Deer can perform a graceful leap, disappearing into the ether and reappearing in a different location within 30 feet. This ability functions similarly to the Misty Step spell. Upon emerging the Whispertail can make one Forest's Charge attack to a creature it can see within 5ft of it."
                },
                {
                    "name": "Forest's Charge",
                    "type": "action",
                    "effect": "The Whispertail deer can charge a creature with it's horns, dealing 2d6+2 piercing damage on a hit."
                }
            ]
        }
    ];

// Function to create a creature div
function createCreatureDiv(creature) {
    const div = document.createElement('div');
    div.classList.add('statblock');

    // Create image element
    const img = document.createElement('img');
    img.src = creature.img; // Assuming you have image URLs in the JSON
    img.alt = creature.name;
    img.classList.add("critter");
    div.appendChild(img);

    // Create name element
    const name = document.createElement('h2');
    name.textContent = creature.name;
    div.appendChild(name);

    // Create description element
    const description = document.createElement('p');
    description.textContent = creature.description;
    div.appendChild(description);

    // Organize powers into subsections
    const powersByType = {
        "passive": [],
        "action": [],
        "reaction": []
    };

    creature.powers.forEach(power => {
        powersByType[power.type].push(power);
    });

    // Create powers list
    const powersList = document.createElement('ul');

    // Add passive powers
    if (powersByType["passive"].length > 0) {
        const passiveHeader = document.createElement('h3');
        passiveHeader.textContent = "Passive:";
        powersList.appendChild(passiveHeader);

        powersByType["passive"].forEach(power => {
            const powerItem = document.createElement('li');
            powerItem.textContent = `${power.name} - ${power.effect}`;
            powersList.appendChild(powerItem);
        });
    }

    // Add action powers
    if (powersByType["action"].length > 0) {
        const actionHeader = document.createElement('h3');
        actionHeader.textContent = "Actions:";
        powersList.appendChild(actionHeader);

        powersByType["action"].forEach(power => {
            const powerItem = document.createElement('li');
            powerItem.textContent = `${power.name} - ${power.effect}`;
            powersList.appendChild(powerItem);
        });
    }

    // Add reaction powers
    if (powersByType["reaction"].length > 0) {
        const reactionHeader = document.createElement('h3');
        reactionHeader.textContent = "Reactions:";
        powersList.appendChild(reactionHeader);

        powersByType["reaction"].forEach(power => {
            const powerItem = document.createElement('li');
            powerItem.textContent = `${power.name} - ${power.effect}`;
            powersList.appendChild(powerItem);
        });
    }

    div.appendChild(powersList);

    return div;
}

// Function to populate creature container
function populateCreatureContainer() {
    const creatureContainer = document.getElementById('creatureContainer');
    creaturesData.forEach(creature => {
        const creatureDiv = createCreatureDiv(creature);
        creatureContainer.appendChild(creatureDiv);
    });
}

// Call function to populate creature container
populateCreatureContainer();
