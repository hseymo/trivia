import './style.css';
import React from 'react';
import Navbar from "./Navbar.js"

function Header() {
    return (
        <header className='Header'>
        <h1 className='headerH1'>Let's Play Trivia!</h1>
        <Navbar />
      </header>
    )
}

export default Header;