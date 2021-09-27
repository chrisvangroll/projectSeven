import React from 'react';
import {Link } from 'react-router-dom';
import logo from '../../images/icon-left-font-monochrome-black.webp';




function Nav (props) {
    return(
        <header class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <img class="navbar-brand logo" src= {logo}></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse  justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class='nav-link active' to="/forum" aria-current="page">Forum</Link> 
                            </li>
                            <li class="nav-item">
                                <Link class='nav-link' to="/create">Create Post</Link> 
                            </li>
                            <li class="nav-item">
                                <Link class='nav-link' to="/account">Account</Link> 
                            </li>
                            <li class="nav-item">
                                <Link class='nav-link' to="/">Log Out</Link> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
       
    )
}

export default Nav;