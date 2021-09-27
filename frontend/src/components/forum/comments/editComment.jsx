import React from 'react';
import Axios, {useState} from 'axios';
import UpdateComment from './updateComment';
import DeleteComment from './deleteComment';
import { Button, Collapse } from 'react-bootstrap';

export default function EditComment(props) {
    
 //console.log('comment id' +props.commentId3)

    
    
  
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

        <div id= {`comment${props.commentId3}`} class='d-none'>
            <div className="d-flex flex-row">
                <DeleteComment />
                {/* <button onClick={deleteComment}>Delete Comment</button> */}
                <UpdateComment  comment2={props.comment1}/>
            </div>
        </div>
    )
}

