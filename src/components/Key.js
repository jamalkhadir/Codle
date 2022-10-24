import React from 'react'
import {useContext} from 'react'
import {AppContext} from '../App'

function Key({keyVal, endsButton, wrong}) {
  const {typing, entering, deleting} = useContext(AppContext)

  const clickLetter = () => {
    if (keyVal === "Enter"){
    entering()
    }
    else if (keyVal === "⌫"){
    deleting()    
    }
    else{
    typing(keyVal)
    }
  }
  
  return (
    <div className ="key" id ={endsButton ? "big": wrong && "wrong"} onClick ={clickLetter}> {keyVal} </div>
  )
}

export default Key