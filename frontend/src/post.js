import React, {useEffect, useState} from 'react';

function Post (props) {
    return(
        <div>
            <h2>{props.title}</h2>
            <img src={props.content} alt="pic" />
            <div>by {props.author}</div>
        </div>
    )
}

export default Post;