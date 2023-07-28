import React, { useEffect, useState } from 'react'

const Products = () => {
    const [data,setData] = useState([])

    const getData =async()=>{
         let res  = await fetch("https://fakestoreapi.com/products");
         let data =  await res.json();
         setData(data)
    }


    useEffect(()=>{
        getData()
    },[])

    console.log("data here", data)
  return (
    <div>
        {
            data?.map((item)=>(
                <h2>{item.title}</h2>
             ))
        }
    </div>
  )
}

export default Products