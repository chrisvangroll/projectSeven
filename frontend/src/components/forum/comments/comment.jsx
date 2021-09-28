import React, {useState} from 'react';
import CommentLikes from './commentLikes';
import Axios from 'axios';
import DeleteComment from './deleteComment';

function Comment (props) {
    
    const [commentEdit, setCommentEdit] = useState('');

    const logCommentEdit = (e) =>{
        setCommentEdit(e.target.value);
    }

    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

    const updateComment = async ()=>{
        
        try{
            const res = await Axios.put('http://localhost:3001/comment/', {
                id: props.commentId,
                comment: commentEdit
            })
            console.log(res);
            console.log('updated successfully');
        }catch(err){
            console.log(err)
        }
      };

   const toEdit = () => props.commenter === getStorage() ? "" : "d-none";
   
   const toggleClass = () =>{
    document.getElementById(`edit${props.commentId}`).classList.toggle('d-none')
}

const toggleEditBox = () =>{
    document.getElementById(`edit${props.commentId}`).classList.toggle('d-none')
    document.getElementById(`editBox${props.commentId}`).classList.toggle('d-none')
    document.getElementById(`editSubmit${props.commentId}`).classList.toggle('d-none')
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
            <input type="text" onChange={logCommentEdit} id={`editBox${props.commentId}`} placeholder={props.comment} class='position-absolute border-5 d-none'/>
            <button onClick={updateComment} id={`editSubmit${props.commentId}`} class='d-none'>Submit edit</button>
            <div id={`edit${props.commentId}`} class='d-none'>
                <DeleteComment getComments1={props.getComments} commentId4={props.commentId}/>
                <button onClick={toggleEditBox}>update</button>
            </div>

        </div>
       
    )
}

export default Comment;