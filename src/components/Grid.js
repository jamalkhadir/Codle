import React from 'react'
import Letter from './Letter'

function Grid() {
    return (
        <div className = "grid">
            <div className = "row">
                <Letter posLetter={0} valAttempt={0}/>
                <Letter posLetter={1} valAttempt={0}/>
                <Letter posLetter={2} valAttempt={0}/>
                <Letter posLetter={3} valAttempt={0}/>
                <Letter posLetter={4} valAttempt={0}/>
            </div>
            <div className = "row">
                <Letter posLetter={0} valAttempt={1}/>
                <Letter posLetter={1} valAttempt={1}/>
                <Letter posLetter={2} valAttempt={1}/>
                <Letter posLetter={3} valAttempt={1}/>
                <Letter posLetter={4} valAttempt={1}/>
            </div>
            <div className = "row"> 
                <Letter posLetter={0} valAttempt={2}/>
                <Letter posLetter={1} valAttempt={2}/>
                <Letter posLetter={2} valAttempt={2}/>
                <Letter posLetter={3} valAttempt={2}/>
                <Letter posLetter={4} valAttempt={2}/>
            </div>
            <div className = "row"> 
                <Letter posLetter={0} valAttempt={3}/>
                <Letter posLetter={1} valAttempt={3}/>
                <Letter posLetter={2} valAttempt={3}/>
                <Letter posLetter={3} valAttempt={3}/>
                <Letter posLetter={4} valAttempt={3}/>
            </div>
            <div className = "row"> 
                <Letter posLetter={0} valAttempt={4}/>
                <Letter posLetter={1} valAttempt={4}/>
                <Letter posLetter={2} valAttempt={4}/>
                <Letter posLetter={3} valAttempt={4}/>
                <Letter posLetter={4} valAttempt={4}/>
            </div>
            <div className = "row"> 
                <Letter posLetter={0} valAttempt={5}/>
                <Letter posLetter={1} valAttempt={5}/>
                <Letter posLetter={2} valAttempt={5}/>
                <Letter posLetter={3} valAttempt={5}/>
                <Letter posLetter={4} valAttempt={5}/>
            </div>
        </div>
    )
}


export default Grid