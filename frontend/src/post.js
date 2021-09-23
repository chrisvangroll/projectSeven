import React, {useEffect, useState} from 'react';
import MakeComment from './makeComment';
import Comments from './comments';

function Post (props) {
    
   
    return(
        <div id ={props.uploadId}>
            <h2>{props.title}</h2>
            <img src={props.content} alt="pic" />
            <div>Author: {props.name}</div>
            <Comments/>
            <MakeComment uploadId2= {props.uploadId}/>
        </div>
    )
}

export default Post;