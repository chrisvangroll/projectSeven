import React, {useEffect, useState} from 'react';
import Comment from './comment.jsx';
import Axios from 'axios';

function Comments (props) {
    useEffect(() =>{
        getComments();
    }, []);
console.log(props.uploadId3)
    const [comments, setComments] = useState([]);

    const getComments = async ()=>{
        try{
            const res = await Axios.get('http://localhost:3001/comment/' + props.uploadId3);
            setComments(res.data); 
            
        }catch(err){
            console.log(err);
        }
    }
   
    return(
        <div >
            <h3>Comment Section</h3>
           <div>{comments.map(comment=>(
                <Comment commentId={comment.id} commenter={comment.commenter} uploadId3={comment.uploadId} comment={comment.comment}/>
            ))}</div>
        </div>
    )
}

export default Comments;