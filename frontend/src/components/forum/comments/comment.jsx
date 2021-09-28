import React from 'react';
import CommentLikes from './commentLikes';
import EditComment from './editComment';

function Comment (props) {
    
    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

   const toEdit = () => props.commenter === getStorage() ? "" : "d-none";
   
   const toggleClass = () =>{
    document.getElementById(`comment${props.commentId}`).classList.toggle('d-none');
    
}
    //console.log('commments array' + comments)
    // console.log(getStorage())
    //console.log(props.commenter)
    return(
        <div class= 'd-flex flex-row flex-wrap'>
            <div class= 'w-75'>{props.comment}</div>
            <div class='w-25 d-flex flex-row'>
                <CommentLikes commentId2 = {props.commentId}/>
                <div className={toEdit()} onClick = {toggleClass} ><i class="fas fa-edit"></i></div>
            </div>
           <EditComment getComments1 ={props.getComments} commentId3 ={props.commentId} commenter1={props.commenter} comment1={props.comment}/>
        </div>
       
    )
}

export default Comment;