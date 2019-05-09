let suits = ['hearts', 'diamonds', 'spades', 'clubs']
let faces = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']
let deck = []

const createCards = () => {
  // pick a suit
  for (let x = 0; x < suits.length; x++) {
    // pick a face
    for (let y = 0; y < faces.length; y++) {
      // a card = suit + face
      const card = faces[y] + ' of ' + suits[x]
      console.log(card)
      // pick card
      deck.push(card)
    }
  }
  // card will be randomized
}

const shuffleCards = () => {
  // this is where the fisher-yates algorithm goes
  for (let i = shuffleCards.length - 1; i > 0; i--) {
    const randomIndex = Math.ceil(Math.random)
    console.log(shuffleCards)
  }
}

const main = () => {
  createCards()
  shuffleCards()
}

document.addEventListener('DOMContentLoaded', main)
