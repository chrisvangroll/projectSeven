import React, {useEffect, useState} from 'react';
import MakeComment from './makeComment';

function Post (props) {
    
   
    return(
        <div id ={props.uploadId}>
            <h2>{props.title}</h2>
            <img src={props.content} alt="pic" />
            <div>Author: {props.name}</div>
            
            <MakeComment uploadId= {props.uploadId}/>
        </div>
    )
}

export default Post;