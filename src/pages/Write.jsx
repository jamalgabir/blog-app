import React from 'react'
import { useState } from 'react';
import "./Write.css";

const Write = () => {
  const [input, setInput] = useState({
    title:"No title",
    description:"no description"

  })

  const handleChange =(e) =>{
    setInput(prev=>({...prev,[e.target.name]: e.target.value}))
  }
 

  return (
    <div className='write-container'>
      <div className="content">
        <h3 className="ti">Write your post</h3>
        <input type="file" className="write-input" />
        <input type="text" name='title' onChange={handleChange} className="write-input" placeholder='post title' />
        <input type="text" name='description' onChange={handleChange} className="write-input" placeholder='post description' />
      </div>
      
      
    </div>
  )
}

export default Write