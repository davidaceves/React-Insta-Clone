import React from 'react';

import dummyData from '../../dummy-data';
import './CommentSection.css'
import PropTypes from "prop-types";

// MAkE INTO A CLASS
class CommentSection extends React.Component  {

    constructor() {
        super();
        this.state = {
          dummyData: [],
        }
      }

      componentDidMount() {
        this.setState({ dummyData: dummyData })
      }
    
      inputHandler = event => {
        this.setState({ [event.target.text]: event.target.value });
      };
      
      

    render() {
        return (
            <div className="comments">
                <img className="heart-icon" src={ require("./img/heart_icon.png") } alt="icon" />
                <img className="speech-icon" src={ require("./img/speech_icon.png") } alt="icon" />

                {/* <p><span>{ this.state.dummyData } likes</span></p> */}
                
                { this.state.dummyData.comments.map((comment, index) => {
                    console.log(comment)
                    return <p key={index}><span>{ comment.username }</span> { comment.text }</p>
                })}

                <form className="commentBox" onSubmit={ addNewComment }>
                    <input type="text" placeholder="Add a comment..." value={ this.state.dummyData.text } name="comment" onChange={ this.inputHandler }></input>
                    <button type="submit">Post</button>
                </form>
            </div>
        )
        }
}



function addNewComment (event, index) {
    event.preventDefault();

    this.setState(prevState => {
        return  {
            comments: [
                ...prevState.comments,
                {
                    username: 'Coolguy123',
                    text: prevState.comment
                }
            ]
        };
    });
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