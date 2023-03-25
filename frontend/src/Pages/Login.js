import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Form.css'


export  function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
  return (
    <form className='login'>

       <h3>Sign in your account</h3>

       <input type='email'
        onChange={(e) => setEmail(e.target.value)}
        value = {email}
        placeholder='phone/email'/>

       <input  type='password' 
       onChange={(e) => setPassword(e.target.value)}
       value={password}
       placeholder='password'/>
       
       <span>forgot password?</span>
       <div className='createAccount'><Link to='/signup'>create account</Link></div>
        <button>Login</button>
    </form>
  )
}


export  function Login() {
  return (
    <div className='background'>
        <div className='home'>
        <div className='desc'>
            All you needed is a wheel in your Hand and four on Road.
            <div className='links'>
                <Link to='/signup'>Register</Link> &nbsp; &nbsp; &nbsp;

                <Link to='/admin'>Admin User</Link>
            </div>
        </div>
        <div className='form'><Form/></div>
        </div>
    </div>
  )
}


