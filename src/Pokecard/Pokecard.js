import React, { Component } from "react";
import "./Pokecard.css";

const fixStringAndGetImg = id => {
  let newId;
  if (id < 10) {
    newId = "00" + id;
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${newId}.png`;
  } else if (id < 100) {
    newId = "0" + id;
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${newId}.png`;
  } else if (id > 100) {
    newId = id;
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${newId}.png`;
  }
};



class Pokecard extends Component {

    //gör inget, bara testade onClick
    klickad = () => {
        console.log(this.props)
        
    }

  render() {
    const pokemon = this.props;
    return (
      <div className="Pokecard" onClick={this.klickad}>
        <div className="Pokecard-inner">
          <img
            className="Pokecard-img"
            src={fixStringAndGetImg(pokemon.idNumber)}
            alt=""
          />
          <h4 className="Pokecard-name">{pokemon.namePokemon}</h4>
          <p className={pokemon.typePokemon}>Type: {pokemon.typePokemon}</p>
          <p>XP: {pokemon.xp}</p>
        </div>
      </div>
    );
  }
}

export default Pokecard;
