import React, { useState, useEffect } from "react";
import { fetchPokemon } from "../utils/Api";
import MCQ from "./MCQ";

const Game = () => {
  const [pokemon, setPokemon] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    loadNewPokemon();
  }, []);

  const loadNewPokemon = async () => {
    const id = Math.floor(Math.random() * 151) + 1; // First-gen Pokémon
    const data = await fetchPokemon(id);
    setPokemon(data);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    loadNewPokemon();
  };

  if (!pokemon) return <p>Loading...</p>;

  const options = [pokemon.name, "Pikachu", "Charmander"].sort(() => Math.random() - 0.5);

  return (
    <div>
      <h1>Pokémon Quiz Game</h1>
      <p>Score: {score}</p>
      <MCQ pokemon={pokemon} options={options} onAnswer={handleAnswer} />
    </div>
  );
};

export default Game;
