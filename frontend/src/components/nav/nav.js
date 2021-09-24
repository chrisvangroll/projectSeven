import React from 'react';
import {Link } from 'react-router-dom';
//import '../styles.nav.css';


function Nav (props) {
    return(
        <nav >
            <Link className='link' to="/forum">Forum</Link> 
            <Link className='link' to="/create">Create Post</Link> 
            <Link className='link' to="/account">Account</Link> 
            <Link className='link' to="/">Log Out</Link> 
        </nav>
    )
}

export default Nav;