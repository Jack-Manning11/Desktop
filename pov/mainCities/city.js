const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const backButton = document.querySelector('.back');
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.toolbar');

const data = {
    "fernglassOptics": {
      "name": "Fernglass Optics",
      "description": "In Serenity's Glade, Fernglass Artisans create magical Fernglasses from polished fern leaves, granting crystal-clear, long-distance vision. Their workshop, adorned with hanging fern leaves and the soft hum of enchantment, offers patrons a glimpse of the enchanting world through meticulously crafted optics.",
      "list": {
        "listName": "Wares",
        "listDescription": "Fernglass optics specializes in all kinds of enhanced eyewear and accessories, allowing enhancement of eyesight in all ways imaginable. All products are crafted by the artisans here in Serenity's Glade out of the unique material Fernglass, utilizing polished fronds of different tints to create magical properties.",
        "listObjects": [
            {
                "name": "Serenity's Gaze",
                "description": "This Fernglass Telescope is imbued with the essence of Serenity's Glade, allowing the user to see incredibly far distances with stunning clarity. Additionally, it grants advantage on Perception checks related to observing natural phenomena or creatures within forests or wooded areas. The telescopes come in 3 different qualities, basic, refined, and exquisite, each one seeing farther than the last. Optional Features: Telescoping: For an additional cost you can make the distances included in the Serenity's Gaze telescope variable.",
                "price": "5 - 25gp",
                "img": ""
            },
            {
                "name": "Lenses of Arcane Insight",
                "description": "Tinted with a subtle shimmering hue, these Fernglass Lenses grant the ability to cast the Identify spell proficiency bonus times per day without requiring material components.",
                "price": "150gp",
                "img": ""
            },
            {
                "name": "Lenses of Mystic Perception",
                "description": "Lenses of Mystic Perception, tinted fernglass lenses adorned with delicate silver filigree, granting the user the ability to cast Detect Magic at will, as ethereal wisps of arcane energy dance across their surface.",
                "price": "100gp",
                "img": ""
            },
            {
                "name": "Veilbreaker Spectacles",
                "description": "The Veilbreaker Spectacles are a pair of sleek, silver-framed glasses with lenses crafted from enchanted crystal. As the wearer dons them, the lenses shimmer with a faint iridescence, revealing intricate patterns reminiscent of shifting shadows and arcane sigils. With a subtle touch of magic, these spectacles grant the ability to pierce through illusions, unveiling the truth hidden beneath the deceptive veil of magic.",
                "price": "50gp",
                "img": ""
            },
            {
                "name": "Shadowleaf Goggles",
                "description": "The Shadowleaf Goggles are crafted from finely polished fernglass, with frames adorned with delicate etchings of twisting vines. As the wearer puts them on, the lenses take on a deep, mossy hue, emanating a faint, pulsing glow. When activated, these goggles grant the wearer the gift of darkvision, as if the shadows themselves part to reveal the hidden secrets of the night.",
                "price": "40gp",
                "img": ""
            }
        ]
      }
    },
    "blinkrootvineyards": {
        "name": "Blinkroot Vineyards",
        "description": "Nestled in Serenity's Glade, Blinkroot Vineyards boasts rows of grapevines intertwined with enchanted blinkroot flowers, exuding an otherworldly glow. Skilled vintners harvest these magical grapes to craft exquisite wines capturing the essence of the enchanted jungle, inviting visitors to indulge in the sensory journey of Serenity's Glade with every sip.",
        "list": {
            "listName": "Wines",
            "listDescription": "Indulge in the enchanting wine list of Blinkroot Vineyards, featuring a selection of meticulously crafted wines capturing the essence of Serenity's Glade with each sip.",
            "listObjects": [
                {
                    "name": "Moonlit Nectar",
                    "description": "A pale silver wine with a delicate, ethereal flavor that evokes the soft glow of moonlight.",
                    "price": "5sp",
                    "img": "../Images/items/moonlitnectar.jpeg"
                },
                {
                    "name": "Sunburst Elixir",
                    "description": "A radiant golden wine with a vibrant, sunny flavor bursting with notes of citrus and warmth.",
                    "price": "5sp",
                    "img": "../Images/items/sunburstelixir.jpeg"
                },
                {
                    "name": "Mossheart Reserve",
                    "description": "A rich, earthy wine with deep green hues and a robust flavor that captures the essence of the forest floor.",
                    "price": "3gp",
                    "img": "../Images/items/mossheartreserve.jpeg"
                },
                {
                    "name": "Whispering Breeze Blanc",
                    "description": "A light and airy white wine with a delicate floral aroma, like a gentle breeze rustling through the leaves.",
                    "price": "2gp",
                    "img": "../Images/items/whisperingbreezeblanc.jpeg"
                },
                {
                    "name": "Twilight Tonic",
                    "description": "A deep purple wine with a velvety texture and flavors that evoke the mysterious beauty of twilight.",
                    "price": "2gp",
                    "img": "../Images/items/twlighttonic.jpeg"
                },
                {
                    "name": "Wildfire Warden",
                    "description": "A bold red wine with a fiery flavor and a hint of smoke, reminiscent of a crackling bonfire in the wilderness.",
                    "price": "1gp",
                    "img": "../Images/items/wildfirewarden.jpeg"
                },
                {
                    "name": "Sylvan Serenade",
                    "description": "A crisp and refreshing wine with a subtle floral aroma, like walking through a sun-dappled meadow in springtime.",
                    "price": "5sp",
                    "img": "../Images/items/sylvanserenade.jpeg"
                },
                {
                    "name": "Essence of Aurora",
                    "description": "A mesmerizing wine that shifts in color, resembling the dancing lights of the aurora borealis, with a complex flavor profile that changes with each sip.",
                    "price": "1gp",
                    "img": "../Images/items/essenceofaurora.jpeg"
                }
            ]
      }
    },
    "flutterbyapothecaryIngredients": {
        "name": "Flutterby Apothecary",
        "description": "Flutterby Apothecary, nestled in Serenity's Glade, is a mystical haven adorned with delicate butterfly motifs and shelves of glass vials, emitting an ethereal glow. Expert herbalists, dressed in attire reminiscent of butterfly wings, craft potions from rare herbs and magical blossoms, enveloping visitors in a soothing ambiance alive with the gentle fluttering of colorful butterflies. It's a sanctuary where nature's magic and the art of herbalism intertwine, inviting patrons to embark on a journey of rejuvenation and discovery.",
        "list": {
            "listName": "Ingredient Pantry",
            "listDescription": "Flutterby Apothecary's ingredients are sourced from Serenity's Glade and the surrounding blossoming forest. Most of these ingredients are unique to the area, holding some of Sylvana's charm in their very existence",
            "listObjects": [
                {
                    "name": "Morning Dew",
                    "description": "Collected at dawn, this shimmering dew carries the essence of the new day, imbuing potions with refreshing and rejuvenating properties.",
                    "price": "5sp",
                    "img": "../Images/items/morningdew.jpeg"
                },
                {
                    "name": "Solstice Charcoal",
                    "description": "Roots and branches burned during one of the solstices, their gnarled and black texture imbued with the power of a burning sun",
                    "price": "1gp",
                    "img": "../Images/items/solsticecharcoal.jpeg"
                },
                {
                    "name": "Glowcap Mushrooms",
                    "description": "Bioluminescent fungi that emit a soft, ethereal glow, prized for their ability to enhance magical properties and provide illumination in dark environments.",
                    "price": "8sp",
                    "img": "../Images/items/glowcapmushrooms.jpeg"
                },
                {
                    "name": "Wispwood Fungus",
                    "description": "A rare fungus that floats gently in the air like wisps of smoke, its spores carrying a whisper of ancient wisdom and enhancing potions with clarity of thought and insight.",
                    "price": "2sp",
                    "img": "../Images/items/wispwoodfungus.jpeg"
                },
                {
                    "name": "Eldergrove Blossoms",
                    "description": "Blossoming in eldergroves under the light of the full moon, these delicate flowers carry the essence of ancient wisdom and are often used in potions for enlightenment and spiritual growth.",
                    "price": "2gp",
                    "img": "../Images/items/eldergroveblossoms.jpeg"
                },
                {
                    "name": "Faeferns",
                    "description": "Found in the faerie realms, Faefern leaves possess a mystical quality that enhances magical abilities and fosters a connection with the elemental spirits.",
                    "price": "5sp",
                    "img": "../Images/items/faefern.jpeg"
                },
                {
                    "name": "Sylvan Ginger",
                    "description": "Harvested from the heart of enchanted forests, Sylvan Ginger carries a warm and spicy aroma, known for its ability to invigorate the senses and provide energy and vitality.",
                    "price": "5sp",
                    "img": "../Images/items/sylvanginger.jpeg"
                },
                {
                    "name": "Aurora's Hush",
                    "description": "A rare herb that blooms only under the aurora borealis, its petals shimmering with iridescent colors and carrying a calming and tranquil essence.",
                    "price": "5sp",
                    "img": "../Images/items/aurorashush.jpeg"
                },
                {
                    "name": "Valesong Vanilla",
                    "description": "Cultivated in hidden valleys where the wind carries melodies of ancient songs, Valesong Vanilla lends a sweet and soothing flavor to potions, bringing joy and harmony to the spirit..",
                    "price": "7sp",
                    "img": "../Images/items/valesongvanilla.jpeg"
                },
                {
                    "name": "Lumina Petals",
                    "description": "Radiant petals that shimmer with inner light, Lumina Petals are infused with the essence of starlight, perfect for potions that grant clarity of vision and insight.",
                    "price": "5sp",
                    "img": "../Images/items/luminapetals.jpeg"
                },
                {
                    "name": "Mistwood Sage",
                    "description": "Aromatic leaves harvested from the branches of mistwood trees, Mistwood Sage carries the essence of the forest's mysteries, enhancing potions with divination and insight.",
                    "price": "2sp",
                    "img": "../Images/items/mistwoodsage.jpeg"
                },
                {
                    "name": "Everflow Petals",
                    "description": "Roses that bloom perpetually, their petals carrying the essence of eternal renewal and growth, often used in potions for healing and regeneration.",
                    "price": "2gp",
                    "img": "../Images/items/everflowroses.jpeg"
                }
            ]
      }
    },
    "flutterbyapothecaryPotions": {
        "name": "Flutterby Apothecary",
        "description": "Flutterby Apothecary, nestled in Serenity's Glade, is a mystical haven adorned with delicate butterfly motifs and shelves of glass vials, emitting an ethereal glow. Expert herbalists, dressed in attire reminiscent of butterfly wings, craft potions from rare herbs and magical blossoms, enveloping visitors in a soothing ambiance alive with the gentle fluttering of colorful butterflies. It's a sanctuary where nature's magic and the art of herbalism intertwine, inviting patrons to embark on a journey of rejuvenation and discovery.",
        "list": {
            "listName": "Ingredient Pantry",
            "listDescription": "Flutterby Apothecary's potions channel the power of the enchanted forest and distill it's energy into powerful elixirs. On top of the more common potions of healing and proficiency there is a whole host of custom potions made by Aldirc himself.",
            "listObjects": [
                {
                    "name": "Verdant Vigor",
                    "description": "This potion infuses the drinker with the resilience of ancient trees, granting temporary resistance to physical damage.",
                    "price": "15gp",
                    "img": "../Images/items/verdantvigor.jpeg"
                },
                {
                    "name": "Wolven Brew",
                    "description": "Distilled essence of a pack of wild wolves, this potion grants the drinker the benefits of Pack Tactics for 1 minute.",
                    "price": "12gp",
                    "img": "../Images/items/wolvenbrew.jpeg"
                },
                {
                    "name": "Bottled Breath",
                    "description": "This bottle contains a breath of elemental air in everswirling gusts. When you inhale it, you either exhale it or hold it. If you exhale the breath, you gain the effect of the Gust of Wind spell. If you hold the breath, you don’t need to breathe for 1 hour, though you can end this benefit early (for example, to speak). Ending it early doesn’t give you the benefit of exhaling the breath.",
                    "price": "10gp",
                    "img": "../Images/items/bottlebreath.jpeg"
                },
                {
                    "name": "Heroes Tonic",
                    "description": "This orange potion bubbles and steams as if boiling, iridescent swirls of red filling the vial. For 1 hour after drinking it, you gain 10 temporary hit points that last for 1 hour. For the same duration, you are under the effect of the bless spell (no concentration).",
                    "price": "8gp",
                    "img": "../Images/items/heroestonic.jpeg"
                },
                {
                    "name": "Night's Embrace",
                    "description": "Black as the void, this liquid appears to flash in bright colours when looked at through the corner of one’s eye. When you drink this potion before falling asleep, your dreams show you true visions of of the past, present or possible future events related to a creature, location or object of your choosing. The DM determines the nature and duration of these visions.",
                    "price": "5gp",
                    "img": "../Images/items/nightsembrace.jpeg"
                },
                {
                    "name": "Ink of the Third Eye",
                    "description": "1 ounce bottle of ink that can only be made visible with spells, traits or items that see the invisible, or by applying a mild acid.",
                    "price": "2gp",
                    "img": "../Images/items/inkofthethirdeye.jpeg"
                },
                {
                    "name": "Midnight Oil",
                    "description": "When the midnight oil is used to light a lantern, it emits bright light for 5 feet and dim light a further 5 feet for 8 hours. If a creature stays in the light emitted by this oil for the full 8 hours, they get all the benefits of a long rest without needing to sleep, provided they only engage in light activity such as reading, studying, talking, etc.",
                    "price": "4gp",
                    "img": "../Images/items/midnightoil.jpeg"
                },
                {
                    "name": "Lifeforce Liquor",
                    "description": "Drinking this liqueur temporarily grants the drinker enhanced vitality and stamina, allowing them to push past their physical limits without succumbing to exhaustion. Eliminates one level of exhaustion when drunk.",
                    "price": "5gp",
                    "img": "../Images/items/lifeforceliquor.jpeg"
                },
                {
                    "name": "Mistwood Mirage",
                    "description": "Spraying this mist creates illusory duplicates of the drinker, confusing and disorienting enemies and providing cover in combat. This potion casts the mirror image spell on the drinker, giving them the benefits for 1 minute.",
                    "price": "15gp",
                    "img": "../Images/items/mistwoodmirage.jpeg"
                },
                {
                    "name": "Feyflame Brew",
                    "description": "This brew imbues the drinker's attacks with flickering feyfire, causing them to deal additional 1d6 radiant damage on weapon attacks for a 1 minute.",
                    "price": "12gp",
                    "img": "../Images/items/feyflamebrew.jpeg"
                },
                {
                    "name": "Sylvan Echo",
                    "description": "Brewed from the echoes of the forest, this essence grants the drinker the ability to replicate any sound they have heard within the last 24 hours.",
                    "price": "10gp",
                    "img": "../Images/items/sylvanecho.jpeg"
                },
                {
                    "name": "Dryad's Kiss",
                    "description": "This potion of deep green allows the drinker to understand the language Druidic for 1d4 hours, though they cannot leave message in the language themselves",
                    "price": "5gp",
                    "img": "../Images/items/dryadskiss.jpeg"
                }
            ]
      }
    }
  };

