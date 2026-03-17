const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const ranks = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "King", "Queen"];
let cards = [];
let Players = [];
class card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}

class Player {
    constructor(cards) {
        this.cards = cards;
    }
}

const create_Set = () => {
    for (const suit of suits) {
        for (const rank of ranks) {
            cards.push(new card(suit, rank));
        }
    }
};

create_Set();

const deal_Cards = (players) => {
    const deal = (players == 2) ? 7 : 5;
    for (let i = 0; i < players; i++) {
        let tempCards = []
        for (let j = 0; j < deal; j++) {
            let ran = Math.floor(Math.random() * cards.length)
            let temp = cards.splice(ran, 1)[0];
            tempCards.push(temp);
        }
        Players.push(new Player(tempCards))
    }
}

deal_Cards(2);
for (play of Players) {
    console.log(play.cards)
}