import { useState , useEffect } from "react"
import React from "react"

let Clock = ()=>{
  
    useEffect(()=>{
      setInterval(()=>{setDate(new Date())} ,1000) 
   })
   let [date , setDate] = useState(new Date())
   return(
     <React.Fragment>
       <div style={{backgroundColor:'black' , color:'white' , textAlign:'center' }}> {date.toLocaleTimeString()} </div>
     </React.Fragment>
   )
  
  }

  export default Clock