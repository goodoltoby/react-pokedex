import React, { Component } from "react";
import Pokedex from "../Pokedex/Pokedex";

let pokeArray = Pokedex.defaultProps.pokeArray;
let handSize = pokeArray.length / 2;

const createHand = pokeArray => {
  let count = 0;
  const newHand = [];
  let pointsSum = 0;

  while (count < handSize) {
    let randomIndex = Math.floor(Math.random() * pokeArray.length);
    newHand.push(pokeArray[randomIndex]);
    pokeArray.splice(randomIndex, 1);
    count++;
  }

  newHand.forEach(card => (pointsSum += card.base_experience));

  let hand = {
    cards: newHand,
    points: pointsSum
  };

  return hand;
};

const decideWinner = (hand1, hand2) => {
  if (hand1.points > hand2.points) {
    hand1.winner = true;
    hand2.winner = false;
  } else if (hand2.points > hand1.points) {
    hand2.winner = true;
    hand1.winner = false;
  } else {
    hand2.winner = false;
    hand1.winner = false;
  }
};

class Pokegame extends Component {
  render() {
    const hand1 = createHand(pokeArray);
    const hand2 = createHand(pokeArray);
    decideWinner(hand1, hand2);
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Pokedex hand={hand1} />
        <Pokedex hand={hand2} />
      </div>
    );
  }
}

export default Pokegame;
