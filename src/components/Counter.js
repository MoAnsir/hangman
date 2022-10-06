const Counter = ({ wrongLetter, setPlayable2 }) => {
  if (wrongLetter.length >= 6) {
    setPlayable2(false);
  }

  return (
    <div>
      <h2>Counter</h2>
      <p>Wrong guess {wrongLetter.length} of 6</p>
    </div>
  );
};

export default Counter;
