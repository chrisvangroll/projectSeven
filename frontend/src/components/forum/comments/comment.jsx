import React, {useState, useRef, useLayoutEffect} from 'react';
import CommentLikes from './commentLikes';
import Axios from 'axios';
import DeleteComment from './deleteComment';

function Comment (props) {

   
    // const getElementSize = () =>{
    //     let box = document.getElementById(`${props.commentId}comment`)
    //     setCommentWidth(box.clientHeight);
    //     setCommentHeight(box.clientHeight);
    // }

    // const boxStyles = {
    //     width: width,
    //     height: height
    // }
 
    

    const targetRef = useRef();
  
    const [dimensions, setDimensions] = useState({width: 0, height: 0});
    // const [width, setCommentWidth] = useState();
    // const [height, setCommentHeight] = useState();
    const [commentEdit, setCommentEdit] = useState(props.comment);
   // const [commentEditInput, setCommentEditInput] = useState('');
    //console.log(dimensions)
    useLayoutEffect(() => {
        
          setDimensions({
            width: targetRef.current.offsetWidth,
            height: targetRef.current.offsetHeight
          });
        
      }, []);

    const logCommentEdit = (e) =>{
        setCommentEdit(e.target.value);
        //setCommentEditInput(e.target.value);
    }

    //console.log(commentEdit)

    function getStorage(){
        let userId = localStorage.getItem('id');
        userId = JSON.parse(userId);
        return userId;
    }

    const updateComment = async ()=>{
        
        try{
            const res = await Axios.put('http://localhost:3001/comment/', {
                id: props.commentId,
                comment: commentEdit
            })
            console.log(res);
            console.log('updated successfully');
            props.getComments();
            finalToggle();
        }catch(err){
            console.log(err)
        }
      };

   const toEdit = () => props.commenter === getStorage() ? "" : "d-none";
   
   const toggleClass = () =>{
    document.getElementById(`edit${props.commentId}`).classList.toggle('d-none');
    setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });
      console.log(dimensions)
}

const toggleEditBox = () =>{
    document.getElementById(`edit${props.commentId}`).classList.toggle('d-none')
    document.getElementById(`editBox${props.commentId}`).classList.toggle('d-none')
    document.getElementById(`editSubmit${props.commentId}`).classList.toggle('d-none')
    document.getElementById(`edit${props.commentId}btn`).classList.toggle('d-none')
   document.getElementById(`commentLikes${props.commentId}`).classList.toggle('d-none')
   
}
const finalToggle = () =>{
    document.getElementById(`editSubmit${props.commentId}`).classList.toggle('d-none')
    document.getElementById(`editBox${props.commentId}`).classList.toggle('d-none')
}
 

    return(
        
        <div class= 'd-flex flex-row commentContainer'>
            <div ref={targetRef} id={`${props.commentId}comment`}  class='comment position-relative'>{props.comment}</div>
            <CommentLikes  commentId2 = {props.commentId}/>
           
            <div id={`edit${props.commentId}btn`}class='editCommentBtn'  onClick = {toggleClass} >
                <div className={toEdit()} >
                    <i class="fas fa-edit"></i>
                    <div id={`edit${props.commentId}`} class='d-none mt-1 position-absolute deleteAndEditContainer'>
                        <DeleteComment getComments1={props.getComments} commentId4={props.commentId}/>
                        <button class='updateDeleteComment' onClick={toggleEditBox}>Edit Comment</button>
                    </div>
                </div>
            </div>
            <textarea type="text" style={dimensions} onChange={logCommentEdit} id={`editBox${props.commentId}`} value={commentEdit} class='position-absolute d-none'/>
            <div id={`editSubmit${props.commentId}`} class='d-none'>
                <button onClick={updateComment} >Submit Edit</button>
                <button onClick={finalToggle}>cancel</button>
            </div>
            {/* <div>{dimensions.width}</div> */}

        </div>
       
    )
}

export default Comment;