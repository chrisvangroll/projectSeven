import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {Link } from 'react-router-dom';
import axios from 'axios';
import Post from './post';
import Nav from './nav';

function Forum (){

    useEffect(() =>{
        getPosts();
    }, []);
    
    const [posts, setPosts] = useState([]);

    const getPosts = async ()=>{
        try{
            const res = await Axios.get('http://localhost:3001/forum');
            setPosts(res.data);   
            console.log(posts)
        }catch(err){
            console.log(err);
        }
    }

    
    return(
        <div>
            <Nav/>
            <h1>Forum</h1>
            <br />

            <div>I have {posts.length} posts</div>
            <div>{posts.map(post=>(
                <Post title={post.title} content={post.content} author={post.author}/>
            ))}</div>

            {/* <button onClick= {getPosts}>click for data</button>
            {displayPosts} */}
        </div>
    )
}

export default Forum;