import React, { Component } from 'react';

import dummyData from '../../dummy-data';
import './CommentSection.css'
import Comment from './Comment'
import PropTypes from "prop-types";
import CommentInput from './CommentInput';

class CommentSection extends Component  {

    constructor(props) {
        super(props);
        this.state = {
          likes: props.likes,
          comments: props.comments,
          comment: ''
        }
      }

      componentDidMount() {
        this.setState({ dummyData: dummyData })
      }
    
      inputHandler = event => {
        this.setState({ comment: event.target.value });
      };

      incrementHeart = () => {
          this.setState(prevState => {
              return {
                  likes: prevState.likes + 1
              }
          })
      }

      addNewComment = event => {
        event.preventDefault();
    
        this.setState(prevState => {
            return  {
                comments: [
                    ...prevState.comments,
                    {
                        username: 'DAceves',
                        text: prevState.comment
                    }
                ] , comment: ''
            };
        });
    }

    render() {
        return (
            <div>
                  
                 <Comment likes={ this.state.likes } posts={ this.state.comments} addHeart={ this.incrementHeart }/>
                 
                 <CommentInput addNewComment={ this.addNewComment } inputHandler={ this.inputHandler } comments={this.state.comment} />
            </div>
        )
        }
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