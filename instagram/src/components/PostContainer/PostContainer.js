import React from 'react';

import './PostContainer.css';
import PropTypes from "prop-types";
import CommentSection from '../CommentSection/CommentSection';

function PostContainer (props) {
    return (
        <div>
            {props.data.map((entry, index) => {
               return <div className="postContainer" key={ index }>
                        <header className="igHeader">
                            <img src={ entry.thumbnailUrl } alt="thumbnail" />
                            { entry.username }
                        </header>
                        <img src={ entry.imageUrl } alt="img"/>

                        <CommentSection posts={ entry.comments }/>
                     </div>
            })}
        </div>
    )
}

export default PostContainer;