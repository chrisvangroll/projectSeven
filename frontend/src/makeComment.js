import React, {useEffect, useState} from 'react';
import Axios from 'axios';

const MakeComment = (props) =>{

    const [comment, setComment] = useState('');

    const logComment = (e) =>{
        setComment(e.target.value);
        console.log(comment);
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
            uploadId: props.uploadId,
            content : comment
            });
        }catch(err){
            console.log(err)
        }
      };

    return (
        <div>
            <div>Comment Here</div>
            <input type="text" onChange = {logComment}/>
            <button onClick = {sendComment}>submit comment</button>
        </div>
    )
}

export default MakeComment;