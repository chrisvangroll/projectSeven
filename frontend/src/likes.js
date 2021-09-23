import React from 'react';
import Axios from 'axios';

function Likes (props) {
    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }
    console.log(getStorage())
    console.log(props.uploadId4)
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
    }

    return(
        <div >
            <button onClick={sendLike}>Like</button>
           <div>Number of likes = 0</div>
        </div>
    )
}

export default Likes;