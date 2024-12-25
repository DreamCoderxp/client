import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/App.css';
const PokemonListPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100'); // Fetch 100 Pokémon
        setPokemonList(response.data.results);
        setLoading(false);
      } catch (err) {
        setError('Error fetching Pokémon list');
        setLoading(false);
        console.error(err);
      }
    };

    fetchPokemonList();
  }, []);

  if (loading) {
    return <div>Loading Pokémon list...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <a href={`/pokemon/${pokemon.name}`}>{pokemon.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonListPage;
