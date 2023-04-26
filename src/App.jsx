import React from "react";
import { useState, useEffect, useCallback } from "react";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import { alphabet } from "./Logic/Logic";
import { PLAYERS_NAMES } from "./Logic/Logic";
import confetti from "canvas-confetti";








function App() {

const [word, setWord] = useState(PLAYERS_NAMES[Math.floor(Math.random() * PLAYERS_NAMES.length)]);
const [guessedLetters, setGuessedLetters] = useState([]);
const [incorrectLetters, setIncorrectLetters] = useState(0);
const [gameOver, setGameOver] = useState(false);
const [winner, setWinner] = useState(false);
const [audio, setAudio] = useState(null)

const handleGuess = useCallback(
  (guess) => {
    if (gameOver) return;

    if (guessedLetters.includes(guess)) return;

    if (word.includes(guess)) {
      setGuessedLetters([...guessedLetters, guess]);
    } else {
      setIncorrectLetters((prevIncorrectLetters) => prevIncorrectLetters + 1);
    }
  },
  [gameOver, guessedLetters, setGuessedLetters, setIncorrectLetters, word]
);


 useEffect(() => {
  if(incorrectLetters >= 6) {
    setGameOver(true);
    setWinner(false)
  }

  if(word.split('').every((letter) => guessedLetters.includes(letter))) {
    setGameOver(true);
    setWinner(true)
    confetti()
  }

},[incorrectLetters, guessedLetters])


useEffect(() => {
  if (!audio) {
    const newAudio = new Audio('/sounds/boca-12.mp3');
    newAudio.loop = true;
    newAudio.play();
    
    setAudio(newAudio);
  }
  return () => {
    audio?.pause(); // use optional chaining to avoid errors if audio is null
  };
}, [audio]);




  

 const resetGame = () => {
  setWord(PLAYERS_NAMES[Math.floor(Math.random() * PLAYERS_NAMES.length)]);
  setGuessedLetters([]);
  setIncorrectLetters(0)
  setGameOver(false);
  setWinner(false)
 }

  




 const Abecedario = alphabet().map((letter) => {
  return {
    letra: letter,
    elemento: (
      <p
        onClick={() => handleGuess(letter)}
        className="py-10  px-3 cursor-pointer text-yellow-300 text-5xl justify-center text-center hover:bg-yellow-400 hover:text-blue-950"
        key={letter}
      >
        {letter}
      </p>
    ),
  };
});





  return (
    <div className="container mx-auto bg-blue-950 "> 
     <NavBar />
     <MainContent word={word} guessedLetters={guessedLetters} incorrectLetters={incorrectLetters} gameOver={gameOver} winner={winner} resetGame={resetGame} Abecedario={Abecedario} handleGuess={handleGuess}/>
     {
      gameOver ? (

        <div className="flex flex-wrap justify-center pt-32 text-center text-yellow-300 text-5xl flex-col hover: cursor-pointer">
          {winner ? " Ganaste " : " Perdiste "}
          <button className="hover:bg-yellow-400 hover:text-blue-950 p-5 mt-10" onClick={resetGame}>Resetea el Game</button>
        </div>
        
      ) : (
        <p>Damn</p>
      )
     }    
  




     <div className="flex flex-wrap justify-center pt-32 text-center">
       {
         Abecedario.map((item) => item.elemento)
       }
    </div>
      
  
    </div>
  )
}

export default App;
