import React from 'react';

function Comment (props) {
    
    return(
        <div >
           <div>Comment</div>
           <div>{props.comment}</div>
        </div>
    )
}

export default Comment;