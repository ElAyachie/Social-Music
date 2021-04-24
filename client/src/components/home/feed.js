import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './feed.scss';

import Post from './post';
import NewComment from './NewComment';

import api from '../../config/api';

function Feed() {
    const [posts, loadPosts] = useState([]);
    const [user] = useState(JSON.parse(localStorage.getItem("user")));
    //const userID = useState(user[0]);
    const [userName] = useState(user.Username);

    useEffect(() => {
        loadInPosts();
    }, [loadPosts]);

    const loadInPosts = async e => {
        await axios.get(api.base_url + '/posts/get')
            .then(function(response) {
                if(response.data.code === 200) {
                    loadPosts(
                        response.data.results
                    );
                    console.log(response.data);
                    console.log("Load Posts Successful");
                }
                else {
                    console.log("Unable to load posts.");
                    //alert("Unable to load posts.");
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    return(
        <div className="feed">
            {
                posts.map((post, key) =>
                    <Post key={key} postID={post.PostID} userName={"@" + userName} postText={post.PostText} />
                )
            }
            {
                posts.map((post, key) =>
                    <NewComment postID={post.PostID} />
                )
            }
        </div>
    );
}

export default Feed;