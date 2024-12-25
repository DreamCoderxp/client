import React, { useEffect, useState } from 'react';
import { fetchAllPokemon } from '../services/pokemonService';
import PokemonCard from '../components/PokemonCard';
import '../styles/App.css';
const HomePage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchAllPokemon();
      setPokemonList(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Pokémon List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="pokemon-grid">
          {pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon._id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
