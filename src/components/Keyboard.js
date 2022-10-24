import React, { useContext, useCallback, useEffect } from 'react'
import {AppContext} from '../App'
import Key from "./Key"

function Keyboard() {
  const {entering, deleting, typing, wrongLetter} = useContext(AppContext)

  const topchars = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
  const middlechars = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
  const bottomchars = ["Z", "X", "C", "V", "B", "N", "M"]

  const regTyping = useCallback((event) => {
    if (event.key === "Enter"){
      entering()
    } else if (event.key === "Backspace") {
      deleting()
    } else {
      topchars.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          typing(key)
        }
      })
      middlechars.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          typing(key)
        }
      })
      bottomchars.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          typing(key)
        }
      });
    }
  })
  useEffect(() => {
    document.addEventListener("keydown", regTyping)

    return () => {
      document.removeEventListener("keydown", regTyping)
    }
  },[regTyping])

  return (
    <div className="keyboard" onKeyDown={regTyping}>
      <div className="toprow">{topchars.map((key) => {
        return <Key keyVal = {key} wrong={wrongLetter.includes(key)}/>
      })}
      </div>
      <div className="middlerow">{middlechars.map((key) => {
        return <Key keyVal = {key} wrong={wrongLetter.includes(key)}/>
      })}
      </div>
      <div className="bottomrow"><Key keyVal = {"Enter"} endsButton/>
        {bottomchars.map((key) => {
        return <Key keyVal = {key} wrong={wrongLetter.includes(key)}/>
      })}
      <Key keyVal = {"⌫"} endsButton/>
      </div>
    </div>
  )
}

export default Keyboard