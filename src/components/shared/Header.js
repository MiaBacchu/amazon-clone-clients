import React, { useContext } from 'react';
import './Header.css';
import logo from "../../../src/images/amazon_PNG25.png"
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { CgShoppingCart } from 'react-icons/cg';
import { UserContext } from '../../context/Context';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const {loggedInUser,logOut}=useAuth();
    const {length} = useContext(UserContext);
    return (
            <nav className='header'>
            <Link to="/">
            <img className='header_logo' src={logo} alt="" />
            </Link>
        <div className='header_search'>
                <input type="text" className='header_searchInput' />
            <FiSearch className='header_searchIcon'/>
        </div>
        <div className="header_nav">
         <Link to="/login" className="header_link">
         <div className="header_option">
          {!loggedInUser && <span className='header_option_lineOne'>Hello</span>}
          {loggedInUser && <span className='header_option_lineOne'>{loggedInUser?.displayName}</span>}
          {!loggedInUser &&<span className='header_option_lineTwo'>Sign In</span>}
          {loggedInUser && <span onClick={logOut} className='header_option_lineTwo'>Sign out</span>}
         </div>
         </Link>
         <Link to="/" className="header_link">
         <div className="header_option">
          <span className='header_option_lineOne'>Returns</span>
          <span className='header_option_lineTwo'>& Orders</span>
         </div>
         </Link>
         <Link to="/checkout" className="header_link">
         <div className="header_option">
          <span className='header_option_lineOne'>Your</span>
          <span className='header_option_lineTwo'>Prime</span>
         </div>
         </Link>
         <Link to="/checkout" className='header_link'>
         <div className="header_option_basket">
            <CgShoppingCart/>
          <span className='header_option_lineTwo'>{length}</span>
         </div>
         </Link>
        </div>
        </nav>
    );
};

export default Header;