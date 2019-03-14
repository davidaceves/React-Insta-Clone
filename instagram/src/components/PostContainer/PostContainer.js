import React from 'react';

import './PostContainer.css';
import PropTypes from "prop-types";

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
                     </div>
            })}
            
        </div>
    )
}

export default PostContainer;