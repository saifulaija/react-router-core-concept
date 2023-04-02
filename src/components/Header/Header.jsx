
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink.jsx/ActiveLink';
const Header = () => {
    return (
        <nav>
           <Link to='/'>Home</Link>
           <Link to='/about'>About</Link>
           <ActiveLink to='/friends'>Friends</ActiveLink> 
           <Link to = '/posts'>Posts</Link>
           
           <Link to='/contact'>Contact</Link>
        </nav>
    );
};

export default Header;