import React from 'react'
import { Link } from 'react-router-dom'
import Scroll from '../Component/Scroll'
import "./home.css"
import data from '../Component/Data';

const Home = () => {
  

  return (
    <>
    <Scroll>
    <div >
      <div className="posts">
        {data.map((post)=>(
          <div key={post.id} className="post">
            <img className='postimg' src={post.img} alt="post" />
            <div className="info">
              <Link className='link' to={`/post/${post.id}`}>
              <h3 className="title">{post.title}</h3>
              </Link>
              <span className="desc">{post.desc}</span>
              <Link className='link' to={`/post/${post.id}`}>
                <button className='btn'>Read more</button>
              </Link>
              
            </div>
            
          </div>
          
          
        ))}
      </div>
    </div>
    </Scroll>
    </>
  )
}

export default Home