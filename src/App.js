import './App.css';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import {useEffect, useState} from 'react'
import {createContext} from 'react';
import {defGrid,wordsetGenerator} from './Word'
import TerminateGame from "./components/TerminateGame"
export const AppContext = createContext();

function App() {
  const [possible, setPossible] = useState(new Set)
  const [wrongLetter, setWrongLetter] = useState([])
  const [grid, setGrid] = useState(defGrid)
  const [solution, setSolution] = useState("")
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, position: 0})
  const [terminate, setTerminate] = useState({terminate: false, won: false})

  useEffect(() => {
    wordsetGenerator().then((words) => {
      setPossible(words.possible)
      setSolution(words.currentWord)
    })
  },[])

  const typing = (keyVal) => {
    if (currentAttempt.position > 4) return;
    const currentGrid = [...grid]
    currentGrid[currentAttempt.attempt][currentAttempt.position] = keyVal
    setGrid(currentGrid)
    setCurrentAttempt({...currentAttempt, position: currentAttempt.position + 1})
  };
  const deleting = () => {
    if (currentAttempt.position === 0) return;
    const newGrid = [...grid]
    newGrid[currentAttempt.attempt][currentAttempt.position-1] = ""
    setGrid(newGrid)
    setCurrentAttempt({...currentAttempt, position: currentAttempt.position - 1})
  };
  const entering = () => {
    if (currentAttempt.position !== 5) return;
    let currentWord = ""
    for(let i = 0; i < 5; i++){
      currentWord += grid[currentAttempt.attempt][i]
    }

    if(possible.has(currentWord.toLowerCase())){
      setCurrentAttempt ({attempt: currentAttempt.attempt + 1, position: 0})
    }
    else{
      alert("Not in the word list")
    }
    if (currentWord.toLocaleLowerCase() === solution){
      setTerminate({terminate: true, won: true})
      return;
    }
    if (currentAttempt.attempt === 5){
      setTerminate({terminate: true, won: false})
    }
  };

  return (
    <div className="App">
      <nav>
        <a href="/" id="navbar_logo">Codle</a>
      </nav>
      <AppContext.Provider 
        value={{grid, setGrid, currentAttempt, setCurrentAttempt, typing, entering, deleting, solution, wrongLetter, setWrongLetter, terminate, setTerminate}}
      >
        <div className = "codle">
          <Grid />
          {terminate.terminate ? <TerminateGame /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
