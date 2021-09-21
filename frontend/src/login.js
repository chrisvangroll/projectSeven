import React, {useState} from 'react';
import Axios from 'axios';
import './auth.css';
import {Link } from 'react-router-dom';

function Login (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const logEmail = (e) =>{
        setEmail(e.target.value);
    }

    const logPassword = (e) =>{
        setPassword(e.target.value);
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
            // if(res.data.id == 'Email/Password combination not found'){
            //     console.log('Email/Password combination not found');
            // }else{
            //     console.log(res)
            //     function setStorage(value){
            //         localStorage.setItem('id', JSON.stringify(value));
            //     }
            //     setStorage(res.data[0].id);
               // window.location = 'http://localhost:3000/forum';
           // }
           console.log(res);
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
                <br />
                <Link to="/signup">Sign Up</Link>
            </form>
            <button onClick={sendLoginData}>Login</button>
            
        </div>
    )
}

export default Login;