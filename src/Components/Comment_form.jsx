import { useState } from "react";

function CommnetForm(props){
    const {setCommentList,commentList}=props;
    const username='jessjelly';
    const [commentToAdd,setCommentToAdd]=useState()


    function handleCommentAdd(event){
        event.preventDefault()
        
    }
    return(<div className="CommentForm">
        <input id="AddComment" onChange={(event)=>setCommentToAdd(event.target.value)}></input>
        <button onSubmit={handleCommentAdd}>Add Comment</button>
    </div>)
}

export default CommnetForm