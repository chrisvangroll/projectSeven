import React from 'react';
import Axios from 'axios';
import UpdateComment from './updateComment';

export default function EditComment(props) {

    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

    const toEdit = () => props.commenter1 === getStorage() ? "" : "editBtn";
    
    // console.log(props.commenter1)
    // console.log(getStorage())

    const deleteComment = async () =>{
        try{
            const res = await Axios.delete('http://localhost:3001/comment/' + props.commentId3 +'/remove/');
            console.log(res);
            props.getComments1();
            //window.location = 'http://localhost:3000/forum'
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className={toEdit()} >
            <button onClick={deleteComment}>Delete Comment</button>
            <UpdateComment comment2={props.comment1}/>
        </div>
    )
}

