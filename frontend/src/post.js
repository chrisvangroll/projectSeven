import React, {useEffect, useState} from 'react';

function Post (props) {
    return(
        <div>
            <h2>{props.title}</h2>
            <div>{props.content}</div>
            <div>{props.author}</div>
        </div>
    )
}

export default Post;