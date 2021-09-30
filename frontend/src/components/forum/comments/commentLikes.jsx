import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import ListOfCommentLikers from './listOfCommentLikers';

function CommentLikes (props) {

    useEffect(() =>{
        getLikes();
    }, []);

    const [commentLikes, setCommentLikes] = useState([]);
    const [commentLikers, setCommentLikers] = useState([]);

    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

    const getLikes = async ()=>{
        try{
            const res = await Axios.get('http://localhost:3001/comment/' + props.commentId2 + '/upvote/');
            setCommentLikes(res.data.length); 
            //console.log(res.data)
            setCommentLikers(res.data)
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
    const showList = ()=>{
        document.getElementById(`likes${props.commentId2}`).classList.toggle('d-none');
    }
    return(
        // <div >
        //     <button onClick={sendLike}>Like</button>
        //    <div>Number of likes = {likes}</div>
        // </div>
        <div class = 'd-flex flex-row'>
            <button class='me-1 likeButton' onClick={sendLike}><i class="fas fa-thumbs-up likeIcon"></i></button>
            <div onClick={showList} class='me-1 numberOfCommentLikes p-2'>{commentLikes}</div>
            <ul id={`likes${props.commentId2}`} class='d-none'>Liked By:  {commentLikers.map(name=>(
                <ListOfCommentLikers name={name.name}/>
            ))}</ul>
        </div>
    )
}

export default CommentLikes;