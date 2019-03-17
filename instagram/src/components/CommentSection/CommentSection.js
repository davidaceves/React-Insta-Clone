import React from 'react';

import './CommentSection.css'

function CommentSection (props) {
    return (
        <div className="comments">
            <img className="heart-icon" src={ require("./img/heart_icon.png") } alt="icon" />
            <img className="speech-icon" src={ require("./img/speech_icon.png") } alt="icon" />

            <p><span>{ props.likes } likes</span></p>
            
            { props.posts.map((comment, index) => {
                return <p key={index}><span>{ comment.username }</span> { comment.text }</p>
            })}
        </div>
    )
}

export default CommentSection