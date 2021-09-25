import React, {useEffect, useState} from 'react';
import Axios from 'axios';
//import {Link } from 'react-router-dom';
import Post from './post.jsx';
import Nav from '../nav/nav.jsx';

function Forum (){

    useEffect(() =>{
        getPosts();
    }, []);
    
    const [posts, setPosts] = useState([]);

    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

    const userId =getStorage();

    const getPosts = async ()=>{
        try{
            const res = await Axios.get('http://localhost:3001/forum');
            //console.log(res.data);
            setPosts(res.data);   
            
        }catch(err){
            console.log(err);
        }
    }


    return(
        <div>
            <Nav/>
            <h1 >Forum</h1>
            <br />
            <div>{posts.map(post=>(
                <Post title={post.title} content={post.content} author={post.author} name={post.name} uploadId={post.id}/>
            ))}</div>

            {/* <button onClick= {getPosts}>click for data</button>
            {displayPosts} */}
        </div>
    )
}

export default Forum;