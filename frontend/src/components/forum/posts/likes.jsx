import React, {useEffect, useState} from 'react';
import Axios from 'axios';

function Likes (props) {

    useEffect(() =>{
        getLikes();
    }, []);

    const [likes, setLikes] = useState([]);

    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

    const getLikes = async ()=>{
        try{
            const res = await Axios.get('http://localhost:3001/forum/likes/' + props.uploadId4);
            setLikes(res.data.length); 
            console.log(res)
            
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

    return(
        <div >
            <div class='d-flex mt-2'>
                <button class='me-1 ' onClick={sendLike}><i class="fas fa-thumbs-up"></i></button>
                <div>{likes}</div>
            </div>
            
        </div>
    )
}

export default Likes;