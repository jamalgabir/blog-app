import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
const Login = () => {
  return (
    <div className='logincontainer'>
        <h2>Login</h2>
        
        <form className="login">
            <input required type="text" placeholder='Email' />
            
            <input required type="password" placeholder='Password' />
            <p style={{color: "red"}}>Error message</p>
            <button className='btn' type='submit'>Login</button>
            <span style={{border: "none"}}>Don't have account <Link to="/register">Register</Link></span>
        </form>
    </div>
  )
}

export default Login