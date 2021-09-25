import React, {useEffect, useState, useParams} from 'react';
import Nav from '../nav/nav';
import { useLocation } from "react-router-dom";
import Axios from 'axios';
//import { useParams } from "@reach/router";


function Modify (props) {

    const location = useLocation();
    const uploadId = location.state?.uploadId;

    //console.log(uploadId)
    const [post, setPost] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() =>{
        getPost();
    }, []);
   

    const getPost = async ()=>{
        try{
            const res = await Axios.get('http://localhost:3001/forum/' + uploadId + '/post');
            setPost(res.data);
            setLoading(false);
          
            
        }catch(err){
            console.log(err);
        }
    }

    const deletePost = async () =>{
        try{
            const res = await Axios.delete('http://localhost:3001/forum/' + uploadId);
            console.log(res)
            window.location = 'http://localhost:3000/forum'
        }catch(err){
            console.log(err)
        }
    }
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
            <img src={post[0].content} alt="" />
            <br />
            <br />
            <button onClick= {deletePost}>Delete Post</button>
        </div>
    )
}

export default Modify;