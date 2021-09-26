import React from 'react';
import CommentLikes from './commentLikes';
import EditComment from './editComment';

function Comment (props) {

   
    //console.log('commments array' + comments)
    // console.log(getStorage())
    //console.log(props.commenter)
    return(
        <div >
           <div>{props.comment}</div>
           <div><CommentLikes commentId2 = {props.commentId}/></div>
           <EditComment getComments1 ={props.getComments} commentId3 ={props.commentId} commenter1={props.commenter} comment1={props.comment}/>
        </div>
    )
}

export default Comment;