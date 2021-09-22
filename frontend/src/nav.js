import React from 'react';
import {Link } from 'react-router-dom';
import './nav.css'


function Nav (props) {
    return(
        <nav >
            <Link className='link' to="/forum">Forum</Link> 
            <Link className='link' to="/create">Create Post</Link> 
            <Link className='link' to="/account">Account</Link> 
        </nav>
    )
}

export default Nav;