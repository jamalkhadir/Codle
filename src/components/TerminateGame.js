import React from 'react'
import {useContext} from 'react'
import {AppContext} from "../App"

function Terminate() {
    const{terminate, solution, currentAttempt} = useContext(AppContext)
  return (
    <div className = "terminate">
        <h3>{terminate.won ? "You are correct!" : "You ran out of tries."} </h3>
        <h1>The correct word was <span>{solution}</span>.</h1>
        {terminate.won && (<h3>You took <span>{currentAttempt.attempt}</span> attempts.</h3>)}
    </div>
  )
}

export default Terminate