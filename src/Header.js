import React from 'react';
import './Header.css';
import logo from "../src/images/amazon_PNG25.png"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <Link to="/">
            <img className='header_logo' src={logo} alt="" /></Link>
        </nav>
    );
};

export default Header;