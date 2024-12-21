import React, { useState } from 'react'


function Autherform() {
    const[isLogin, setIsLogin] = useState(false);
  return (
    <div classname='container'>
        <div className='form-container'>
            <div className='form-toggle'>
                <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>login</button>
                <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>Signup</button>
            </div>
            {isLogin ? <>
            <div className='form'>
                <h2>Login Form</h2>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <a href='#'>Forget password?</a>
                <button>Login</button>
                <p>Not a Member? <a href='#'onClick={() => setIsLogin(false)}>Signup now</a></p>
            </div>
            </> : <>
            <div className='form'>
            <h2>Signup Form</h2>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <input type='password' placeholder='Confirm Password'/>
            <button>Signup</button>
            </div>
            </>}
        </div>
    </div>

  )
}

export default Autherform