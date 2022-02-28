import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className='nav-bar'>

        <Link to="/">
         <li>Home</li>
        </Link>

        <Link to="users">
            <li>Users</li>
        </Link>

        <Link to="services">
            <li>Services</li>
        </Link>
        

        <Link to="contact">
            <li>Contact</li>
        </Link>
        
        
    </nav>
  )
}
