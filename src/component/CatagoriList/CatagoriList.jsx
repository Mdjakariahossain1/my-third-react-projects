import { data } from "autoprefixer"
import { useEffect, useState } from "react"
import Cetagori from "./Cetagori"






const CatagoriList = () => {

const [catagori,setcatagori]=useState([])
useEffect(()=>{

    fetch('/Data.json')
    .then(res=>res.json())
    .then(data=>setcatagori(data))
   
},[])


  return (
    <div className="grid grid-cols-3 gap-4">
       
        
        

{
    catagori.map(list => <Cetagori list={list}></Cetagori>)
}

    </div>

  )
}

export default CatagoriList

