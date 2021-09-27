import React from 'react';
import CommentLikes from './commentLikes';
import EditComment from './editComment';

function Comment (props) {

   
    //console.log('commments array' + comments)
    // console.log(getStorage())
    //console.log(props.commenter)
    return(
        <div class= 'd-flex flex-row'>
            <div class= 'w-75'>{props.comment}</div>
           <CommentLikes commentId2 = {props.commentId}/>
           <EditComment getComments1 ={props.getComments} commentId3 ={props.commentId} commenter1={props.commenter} comment1={props.comment}/>
        </div>
       
    )
}

export default Comment;