import React from 'react';

function CommentSection (props) {
    return (
        <div>
            { props.posts.map(comment => {
            return <p>{ comment.username }</p>  
            })}
            
        </div>
    )
}

export default CommentSection