export default function RollBtn({tenzies, handleRefresh, handleClick}) {
  return (
    <footer>
      <button className="roll-dice" onClick={tenzies ? handleRefresh : handleClick}>
        {tenzies ? 'Reset Game' : 'Roll dice'}
      </button>
    </footer>
  );
}