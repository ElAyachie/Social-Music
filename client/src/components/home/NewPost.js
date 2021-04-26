import React, { /*useEffect,*/ useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './NewPost.scss';

import api from '../../config/api';

function closePost() {
    // Get the modal
    var modal = document.getElementById("new-post");
    
    modal.style.display = "none";
}

// Creating a new post function, displays to the user on the page and saves the data to the database.
function NewPost() {
    const [PostText, setPostText] = useState('');

    const handleAddNewPost = async e => {
        e.preventDefault();
        const newPost = {
            postText: PostText
        }
        closePost();
        await axios.post(api.base_url + "/posts/insert", newPost)
            .then(function(response) {
                console.log(response.data);
                console.log("New Post Successful");
                closePost();
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    return(
        <div id="new-post" className="new-post">
            <div className="new-post-content">
                <div className="close-space">
                    <span className="close">&times;</span>
                </div>
                <div className="post-space">
                    <form onSubmit={handleAddNewPost}>
                        <textarea
                        className="form-control"
                        type="text"
                        autoComplete="on"
                        id="postText"
                        required
                        name="postText"
                        placeholder="What's on your mind?"
                        rows="5"
                        value={PostText}
                        onChange={(e) => {
                            setPostText(e.target.value);
                        }}
                        />

                        <button type="submit" className="new-post-button">
                            Add New Post
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

NewPost.propTypes = {
    userID: PropTypes.number,
    username: PropTypes.string,
    postContent: PropTypes.string
}

export default NewPost;