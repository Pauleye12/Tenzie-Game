export default function Header({tenzies}) {
  return (
    <header>
      <h1>Tenzies</h1>
      <p>
        {tenzies
          ? "Congratulations, You won!"
          : "Roll until all the dice are the same. click each die to freeze it at its current value between rolls."}
      </p>
    </header>
  );
}