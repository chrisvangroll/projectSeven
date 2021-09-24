import React from 'react';
import {Link } from 'react-router-dom';

function EditPost (props) {

    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

    const toEdit = () => props.author1 === getStorage() ? "" : "editBtn";


   
    return(
        <div id ={props.uploadId}>
            <Link className = {toEdit()} to="/modify">Edit post</Link>
            <div>{toEdit()}</div>
        </div>
    )
}

export default EditPost;