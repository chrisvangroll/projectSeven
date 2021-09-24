import React, {useEffect, useState} from 'react';
import MakeComment from './makeComment.jsx';
import Comments from './comments.jsx';
import Likes from './likes.jsx';

function Post (props) {
    
   
    return(
        <div id ={props.uploadId}>
            <h2>{props.title}</h2>
            <div>Posted by: {props.name}</div>
            <img src={props.content} alt="pic" />
            <br />
            <Likes uploadId4 = {props.uploadId}/>
            <Comments uploadId3 = {props.uploadId}/>
            <MakeComment uploadId2= {props.uploadId}/>
        </div>
    )
}

export default Post;