import React from 'react'
import "./Suggest.css" 
import data from '../Component/Data';



const Suggested = () => {

  return (
    <div className="suggest-container">
        {data.map((post)=>(
            <div key={post.id} >
              <img src={post.img} alt="" className="suggest-img" />
              <h4 className="sugg-title">{post.title} </h4>
            </div>
        ))}
        
        
    </div>
  )
}

export default Suggested