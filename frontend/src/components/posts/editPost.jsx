import React from 'react';


function EditPost (props) {

    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

    const toEdit = () => props.author1 === getStorage() ? "Edit Post" : "Not Allowed to Edit";
    // console.log(getStorage())
    // console.log(props.author1)
    console.log(toEdit())
   
    return(
        <div id ={props.uploadId}>
            <button className = 'editBtn'>Edit post</button>
            <div>{toEdit()}</div>
        </div>
    )
}

export default EditPost;