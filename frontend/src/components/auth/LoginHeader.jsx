import React from 'react';
import {Link } from 'react-router-dom';
import Logo from '../../images/icon-left-font-monochrome-black.webp'

function LoginHeader() {
    return (
        <header class="container border-bottom mb-3">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <img class="navbar-brand logo" src= {Logo}></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse  justify-content-end" id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item ">
                            <Link class="nav-link" to="/">Login</Link> 
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/signup">Sign Up</Link>  
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        // <header>
            
        //      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        //         <div class="container-fluid">
        //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span class="navbar-toggler-icon"></span>
        //             </button>
        //             <div class="collapse navbar-collapse " id="navbarNav">
        //                 <ul class="navbar-nav">
        //                     <li class="nav-item">
        //                     <Link class="nav-link" to="/">Login</Link>
        //                     </li>
        //                     <li class="nav-item">
        //                     <Link class="nav-link" to="/signup">Sign Up</Link> 
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
            // <div class = 'd-flex justify-content-center'>
            //     <img src={Logo} alt='Groupomania Logo'/>
            // </div>
    
       
    )
}

export default LoginHeader;
