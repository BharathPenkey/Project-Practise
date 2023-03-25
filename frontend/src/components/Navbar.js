import React from 'react'

import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
        <div className='container'>
                <Link to="/">
                    <h1>LOGO</h1>
                </Link>
                <nav>
                        <div>
                        <button>Log out</button>
                        </div>

                        <div>
                        <Link to='login'>Login</Link>
                        <Link to='signup'>Signup</Link>
                        </div>
                  
                </nav>
            </div>
    </header>
  )
}
