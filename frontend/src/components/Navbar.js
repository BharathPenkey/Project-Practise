import React from 'react'

import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

export default function Navbar() {
  const logout = useLogout()

  const handlelogout = () => {
    logout()
 }
  return (
    <header>
        <div className='container'>
                <Link to="/">
                    <h1>LOGO</h1>
                </Link>
                <nav>
                      <div>
                      <Link to='/mybookings'>My bookings</Link>
                      </div>
                      <div>
                      <button onClick={handlelogout}>Log out</button>
                      </div>
                </nav>
            </div>
    </header>
  )
}
