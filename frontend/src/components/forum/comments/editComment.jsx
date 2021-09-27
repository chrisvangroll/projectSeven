import React from 'react';
import Axios, {useState} from 'axios';
import UpdateComment from './updateComment';
import DeleteComment from './deleteComment';
import { Button, Collapse } from 'react-bootstrap';

export default function EditComment(props) {
    
 //console.log('comment id' +props.commentId3)

    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

   const toEdit = () => props.commenter1 === getStorage() ? "" : "d-none";
    
    const toggleClass = () =>{
        document.getElementById(`comment${props.commentId3}`).classList.toggle('d-none');
        
    }
    // console.log(props.commenter1)
    // console.log(getStorage())

    // const deleteComment = async () =>{
    //     try{
    //         const res = await Axios.delete('http://localhost:3001/comment/' + props.commentId3 +'/remove/');
    //         console.log(res);
    //         props.getComments1();
    //         //window.location = 'http://localhost:3000/forum'
    //     }catch(err){
    //         console.log(err)
    //     }
    // }

    return (

        // <i class="fas fa-edit"></i>
        <div className={toEdit()} onClick = {toggleClass} ><i class="fas fa-edit"></i>
            <div id= {`comment${props.commentId3}`} class='d-none'>
            <DeleteComment />
            {/* <button onClick={deleteComment}>Delete Comment</button> */}
            <UpdateComment  comment2={props.comment1}/>
            </div>
        </div>
    )
}