document.querySelectorAll('.zoomable').forEach(function(image) {
    image.addEventListener('click', function() {
      if (this.classList.contains('zoomed')) {
        this.classList.remove('zoomed');
        overlay.style.display = "none";
      } else {
        this.classList.add('zoomed');
        overlay.style.display = "block";
      }
    });
  });

hamburger.addEventListener('click', () => {
if (sidebar.style.right === '-25vw') {
    sidebar.style.right = '0';
} else {
    sidebar.style.right = '-25vw';
}
});

document.querySelectorAll('.moreInfo').forEach(function(element) {
    element.addEventListener('click', function() {
        const key = this.getAttribute('place');
        const place = data[key];
        const content = createMenu(place);
        document.querySelector('.popup .content').innerHTML = content;
        document.querySelector('.popup').style.display = 'block';
    });
});

backButton.addEventListener('click', () => {
    document.querySelector('.popup').style.display = 'none';
});

function createMenu(data) {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    const title = document.createElement('h4');
    title.classList.add('title');
    title.textContent = data.name;
    console.log(data.name);
    title.style.textAlign = 'center';
    title.style.fontSize = '24px';
    contentDiv.appendChild(title);

    const description = document.createElement('p');
    description.textContent = data.description;
    contentDiv.appendChild(description);

    const objectsDiv = document.createElement('div');
    objectsDiv.classList.add('objects');

    data.list.listObjects.forEach(item => {
        const objectDiv = document.createElement('div');
        objectDiv.classList.add('object');

        if (item.img) {
            const img = document.createElement('img');
            img.src = item.img;
            objectDiv.appendChild(img);
        }

        const itemName = document.createElement('p');
        itemName.textContent = item.name;
        objectDiv.appendChild(itemName);

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        objectDiv.appendChild(itemDescription);

        const price = document.createElement('p');
        price.textContent = `Price: ${item.price}`;
        objectDiv.appendChild(price);

        objectsDiv.appendChild(objectDiv);
    });

    contentDiv.appendChild(objectsDiv);

    return contentDiv.innerHTML;
}