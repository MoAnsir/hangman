import React, { useState, useEffect } from "react";
import { wordSplit } from "./js/initial";
import Stage from "./components/Stage";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import "./App.css";

function App() {
  const [selectedWord, setSelectedWord] = useState(wordSplit());
  const [correctLetter, setCorrectLetter] = useState("");
  const [wrongLetter, setwrongLetter] = useState("");
  const [playable, setPlayable] = useState(true);

  useEffect(() => {
    const keyPressed = (event) => {
      const { key, keyCode } = event;
      const userInput = key.toLowerCase();
      if (playable) {
        if (selectedWord.includes(userInput)) {
          if (!correctLetter.includes(userInput)) {
            setCorrectLetter((prevLetter) => [...prevLetter, userInput]);
          }
        } else {
          if (!wrongLetter.includes(userInput)) {
            setwrongLetter((prevLetter) => [...prevLetter, userInput]);
          }
        }
      } else {
        return null;
      }
    };

    window.addEventListener("keydown", keyPressed);
    return () => window.removeEventListener("keydown", keyPressed);
  }, [correctLetter, wrongLetter, selectedWord, playable]);

  return (
    <div className="App">
      <Header />
      <Stage />
      <Counter wrongLetter={wrongLetter} setPlayable2={setPlayable} />
      <Word correctLetter={correctLetter} selectedWord={selectedWord} />
      <Keyboard />
    </div>
  );
}

export default App;
