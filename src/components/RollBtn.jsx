import React from 'react'

function RollBtn(props) {
  return (
    <footer>
      {props.tenzies ? (
        <button className="roll-dice" onClick={props.handleRefresh}>
          Reset Game
        </button>
      ) : (
        <button className="roll-dice" onClick={props.handleClick}>Roll dice</button>
      )}
    </footer>
  );
}

export default RollBtn