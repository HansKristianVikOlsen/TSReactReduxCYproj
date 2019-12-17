import React, { useEffect, useState } from "react";
import * as counterActions from "../redux/actions/counterAction";
import * as pokemonActions from "../redux/actions/pokemonAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export const HomePage = ({
  counter,
  actions,
  counterActionUp,
  counterActionDown,
  getPokemon,
  pokemon
}) => {
  const [pokemonName, setpokemonName] = useState("");

  /*
  useEffect(() => {
    getPokemon("pikachu");
  }, pokemon);
*/
  function handleChange(event) {
    setpokemonName(event.target.value);
  }

  function retreviewPokemon(event) {
    event.preventDefault();
    getPokemon(pokemonName);
  }

  return (
    <div>
      <h1 id="title">Homepage</h1>
      This is done with Redux <br />
      <button onClick={counterActionUp}>We go up</button>
      <span>{counter}</span>
      <button onClick={counterActionDown}>We go down</button>
      <input onChange={handleChange} name="pokemon" data-cy="input" />
      <button onClick={retreviewPokemon} value="Get Pokemon" data-cy="submit">
        Get Pokemon
      </button>
      This pokemon base experience is:
      <div data-cy="be">{pokemon.base_experience}</div>
      <br />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    counter: state.counter,
    pokemon: state.pokemon
  };
}

const mapDispatchToProps = {
  counterActionUp: counterActions.counterActionUP,
  counterActionDown: counterActions.counterActionDOWN,
  getPokemon: pokemonActions.loadPokemon
};
/*
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      counterAction: bindActionCreators(
        counterActions.counterActionUP,
        dispatch
      ),
      counterActionDec: bindActionCreators(
        counterActions.counterActionDOWN,
        dispatch
      )
    }
  };
}
*/

HomePage.propTypes = {
  counterActionUp: PropTypes.func.isRequired,
  counterActionDown: PropTypes.func.isRequired,
  setpokemonName: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
