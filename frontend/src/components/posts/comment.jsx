import React from 'react';
import CommentLikes from './commentLikes';
import EditComment from './editComment';

function Comment (props) {

    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

    const toEdit = () => props.commenter === getStorage() ? "" : "editBtn";
    

    return(
        <div >
           <div>{props.comment}</div>
           <div><CommentLikes commentId2 = {props.commentId}/></div>
           <EditComment getComments1 ={props.getComments} commentId3 ={props.commentId} className = {toEdit()}/>
        </div>
    )
}

export default Comment;