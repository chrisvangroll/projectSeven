import React, {useEffect, useState} from 'react';
import Comment from './comment.jsx';
import Axios from 'axios';

function Comments (props) {
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

    const sendComment = async ()=>{
        try{
            const res = await Axios.post('http://localhost:3001/comment',{
            userId: getStorage(),
            uploadId: props.uploadId3,
            content : comment
            });
            console.log(res);
            getComments();
        }catch(err){
            console.log(err)
        }
      };

   
    return(
        <div >
            <h3>Comment Section</h3>
           <div>{comments.map(comment=>(
                <Comment commentId={comment.id} commenter={comment.commenter} uploadId3={comment.uploadId} comment={comment.comment}/>
            ))}</div>
            <h3>Post a comment</h3>
            <input type="text" onChange = {logComment}/>
            <button onClick = {sendComment}>submit comment</button>
        </div>
    )
}

export default Comments;