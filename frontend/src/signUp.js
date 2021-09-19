import React, {useState} from 'react';
import './auth.css';
import Axios from 'axios';
import {Link } from 'react-router-dom';


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
            const res = Axios.post('http://localhost:3001/auth/signup',{
            name: name,
            email: email,
            password: password
            })
        }catch(err){
            console.log(err)
        }
      };

    return(
        <div>
            <h1>Sign Up</h1>
            <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange = {regName}/>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" onChange = {regEmail}/>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" onChange = {regPassword}/>
                <button onClick = {sendSignUpData}>Sign Up</button>
                <Link to="/">Login</Link>
            </form>
        </div>
    )
}

export default Signup;