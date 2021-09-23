import React, {useEffect, useState} from 'react';

function Post (props) {
    return(
        <div id ={props.id}>
            <h2>{props.title}</h2>
            <img src={props.content} alt="pic" />
            <div>by {props.name}</div>
        </div>
    )
}

export default Post;