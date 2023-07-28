import React, { useState } from 'react'

const Counter = () => {
    const [text, setText] = useState(0)

    const handleAdding=()=>{
        setText(text+1)
    }
    const handleDecrease=()=>{
        setText(text-1)
    }
  return (
    <div style={{marginTop:"300px"}}>
        <h1>Conter {text}</h1>
        <button  onClick={handleAdding}>Adding</button>
        <button disabled={text === 0} onClick={handleDecrease}>reduce</button>
    </div>
  )
}

export default Counter


//onclick
//onClick
// handleAdd()  -> fun calling
// handleAdd    -> func refrence

// == it ingonres the data type
// === it requires the data type

