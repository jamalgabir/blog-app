
import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
const Register = () => {
  return (
    <div className='logincontainer'>
        <h2>Register</h2>
        
        <form className="login">
        <input className='in' required type="text" placeholder='username' />
            <input className='in' required type="text" placeholder='Email' />
            
            <input className='in' required type="password" placeholder='Password' />
            <p style={{color: "red"}}>Error message</p>
            <button className='btn' type='submit'>Register</button>
            <span style={{border: "none"}}> have account <Link to="/login">Login</Link></span>
        </form>
    </div>
  )
}

export default Register