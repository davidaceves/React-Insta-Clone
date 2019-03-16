import React from 'react';

import './CommentSection.css'

function CommentSection (props) {
    return (
        <div>
            { props.posts.map(comment => {
                return comment.comments.map((post) => {
                    return <p className="comment" key= { post }> <span>{ post.username }</span> { post.text } </p>
                }) 
            })}
        </div>
    )
}

export default CommentSection