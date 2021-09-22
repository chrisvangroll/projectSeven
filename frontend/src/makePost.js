import React, {useState}  from 'react';
import {Link } from 'react-router-dom';
import Axios from 'axios';
import Nav from './nav';



function MakePost (props) {

    const [title, setTitle] = useState('');
    const [file, setFile] = useState();

    const sendTitle = (e) =>{
        setTitle(e.target.value);
        console.log(title)
    }
    console.log(file)
    // const sendFile = (selectedFile) =>{
    //     setFile(selectedFile.target.files);
    //     console.log(file)
    // }

    // const sendFile = (file) =>{
    //     const formData = new FormData();
    //     formData.append('image', file[0]);
    //     const config = {
    //         headers: {
    //             'content-type': 'multipart/form-data'
    //         }
    //     }
    //     console.log(file[0])
    // }
    const sendPost = async ()=>{
        function getStorage(){
            let userId = localStorage.getItem('id');
            userId = JSON.parse(userId);
            return userId;
        }
        //console.log(file[0]);
        const formData = new FormData();
        formData.append('gif', file[0]);
        formData.append('author', getStorage());
        formData.append('title', title);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        try{
            const res = await Axios.post('http://localhost:3001/forum', formData)
            console.log('uploaded successfully');
            window.location = 'http://localhost:3000/forum';
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
                <label htmlFor="file">Upload your file</label>
                <input type="file" id="file" onChange = {(e) => setFile(e.target.files)}/>
            </form>
            <br />
            <button onClick = {sendPost}>Create Post</button>
        </div>
   
    )
}

export default MakePost;