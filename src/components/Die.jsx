import React from "react";

function Die(props) {
  return (
    <div
      onClick={props.handleclick}
      className={`die ${props.value.isHeld ? "dieisHeld" : " "}`}
    >
      <h1>{props.value.value}</h1>
    </div>
  );
}

export default Die;
