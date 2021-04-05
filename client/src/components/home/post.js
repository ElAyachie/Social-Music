import React from 'react';
import PropTypes from 'prop-types';
import './feed.scss';

import Comment from './comment';

import profileImg from '../../assets/blankUser.jpg';
import favorite from '../../assets/note.png';
import comment from '../../assets/comment.png';

import commentData from './commentData.js';

function Post(props) {

    const handleComment = async e => {
        
    }

    return(
        <div>
            <div className="post">
                <div className="userInfo">
                    <img src={profileImg} alt="User Profile" className="profileImg" />
                    <br />
                    <h4 className="user">{props.userName}</h4>
                </div>
                <br />
                <p className="postData">
                    {props.postText}
                </p>
                <br />
                <div className="icons">
                    <img src={favorite} alt="Favorite icon" className="icon" />
                    <button onClick={handleComment} className="commentBtn">
                        <img src={comment} alt="Comment icon" className="icon"/>
                    </button>
                </div>
            </div>
            <div>
                <Comment userName={commentData[0].userName} commentText={commentData[0].commentText} />
            </div>
        </div>
    );
}

Post.propTypes = {
    userName: PropTypes.string,
    postText: PropTypes.string
}

export default Post;