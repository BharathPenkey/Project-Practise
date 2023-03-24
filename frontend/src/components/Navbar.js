import React from 'react'

export default function Navbar() {
  return (
    <header>
        <div className='container'>
                <Link to="/">
                    <h1>Workout Buddy</h1>
                </Link>
                <nav>
                    {user && (
                        <div>
                        <span>{user.email}</span>
                        <button onClick={handlelogout}>Log out</button>
                        </div>
                    )}
                    {!user && (
                        <div>
                        <Link to='login'>Login</Link>
                        <Link to='signup'>Signup</Link>
                        </div>
                    )}
                </nav>
            </div>
    </header>
  )
}
