import React, {useEffect, useState} from 'react';
import Comment from './comment';
import Axios from 'axios';

function Comments (props) {
    useEffect(() =>{
        getComments();
    }, []);

    const [comments, setComments] = useState([]);

    const getComments = async ()=>{
        try{
            const res = await Axios.get('http://localhost:3001/comment');
            setComments(res.data);
            console.log(comments);   
            
        }catch(err){
            console.log(err);
        }
    }
   
    return(
        <div >
           <div>{comments.map(comment=>(
                <Comment commentId={comment.id} commenter={comment.commenter} uploadId3={comment.uploadId} comment={comment.comment}/>
            ))}</div>
        </div>
    )
}

export default Comments;