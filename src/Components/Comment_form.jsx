import { useState } from "react";

function CommnetForm(props){
    const {setCommentList,commentList}=props;
    const username='jessjelly';
    const [commentToAdd,setCommentToAdd]=useState()


    function handleCommentAdd(event){
        event.preventDefault();
        console.log(event)
        setCommentToAdd({username,body:event.target.value})
        console.log(commentToAdd)
    }

    return(<div className="CommentForm">
        <input id="AddComment" onChange={(event)=>setCommentToAdd(event.target.value)}></input>
        <button onSubmit={handleCommentAdd}>Add Comment</button>
    </div>)
}

export default CommnetForm