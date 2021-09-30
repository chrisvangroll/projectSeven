import React, {useState} from 'react';
import CommentLikes from './commentLikes';
import Axios from 'axios';
import DeleteComment from './deleteComment';

function Comment (props) {

    
    const [commentEdit, setCommentEdit] = useState('');
    const [commentEditInput, setCommentEditInput] = useState('');

    const logCommentEdit = (e) =>{
        setCommentEdit(e.target.value);
        setCommentEditInput(e.target.value);
    }

    //console.log(commentEdit)

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
            props.getComments();
            finalToggle();
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
const finalToggle = () =>{
    document.getElementById(`editSubmit${props.commentId}`).classList.toggle('d-none')
    document.getElementById(`editBox${props.commentId}`).classList.toggle('d-none')
}
  let box = document.getElementById(`${props.commentId}comment`)

  const boxStyle = {
    width: box.clientWidth,
    height:box.clientHeight
  }

    return(
        
        <div class= 'd-flex flex-row commentContainer'>
            <div id={`${props.commentId}comment`} class='comment position-relative'>{props.comment}</div>
            <CommentLikes commentId2 = {props.commentId}/>
           
            <div class='editCommentBtn'  onClick = {toggleClass} >
                <div className={toEdit()} >
                    <i class="fas fa-edit"></i>
                    <div id={`edit${props.commentId}`} class='d-none mt-1 position-absolute deleteAndEditContainer'>
                        <DeleteComment getComments1={props.getComments} commentId4={props.commentId}/>
                        <button class='updateDeleteComment' onClick={toggleEditBox}>Edit Comment</button>
                    </div>
                </div>
            </div>
            <textarea type="text" style={boxStyle} onChange={logCommentEdit} id={`editBox${props.commentId}`} value={props.comment} class='position-absolute border-5 d-none'/>
            <div id={`editSubmit${props.commentId}`} class='d-none'>
                <button onClick={updateComment} >Submit Edit</button>
                <button onClick={finalToggle}>cancel</button>
            </div>
            

        </div>
       
    )
}

export default Comment;