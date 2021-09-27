import React, {useEffect, useState} from 'react';
import Axios from 'axios';

function CommentLikes (props) {

    useEffect(() =>{
        getLikes();
    }, []);

    const [commentLikes, setCommentLikes] = useState([]);

    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

    const getLikes = async ()=>{
        try{
            const res = await Axios.get('http://localhost:3001/comment/' + props.commentId2 + '/upvote/');
            setCommentLikes(res.data.length); 
            console.log(res.data)
            //console.log(res.data.length)
            
        }catch(err){
            console.log(err);
        }
    }
  
    const sendLike = async ()=>{
        try{
        const res = await Axios.post('http://localhost:3001/comment/upvote',{
            userId : getStorage(),
            commentId: props.commentId2 
        }
            );
        console.log(res);
        }catch(err){
            console.log(err);
        }
        getLikes();
       
    }

    return(
        // <div >
        //     <button onClick={sendLike}>Like</button>
        //    <div>Number of likes = {likes}</div>
        // </div>
        <div class = 'd-flex flex-row'>
            <button class='me-1' onClick={sendLike}><i class="fas fa-thumbs-up"></i></button>
            <div class='me-1'>{commentLikes}</div>
        </div>
    )
}

export default CommentLikes;