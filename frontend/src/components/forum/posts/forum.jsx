import React, {useEffect, useState} from 'react';
import Axios from 'axios';
//import {Link } from 'react-router-dom';
import Post from './post';
import Nav from '../../nav/nav';

function Forum (){

    useEffect(() =>{
        getPosts();
        getAdmin();
    }, []);
    
    const [posts, setPosts] = useState([]);

    function setStorage(value){
        localStorage.setItem('admin', JSON.stringify(value));
    }
   ;
    // function getStorage(){
    //     let userId = localStorage.getItem('id');
    //     userId = JSON.parse(userId);
    //     return userId;
    // }

    // const userId =getStorage();
    const getAdmin = async () =>{
        
        try{
            const res = await Axios.get('http://localhost:3001/forum/admin');
            //console.log(res.data[0].adminId); 
            setStorage(res.data[0].adminId);
            
        }catch(err){
            console.log(err);
        }
    }
    const getPosts = async ()=>{
        let config = {
            headers : {
                Authorization: JSON.parse(localStorage.getItem('token')) 
            } 
        }
        //console.log(config.headers.authorization)
        try{
            const res = await Axios.get('http://localhost:3001/forum', config 
                // headers : {
                //     authorization: JSON.parse(localStorage.getItem('token')) 
                // } 
            );
           // console.log(res.data);
            setPosts(res.data.reverse());   
            
        }catch(err){
            console.log(err);
        }
    }


    return(
        <div>
            <Nav/>
            <main class= 'container d-flex flex-column align-items-center mt-5 p-0'>{posts.map(post=>(
                <Post title={post.title} content={post.content} author={post.author} name={post.name} uploadId={post.id}/>
            ))}</main>

            {/* <button onClick= {getPosts}>click for data</button>
            {displayPosts} */}
        </div>
    )
}

export default Forum;