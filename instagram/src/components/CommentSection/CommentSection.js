import React from 'react';

import './CommentSection.css'

function CommentSection (props) {
    return (
        <div>
            { props.posts.map((comment, index) => {
                return <p key={index}><span>{ comment.username }</span> { comment.text }</p>
            })}
        </div>
    )
}

export default CommentSection