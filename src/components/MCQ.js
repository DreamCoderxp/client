import React, { useState } from "react";

const MCQ = ({ pokemon, options, onAnswer }) => {
  const [selected, setSelected] = useState(null);

  const handleSubmit = () => {
    onAnswer(selected === pokemon.name);
  };

  return (
    <div>
      <h3>Who's that Pokémon?</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      {options.map((option, index) => (
        <button key={index} onClick={() => setSelected(option)}>
          {option}
        </button>
      ))}
      <button onClick={handleSubmit} disabled={!selected}>
        Submit
      </button>
    </div>
  );
};

export default MCQ;
