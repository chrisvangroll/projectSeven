import React, {useState} from 'react';
import {Link } from 'react-router-dom';

function EditPost (props) {

    const [uploadId, setId] = useState(props.uploadId5);


    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

    const toEdit = () => props.author1 === getStorage() ? "" : "editBtn";
    //console.log(props.uploadId5)
   
    return(
        <div class='position-absolute postEditIcon' id ={props.uploadId}>
            <Link  className = {toEdit()} to={{pathname: "/modify", state: {uploadId: props.uploadId5 } }}><i class="fas fa-edit"></i></Link>
        </div>
    )
}

export default EditPost;