import React, {useEffect, useState} from 'react';
import Comment from './comment.jsx';
import Axios from 'axios';
import { Button, Collapse } from 'react-bootstrap';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';

function Comments (props) {
    const [open, setOpen] = useState(false);
    useEffect(() =>{
        getComments();
    }, []);

    const [comments, setComments] = useState([]);

    const getComments = async ()=>{
        try{
            const res = await Axios.get('http://localhost:3001/comment/' + props.uploadId3);
            setComments(res.data); 
            
        }catch(err){
            console.log(err);
        }
        return 'it worked';
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

   
    return(
        <div >
            <Button className='commentBtn btn mb-3'
             bsClass='custom-class'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Comments {comments.length}
      </Button>
      <Collapse in={open}>
            <div id="example-collapse-text">{comments.map(comment=>(
                <Comment getComments = {getComments} commentId={comment.id} commenter={comment.commenter} uploadId3={comment.uploadId} comment={comment.comment}/>
            ))}</div>
      </Collapse>
            {/* <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Comments {comments.length}</button> */}
            <div class= 'd-flex flex-row'>
                <input class= 'w-75 addComment' type="text" id={`input${props.uploadId3}`} placeholder= 'Write a comment....' onChange = {logComment}/>
                <button class= 'w-25 submitCommentBtn' onClick = {sendComment}>Submit</button>
            </div>
        </div>
    )
}

export default Comments;