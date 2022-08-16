import './style.css';
import {NavLink} from "react-router-dom"
import React from 'react';

function Navbar() {
    return (
        <nav className='Navbar'>
            <ul className='navbarUl'>
                <li className='navbarLi'>
                    <NavLink className={({isActive}) => (isActive ? "LinkActive" : "Link" )} to="/about">About</NavLink>
                </li>
                <li className='navbarLi'>
                    <NavLink className={({isActive}) => (isActive ? "LinkActive" : "Link" )} to="/gameplay">Play</NavLink>
                </li>
                <li className='navbarLi'>
                    <NavLink className={({isActive}) => (isActive ? "LinkActive" : "Link" )} to="/scoreboard">Scoreboard</NavLink>
                </li>
                <li className='navbarLi'>
                    <NavLink className={({isActive}) => (isActive ? "LinkActive" : "Link" )} to="/locate">Locate</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;