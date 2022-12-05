import React from 'react'
import { useState } from 'react';
import "./Write.css";

const Write = () => {
  const [input, setInput] = useState({
    title:"no title",
    description:"no description yet!"

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
      <div className="post-content">
        <img src="https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs" alt="jama" className="content-img" />
        <div className="content-info">
          <h4 className="cont-titl">{input.title}</h4>
          <div className="cont-desc">{input.description}</div>
        </div>
      </div>
      
    </div>
  )
}

export default Write