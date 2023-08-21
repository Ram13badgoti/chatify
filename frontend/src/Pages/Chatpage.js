import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const Chatpage = () => {
const fetchChats =async()=>{
    const data = await axios.get('http://localhost:5000/api/chat');
    console.log(data)
}
 useEffect(() => {
    
 
        fetchChats();
    
}, [])

  return (
    <div>
     <h1>he</h1>
    </div>
  )
}

export default Chatpage
