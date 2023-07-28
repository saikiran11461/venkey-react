import React, { useState } from 'react'

const Todo = () => {
    const [text,setText] = useState("");
    const [data,setData] = useState([]);
    const handleChange=(e)=>{
        setText(e.target.value)
    }

    const handleSubmit=()=>{
        const payload={
            title:text,
            status:false
        }
        setData([...data,payload])

    }

   // console.log(data)

  return (
    <div style={{marginTop:"300px"}}>
        <h1>{text}</h1>
        <input value={text} onChange={handleChange} type="text"  placeholder='enter '/>
        <button onClick={handleSubmit}>Adding</button>
        

        {
            data?.map((item)=>(
                <ul>
                    <li>{item.title}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default Todo