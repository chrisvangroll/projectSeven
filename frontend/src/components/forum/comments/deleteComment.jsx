import React from 'react'
import Axios from 'axios';

export default function DeleteComment(props) {
//console.log('here' + props.commentId4)
      const deleteComment = async () =>{
        try{
            const res = await Axios.delete('http://localhost:3001/comment/' + props.commentId4 +'/remove/');
            console.log(res);
            props.getComments1();
            //window.location = 'http://localhost:3000/forum'
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <button onClick={deleteComment}>delete</button>
        </div>
    )
}
