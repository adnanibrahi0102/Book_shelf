import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='bg-black text-orange-500 p-4 flex gap-4 '>
      <Link to="/">Search Books</Link>
      <Link to="/bookshelf">My Bookshelf</Link>
    
    </nav>
  )
}

export default Navbar
