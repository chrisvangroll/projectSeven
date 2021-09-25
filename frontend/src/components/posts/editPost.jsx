import React, {useState} from 'react';
import {Link } from 'react-router-dom';

function EditPost (props) {

    const [uploadId, setId] = useState(props.uploadId5);

    console.log(uploadId)

    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

    const toEdit = () => props.author1 === getStorage() ? "" : "editBtn";
    //console.log(props.uploadId5)
   
    return(
        <div id ={props.uploadId}>
        <Link  className = {toEdit()} to={{pathname: "/modify", state: {uploadId: props.uploadId5 } }}>Edit post</Link>
            <div>{toEdit()}</div>
        </div>
    )
}

export default EditPost;