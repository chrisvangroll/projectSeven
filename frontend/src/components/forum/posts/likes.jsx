import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import ListOfLikers from './likerNames';

function Likes (props) {

    useEffect(() =>{
        getLikes();
    }, []);

    const [likes, setLikes] = useState([]);
    const [likeNames, setLikeNames] = useState([]);

    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

    const getLikes = async ()=>{
        try{
            const res = await Axios.get('http://localhost:3001/forum/likes/' + props.uploadId4);
            setLikes(res.data.length); 
            setLikeNames(res.data);
            
        }catch(err){
            console.log(err);
        }
    }
  
    const sendLike = async ()=>{
        try{
        const res = await Axios.post('http://localhost:3001/forum/likes',{
            userId : getStorage(),
            uploadId: props.uploadId4 
        }
            );
            console.log(res);
        }catch(err){
            console.log(err);
        }
        getLikes();
    }
    const showNames = () =>{
        document.getElementById(`likesFor${props.uploadId4}`).classList.toggle('d-none')
    }

    const numberOfLikes =()=>{
      return likes === '1' ? `${likes} like` : `${likes} likes`
    }


    return(
        <div >
            <div class='d-flex mt-2 justify-content-between position-relative'>
                <button class='ms-2 postLikeBtn'  onClick={sendLike}><i class="far fa-heart postLikeBtn "></i></button>
                <div class='p-2 likeNumber fw-bold' onMouseEnter={showNames} onMouseLeave={showNames}>{numberOfLikes()}</div>
                <ListOfLikers uploadId11={props.uploadId4} likers ={likeNames}/>
            </div>
            
        </div>
    )
}

export default Likes;