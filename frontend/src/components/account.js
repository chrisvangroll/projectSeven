import React from 'react';
import Nav from './nav';
import Axios from 'axios';
import Utils from '../utils'

function Account (){
    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

    const deleteUser = async () =>{
        try{
            const res = await Axios.delete('http://localhost:3001/auth/delete',{
            data:{
                userId : getStorage()
            }
            });
            console.log(res)
            window.location = 'http://localhost:3000/signup'
        }catch(err){
            console.log(err)
        }
    }


    return(
        <div>
            <Nav/>
            <h1>Account</h1>
            <br />
            <button onClick = {deleteUser}>Delete Account</button>
        </div>
    )
}

export default Account;