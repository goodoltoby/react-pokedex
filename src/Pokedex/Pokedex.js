import React, { Component } from "react";
import Pokecard from "../Pokecard/Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  static defaultProps = {
    pokeArray: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
      { id: 196, name: "Espeon", type: "psychic", base_experience: 100 },
      { id: 186, name: "Politoed", type: "water", base_experience: 166 }

    ]
  };

  render() {
    const pokemon = this.props.hand;
    const win = pokemon.winner;

    return (
      <div className="Pokedex">
        <h1 className={win.toString()}>
          {win ? "Vinnande handen" : "Förlorande handen"}
        </h1>
        <h5>Total XP i handen: {pokemon.points}</h5>
        {pokemon.cards.map((val, i) => {
          return (
            <Pokecard
              key={i}
              idNumber={val.id}
              namePokemon={val.name}
              typePokemon={val.type}
              xp={val.base_experience}
            />
          );
        })}
      </div>
    );
  }
}

export default Pokedex;
