let cardCount = 0;

const cards = [
    {
        "value": 1,
        "src": `eachCard${0}.jpg`,
        "used": false
    },
    {
        "value": 1,
        "src": "eachCard.jpg"
    }
]

for(let i = 0; i < 52; i++){
    let card = {
        "value": 1,
        "src": `eachCard${i}.jpg`
    }

    cards.add(card);
}

const deck = document.querySelector('.deck');


deck.addEventListener('click', () => {
    //run keyframes on animated card
    //grab random card from cards array that has used = false
    //set used to true
    //pass that to a center function
    //delete the card you just got from cards
    //cards.remove(card)
})

function currentCard(card){
    //img.src = card.src
    //volume += value 
}


//99% : in the center
//100%: display: 0, reset position