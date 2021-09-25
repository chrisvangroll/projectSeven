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
            // console.log(res.data.length)
            
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
        }catch(err){
            console.log(err);
        }
        getLikes();
    }

    return(
        <div >
            <button onClick={sendLike}>Like</button>
           <div>Number of likes = {likes}</div>
        </div>
    )
}

export default Likes;