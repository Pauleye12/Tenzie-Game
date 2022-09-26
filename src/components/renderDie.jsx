import React, { useState } from "react";
import Die from "./Die";

function RenderDie(props) {
  

  return (
    <div className="dice-container">
      {props.Value.map((e, index) => (
        <Die key={index} value={e} handleclick={()=> props.handleToggle(e.id)} />
      ))}
    </div>
  );
}

export default RenderDie;
