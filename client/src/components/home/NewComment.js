import React, { /*useEffect,*/ useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './Newcomment.scss';

import api from '../../config/api';

function closeComment() {
    // Get the modal
    var modal = document.getElementById("new-comment");
    
    modal.style.display = "none";
}

function NewComment() {
    const [commentText, setCommentText] = useState('');

//    useEffect({
//    }, []);

    const handleAddNewComment = async e => {
        e.preventDefault();
        const newComment = {
            commentText
        }
        closeComment();
        await axios.post(api.base_url + "/comments/insert", newcomment)
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
                        <input
                        className="form-control"
                        type="text"
                        autoComplete="on"
                        id="commentText"
                        required
                        name="commentText"
                        placeholder="What's on your mind?"
                        value={commentText}
                        onChange={(e) => {
                            setCommentText(e.target.value);
                        }}
                        />

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
    commentContent: PropTypes.string
}

export default NewComment;