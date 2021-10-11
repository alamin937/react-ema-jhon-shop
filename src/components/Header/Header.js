import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import UseAuth from '../../UseHooks/UseAuth';
import './Header.css'

const Header = () => {
    const {user, logOut} = UseAuth();
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/order">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inverntory </NavLink>
                <span style={{color:'white'}}>{user.displayName}</span>
                { user.displayName ?
                    <button onClick={logOut}>LogOut </button>
               : <NavLink to="/login">LogIn</NavLink>}
            </nav>
        </div>
    );
};

export default Header;