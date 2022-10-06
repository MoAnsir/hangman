const Word = ({ correctLetter, selectedWord }) => {
  return (
    <div>
      <h2>Guess the word</h2>
      <ul>
        {selectedWord.map((letter, index) => {
          return (
            <li
              key={index}
              className="inline px-2 border-b-2 mx-2 border-black"
            >
              <span className="">
                {correctLetter.includes(letter) ? letter : ""}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Word;
