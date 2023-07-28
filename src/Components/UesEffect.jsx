import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'

const UesEffect = () => {
    const [data,setData] = useState([])
    const [add,setAdd] = useState(0)
    const getData=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
            setData(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    console.log("data",data)

    useEffect(()=>{
        getData();
    },[add])

    const handleAdd=()=>{
        setAdd(prev=>prev+1)
    }

  return (
    <div>
         <button onClick={handleAdd}>delete</button>
        {
            data?.map((item)=>(
                <ProductList key={item.id} id={item.id} title={item.title} price={item.price}  />
            ))
        }

   

    </div>
  )
}

export default UesEffect