import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchPokemon = async (id) => {
  const response = await axios.get(`${API_URL}/pokemon/${id}`);
  return response.data;
};

export const fetchLeaderboard = async () => {
  const response = await axios.get(`${API_URL}/pokemon/leaderboard`);
  return response.data;
};

export const saveScore = async (name, score) => {
  const response = await axios.post(`${API_URL}/pokemon/leaderboard`, { name, score });
  return response.data;
};
