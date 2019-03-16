import React from 'react';

import './PostContainer.css';
import PropTypes from "prop-types";
import CommentSection from '../CommentSection/CommentSection';

function PostContainer (props) {
    return (
        <div>
            {props.data.map(entry => {
               return <div className="postContainer">
                        <header className="igHeader">
                            <img src={entry.thumbnailUrl} alt="thumbnail" />
                            {entry.username}
                        </header>
                        <img src={entry.imageUrl} alt="img"/>

                        <CommentSection posts={ props.data }/>
                     </div>
            })}

            
            
        </div>
    )
}

export default PostContainer;