import React from 'react'

export default function ListOfLikers(props) {
    console.log(props.likers)
    return (
        <ul id= {`likesFor${props.uploadId11}`} class='d-none d-flex flex-column likeList position-absolute' >Liked By:
           {props.likers.map(name =>(
               <il>{name.name}</il>
           ))}
        </ul>
    )
}
{/* <main class= 'container d-flex flex-column align-items-center'>{posts.map(post=>(
    <Post title={post.title} content={post.content} author={post.author} name={post.name} uploadId={post.id}/>
))}</main> */}