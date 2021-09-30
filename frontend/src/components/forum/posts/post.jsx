import React from 'react';
//import MakeComment from './makeComment.jsx';
import Comments from '../comments/comments';
import Likes from './likes.jsx';
import EditPost from './editPost.jsx';

function Post (props) {
    
   
    return(
        <div class='mb-5' id ={props.uploadId}>
            <div class='d-flex justify-content-between'>
            <h2 >{props.title}</h2>
            <EditPost author1 = {props.author} uploadId5 = {props.uploadId}/>
            </div>
            <div>Posted by {props.name}</div>
            <img class='gif' src={props.content} alt="pic" />
            <Likes uploadId4 = {props.uploadId}/>
            <Comments uploadId3 = {props.uploadId}/>
            {/* <MakeComment uploadId2= {props.uploadId}/> */}
        </div>
    )
}

export default Post;