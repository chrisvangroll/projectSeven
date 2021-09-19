import React from 'react';
import './auth.css';
import {Link } from 'react-router-dom';

function Login (){
    return(
        <div>
            <h1>Login</h1>
            <form action="">
                <label htmlFor="email">Email</label>
                <input type="text" id="email"/>
                <label htmlFor="password">Password</label>
                <input type="text" id="password"/>
                <input type="submit" value='Login'/>
                <Link to="/signup">Sign Up</Link>
            </form>
        </div>
    )
}

export default Login;