import React from 'react';
import Axios from 'axios';

export default function EditComment(props) {

    const deleteComment = async () =>{
        try{
            const res = await Axios.delete('http://localhost:3001/comment/' + props.commentId3 +'/remove/');
            console.log(res);
            console.log(props.getComments1());
            //window.location = 'http://localhost:3000/forum'
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <button onClick={deleteComment}>Delete Comment</button>
        </div>
    )
}

