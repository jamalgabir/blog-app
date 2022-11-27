import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import data from '../Component/Data';
import './home.css'

const SinglePost = () =>{
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const post = data.filter((post)=>post.id==id)
  
  return (
    <div>
      {post.map((post)=>(
        <div className='single-post'>
          <img className='single-postimg' src={post.img} alt="post"/>
            <div className="single-info">
              <h3 className="title">{post.title}</h3>
              <span className="desc">{post.desc}</span>
            </div>
        </div>
      ))}
      
      
    </div>
  )
}

export default SinglePost