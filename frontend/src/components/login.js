import React, {useState} from 'react';
import Axios from 'axios';
//import '../styles/auth.css';
//import './auth.css';
import {Link } from 'react-router-dom';

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

    // const sendLoginData = () => {
    //     const data = { email: email, password: password};
    //     Axios.post('http://localhost:3001/auth/login', data)
    //     .then(response => setUserId(response))
    // }
    
    const sendLoginData = async ()=>{
        try{
            const res = await Axios.post('http://localhost:3001/auth/login',{
            email: email,
            password: password
            });
               if(res.data.message === 'email does not exist'){
                   getMessage(res.data.message);
                   console.log(res.data.message)
               }
               if(res.data.message === 'email and password do not match'){
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
        <div>
            <h1>Login</h1>
            <form action="">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" onChange={logEmail}/>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" onChange={logPassword}/>
            </form>
            <button onClick={sendLoginData}>Login</button>
            <br />
            <h2>{message}</h2>
            <br />
            <Link to="/signup">Sign Up</Link> 
        </div>
    )
}

export default Login;