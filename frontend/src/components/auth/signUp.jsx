import React, {useState} from 'react';
//import '../styles/auth.css';
//import './auth.css';
import Axios from 'axios';
import {Link } from 'react-router-dom';
import Logo from '../../images/icon-left-font-monochrome-black.webp'



function Signup (){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const regName = (e) =>{
        setName(e.target.value);
        console.log(name)
    }

    const regEmail = (e) =>{
        setEmail(e.target.value);
        console.log(email)
    }

    const regPassword = (e) =>{
        setPassword(e.target.value);
        console.log(password)
    }

    const sendSignUpData = async ()=>{
        try{
            const res = await Axios.post('http://localhost:3001/auth/signup',{
            name: name,
            email: email,
            password: password
            })

            function setStorage(value){
                localStorage.setItem('id', JSON.stringify(value));
            }
            setStorage(res.data.userId);
            window.location = 'http://localhost:3000/forum';
        }catch(err){
            console.log(err)
        }
      };
    return(
        <div class='container authContainer d-flex justify-content-center align-items-center'>
        <div>
            <img src={Logo} alt="" />
            <h1 class='text-center fs-2 mb-3'>Welcome Back</h1>
            <form action="">
                <input class='w-100' type="text" id="name" placeholder='Name' onChange = {regName}/>
                <input class='w-100' type="text" id="email" placeholder='Email' onChange = {regEmail}/>
                <input class='w-100' type="Password" id="password" placeholder='Password' onChange = {regPassword}/>
            </form>
            <button class='w-100'onClick = {sendSignUpData}>Sign Up</button>
                <div class='d-flex mt-3 justify-content-center p-0'>
                    <div class='me-2'>Already a member?</div>
                    <Link class="nav-link p-0" to="/">Login</Link> 
                </div>
            
            {/* <h2>{message}</h2> */}
            <br />
        </div>
        
    </div>
            
            
            
        
    )
}

export default Signup;