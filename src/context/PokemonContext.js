const Pokemon = require('../models/pokemonModel');

exports.getAllPokemon = async (req, res) => {
  try {
    const pokemon = await Pokemon.find();
    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getPokemonById = async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    if (!pokemon) return res.status(404).json({ error: 'Pokemon not found' });
    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createPokemon = async (req, res) => {
    try {
        const pokemon = await Pokemon.create(req.body);
        res.status(201).json(pokemon);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
    };  

exports.updatePokemon = async (req, res) => {
    try {
        const pokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!pokemon) return res.status(404).json({ error: 'Pokemon not found' });
        res.json(pokemon);
    }
    catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
    }