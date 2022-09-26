import React from 'react'

function Header(props) {
  return (
    <header>
      <h1>Tenzies</h1>
      <p>
        {props.tenzies
          ? "Congratulations, You won!"
          : "Roll until all the dice are the same. click eah die to freeze it at its current value between rolls."}
      </p>
    </header>
  );
}

export default Header