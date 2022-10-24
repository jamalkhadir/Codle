import React, { useEffect } from 'react'
import {useContext} from 'react'
import {AppContext} from '../App'

function Letter({posLetter, valAttempt}) {
    const {grid, solution, currentAttempt, wrongLetter, setWrongLetter} = useContext(AppContext)
    const letter = grid[valAttempt][posLetter]
    const correct = solution.toUpperCase()[posLetter] === letter
    const almost = !correct && letter !=="" && solution.toUpperCase().includes(letter)
    const letterState = currentAttempt.attempt > valAttempt && (correct ? "correct" : almost ? "almost" : "error")
    useEffect(() => {
        if (letter !=="" && !almost && !correct){
            setWrongLetter((old) => [...old, letter])
        }
    },[currentAttempt.attempt])
    return (
    <div className="letter" id={letterState}>{" "}{letter}</div>
    )
}

export default Letter