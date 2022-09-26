import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <h1>Tenzies web Game</h1>
      <h3>
        Tenzies is a game against the computer where you roll the dice to get
        the same number across all the die faces. click a die with your desired
        number to lock it and prevent it from rolling.
      </h3>
      <h3>Click on the 'Play Tenzies' button to play</h3>
      <button>
        <Link to="../MainContent">Play Tenzies</Link>
      </button>
    </div>
  );
}

export default Homepage;
