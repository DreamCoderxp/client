import React from 'react';
import '../styles/App.css'; // Add styles for the About page if needed

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About MyPokemonAPI</h1>
      <p>
        Welcome to MyPokemonAPI! This app is a MERN stack project that allows users to explore Pokémon
        details, including their abilities, types, and descriptions. It's designed to help fans of Pokémon
        access information quickly and easily.
      </p>
      <p>
        Built using MongoDB, Express, React, and Node.js, this project demonstrates how full-stack
        applications can integrate powerful technologies to create engaging experiences.
      </p>
      <p>
        Feel free to explore the Pokémon list, learn more about your favorite characters, and enjoy the
        journey into the world of Pokémon!
      </p>
    </div>
  );
};

export default AboutPage;
