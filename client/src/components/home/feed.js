import React from 'react';
import './feed.scss';

import Post from './post';

import postData from './postData.js';

function Feed() {

    return(
        <div className="feed">
            <Post userName={postData[0].userName} postText={postData[0].postText} />
            <Post userName={postData[1].userName} postText={postData[1].postText} />
            <Post userName={postData[2].userName} postText={postData[2].postText} />
            <Post userName={postData[3].userName} postText={postData[3].postText} />
            <Post userName={postData[4].userName} postText={postData[4].postText} />
        </div>
    );
}

export default Feed;