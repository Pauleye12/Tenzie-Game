import Die from "./Die";

export default function RenderDie({Value, handleToggle}) {
  
  return (
    <div className="dice-container">
      {Value.map((e, index) => (
        <Die key={index} value={e} handleclick={()=> handleToggle(e.id)} />
      ))}
    </div>
  );
}
