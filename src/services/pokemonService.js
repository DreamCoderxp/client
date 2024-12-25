import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchAllPokemon = async () => {
  const response = await axios.get(`${API_BASE_URL}/pokemon`);
  return await response.json();
};

export const fetchPokemonById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/pokemon/${id}`);
  return response.data;
};

