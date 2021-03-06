import React from 'react';

import './CommentSection.css'
import PropTypes from "prop-types";

function Comment (props) {
    return (
        <div className="comments">
            <img onClick={ props.addHeart } className="heart-icon" src={ require("./img/heart_icon.png") } alt="icon" />
            <img className="speech-icon" src={ require("./img/speech_icon.png") } alt="icon" />

            <p><span>{ props.likes } likes</span></p>
            
            { props.posts.map((comment, index) => {
                return <p key={index}><span>{ comment.username }</span> { comment.text }</p>
            })}
        </div>
    )
}

Comment.propTypes = {
    likes: PropTypes.number,

    posts: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        })
    )
}

export default Comment;