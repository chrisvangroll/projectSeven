import React from 'react';
import CommentLikes from './commentLikes';

function Comment (props) {
    
    return(
        <div >
           <div>{props.comment}</div>
           <div><CommentLikes commentId2 = {props.commentId}/></div>
           
        </div>
    )
}

export default Comment;