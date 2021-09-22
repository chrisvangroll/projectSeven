import React, {useState}  from 'react';
import {Link } from 'react-router-dom';
import Axios from 'axios';
import Nav from './nav';



function MakePost (props) {

    const [title, setTitle] = useState('');
    //const [file, setFile] = useState('');

    const sendTitle = (e) =>{
        setTitle(e.target.value);
        console.log(title)
    }

    // const sendFile = (e) =>{
    //     setFile(e.target.value);
    //     console.log(file)
    // }
    const sendPost = async ()=>{
        function getStorage(){
            let userId = localStorage.getItem('id');
            userId = JSON.parse(userId);
            return userId;
        }
        try{
            const res = await Axios.post('http://localhost:3001/forum',{
            title: title,
            content: 'testing',
            author: '2'
            })
            console.log(res);
            //window.location = 'http://localhost:3000/forum';
        }catch(err){
            console.log(err)
        }
      };
    return(
        <div>
            <Nav/>
            <h1>Create Post</h1>
            <form action="">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange = {sendTitle}/>
                {/* <label htmlFor="file">Upload your file</label>
                <input type="file" id="file" onChange = {sendFile}/> */}
            </form>
            <br />
            <button onClick = {sendPost}>Create Post</button>
        </div>
   
    )
}

export default MakePost;