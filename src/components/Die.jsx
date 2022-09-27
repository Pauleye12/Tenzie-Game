
export default function Die({handleclick, value:{isHeld, value}}) {
  return (
    <div
      onClick={handleclick}
      className={`die ${isHeld ? "dieisHeld" : " "}`}
    >
      <h1>{value}</h1>
    </div>
  );
}

