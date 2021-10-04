import React, {useState} from 'react';
import Axios from 'axios';
//import '../styles/auth.css';
//import './auth.css';
import {Link } from 'react-router-dom';
import LoginHeader from './LoginHeader';
import Logo from '../../images/icon-left-font-monochrome-black.webp'


function Login (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    const logEmail = (e) =>{
        setEmail(e.target.value);
    }

    const logPassword = (e) =>{
        setPassword(e.target.value);
    }

    const getMessage = (message) =>{
        setMessage(message)
    }


    const sendLoginData = async ()=>{
        try{
            const res = await Axios.post('http://localhost:3001/auth/login',{
            email: email,
            password: password
            });
               if(res.data.message === 'Email does not exist'){
                   getMessage(res.data.message);
                   console.log(res.data.message)
               }
               if(res.data.message === 'Email and password do not match'){
                getMessage(res.data.message);
                console.log(res.data.message)
              }
              if(res.data.message === 'login successful'){
                function setStorage(value){
                    localStorage.setItem('id', JSON.stringify(value));
                }
                setStorage(res.data.userId);
                window.location = 'http://localhost:3000/forum'
              }
        }catch(err){
            console.log(err)
        }
      };


    return(
        <div class='container authContainer d-flex justify-content-center align-items-center'>
            <div class='registrationWrapper'>
                <img class='authLogo' src={Logo} alt="Groupomania" />
                <h1 class='text-center fs-2 mb-3'>Welcome Back</h1>
                <form action="">
                    <input class='w-100 mb-3' placeholder='Email' type="email" id="email" onChange={logEmail}/>
                    <input class='w-100 mb-3' placeholder='Password' type="password" id="password" onChange={logPassword}/>
                </form>
                <button class='w-100 buttonOne' onClick={sendLoginData}>Login</button>
                
                    <div class='d-flex mt-3 justify-content-center p-0'>
                        <div class='me-2'>New to Groupomania?</div>
                        <Link class="nav-link p-0" to="/signup">Sign Up</Link> 
                    </div>
                    <div class='text-center mt-2 fw-bold errorMessage'>{message}</div>
                {/* <h2>{message}</h2> */}
            </div>
            
        </div>
    )
}

export default Login;