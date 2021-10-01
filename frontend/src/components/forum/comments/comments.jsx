import React, {useEffect, useState} from 'react';
import Comment from './comment.jsx';
import Axios from 'axios';
//import { Button, Collapse } from 'react-bootstrap';
//import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';

function Comments (props) {
    const [open, setOpen] = useState(false);
    useEffect(() =>{
        getComments();
    }, []);

    const [comments, setComments] = useState([]);
//console.log(comments)
    const getComments = async ()=>{
        try{
            const res = await Axios.get('http://localhost:3001/comment/' + props.uploadId3);
            setComments(res.data); 
            console.log(res.data);
            
        }catch(err){
            console.log(err);
        }
    }

    const [comment, setComment] = useState('');

    const logComment = (e) =>{
        setComment(e.target.value);
        // console.log(comment);
    }

    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

    const clearInputField = () =>{
       document.getElementById(`input${props.uploadId3}`).value='';
    }

    const sendComment = async ()=>{
        try{
            const res = await Axios.post('http://localhost:3001/comment',{
            userId: getStorage(),
            uploadId: props.uploadId3,
            content : comment
            });
            console.log(res);
            getComments();
            clearInputField()
        }catch(err){
            console.log(err)
        }
      };

    const toggleClass = () =>{
        document.getElementById(`commentSection${props.uploadId3}`).classList.toggle('d-none');
    }
   
    return(
        <div class= 'allCommentsContainer'>
            <button  class='commentBtn mb-3'
            onClick={toggleClass}
                >
                Comments {comments.length}
            </button>
            <div id={`commentSection${props.uploadId3}`} class='d-none'>{comments.map(comment=>(
                <Comment getComments = {getComments} commentId={comment.id} commenter={comment.commenter} uploadId3={comment.uploadId} comment={comment.comment} name={comment.name}/>
            ))}</div>
        
            <div class= 'd-flex flex-row'>
                <input class= 'w-75 addComment' type="text" id={`input${props.uploadId3}`} placeholder= 'Write a comment....' onChange = {logComment}/>
                <button class= 'w-25 submitCommentBtn' onClick = {sendComment}>Submit</button>
            </div>
        </div>
    )
}

export default Comments;