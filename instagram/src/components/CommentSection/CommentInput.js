import React from 'react';

function CommentInput(props) {
    return (
        <div>
        <form className="commentBox" onSubmit={ props.addNewComment }>
                <input type="text" placeholder="Add a comment..." value={ props.comment } name="comment" onChange={ props.inputHandler }></input>
                <button type="submit">Post</button>
        </form>
        </div>
    )
}

export default CommentInput;