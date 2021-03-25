import React from 'react';

import profileImg from '../../assets/blankUser.jpg';
import favorite from '../../assets/note.png';
import comment from '../../assets/comment.png';

function Post(props) {
    return(
        <div className="post">
            <img src={profileImg} alt="User Profile Image"/>
            <h4 className="user">John A Smith</h4>
            <br />
            <p>Post data</p>
            <br />
            <img src={favorite} alt="Favorite icon" />
            <img src={comment} alt="Comment icon" />
        </div>
    );
}

export default Post;