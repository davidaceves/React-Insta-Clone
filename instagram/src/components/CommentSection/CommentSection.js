import React from 'react';

import './CommentSection.css'
import PropTypes from "prop-types";

function CommentSection (props) {
    return (
        <div className="comments">
            <img className="heart-icon" src={ require("./img/heart_icon.png") } alt="icon" />
            <img className="speech-icon" src={ require("./img/speech_icon.png") } alt="icon" />

            <p><span>{ props.likes } likes</span></p>
            
            { props.posts.map((comment, index) => {
                return <p key={index}><span>{ comment.username }</span> { comment.text }</p>
            })}

            <form className="commentBox" onSubmit={ addNewComment }>
                <input type="text" placeholder="Add a comment..." value={ props.posts.text } name="comment" onChange={ props.inputHandler }></input>
            </form>
        </div>
    )
}



function addNewComment (event, index) {
    event.preventDefault();



}

CommentSection.propTypes = {
    likes: PropTypes.number,

    posts: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        })
    )
}

export default CommentSection