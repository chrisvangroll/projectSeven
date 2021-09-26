import React, {useEffect, useState} from 'react';
import Nav from '../../nav/nav';
import { useLocation } from "react-router-dom";
import Axios from 'axios';
//import { useParams } from "@reach/router";


function Modify (props) {
    let test = 'test';
    const location = useLocation();
    const uploadId = location.state?.uploadId;

    //console.log(uploadId)
    const [post, setPost] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState();
    const [title, setTitle] = useState('');
    
    const setTitleState = (e) =>{
        setTitle(e.target.value);
        //console.log(title)
    }
   // console.log(imageUrl)
    useEffect(() =>{
        getPost();
    }, []);
   

    const getPost = async ()=>{
        try{
            const res = await Axios.get('http://localhost:3001/forum/' + uploadId + '/post');
            setPost(res.data);
            setImageUrl(res.data[0].content);
            //setImageUrl(post[0].content);
            setTitle(res.data[0].title);
            //setTitle(post[0].title);
            setLoading(false);
          
            
        }catch(err){
            console.log(err);
        }
    }



    const deletePost = async () =>{
        try{
            const res = await Axios.delete('http://localhost:3001/forum/' + post[0].id);
            console.log(res)
            window.location = 'http://localhost:3000/forum'
        }catch(err){
            console.log(err)
        }
    }

    //console.log(imageUrl[0])

    const updatePost = async ()=>{
        
        const formData = new FormData();
        formData.append('gif', imageUrl[0]);
        formData.append('title', title);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        try{
            const res = await Axios.put('http://localhost:3001/forum/' + post[0].id, formData)
            console.log(res);
            console.log('updated successfully');
            window.location = 'http://localhost:3000/forum';
        }catch(err){
            console.log(err)
        }
      };
    //console.log(post[0].id)
    // // console.log(post[0].id)
    // console.log(post[0].content)
    // console.log(post[0].title)
    if (isLoading) {
        return <div>Loading...</div>;
      }

    return(
        <div>
            <Nav/>
            <h2>{post[0].title}</h2>
            <label htmlFor="title">Modify Title</label>
            <input type="text" id='title' onChange={setTitleState} />
            <img src={post[0].content} alt="" />
            <br />
            <label htmlFor="file">Upload your file</label>
            <input type="file" id="file" onChange = {(e) => setImageUrl(e.target.files)}/>
            <br />
            <br />
            <button onClick= {deletePost}>Delete Post</button>
            <br />
            <br />
            <button onClick={updatePost}>Modify Post</button>
        </div>
    )
}

export default Modify;