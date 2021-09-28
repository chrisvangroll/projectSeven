import React, {useState} from 'react'

export default function UpdateComment(props) {

    // const [comment, setComment] = useState(props.comment2);
    
    // const setCommentState = (e) =>{
    //     setComment(e.target.value);
    //     console.log(comment)
    // }

    // const updatePost = async ()=>{
        
    //     try{
    //         const res = await Axios.put('http://localhost:3001/forum/' + post[0].id, formData)
    //         console.log(res);
    //         console.log('updated successfully');
    //         window.location = 'http://localhost:3000/forum';
    //     }catch(err){
    //         console.log(err)
    //     }
    //   };
    return (
        <div>
            <button>update</button>
            <input type="text" placeholder='existing text'/>
        </div>
    )
}
