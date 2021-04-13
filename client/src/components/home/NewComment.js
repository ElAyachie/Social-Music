import React, { /*useEffect,*/ useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './NewComment.scss';

import api from '../../config/api';

function closeComment() {
    // Get the modal
    var modal = document.getElementById("new-comment");
    
    modal.style.display = "none";
}

function NewComment(props) {
    const [CommentText, setCommentText] = useState('');

    const handleAddNewComment = async e => {
        e.preventDefault();
        const newComment = {
            postID: props.postID,
            comment: CommentText,
            userID: 4
        }
        await axios.post(api.base_url + "/comments/insert", newComment)
            .then(function(response) {
                console.log(response.data);
                console.log("New comment Successful");
                closeComment();
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    return(
        <div id="new-comment" className="new-comment">
            <div className="new-comment-content">
                <div className="close-space">
                    <span className="close">&times;</span>
                </div>
                <div className="comment-space">
                    <form onSubmit={handleAddNewComment}>
                        <textarea
                        className="form-control"
                        type="text"
                        autoComplete="on"
                        id="commentText"
                        required
                        name="commentText"
                        placeholder="What's on your mind?"
                        rows="5"
                        value={CommentText}
                        onChange={(e) => {
                            setCommentText(e.target.value);
                        }}
                        />
                        <p>{props.postID}</p>
                        <button type="submit" className="new-comment-button">
                            Add New comment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

NewComment.propTypes = {
    postID: PropTypes.number,
    userID: PropTypes.number,
    username: PropTypes.string,
    commentContent: PropTypes.string
}

export default NewComment;