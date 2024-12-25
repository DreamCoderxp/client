import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/App.css';
const PokemonDetailsPage = () => {
  const { name } = useParams(); // Get Pokémon name from the URL
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch Pokémon details');
        setLoading(false);
        console.error(err);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  if (loading) {
    return <div>Loading Pokémon details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <h2>Abilities</h2>
      <ul>
        {pokemon.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
      <h2>Types</h2>
      <ul>
        {pokemon.types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetailsPage;
