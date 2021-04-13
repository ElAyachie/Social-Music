import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './feed.scss';
import './NewComment.scss';

import Comment from './comment';

import profileImg from '../../assets/blankUser.jpg';
import favorite from '../../assets/note.png';
import comment from '../../assets/comment.png';

//import NewComment from './NewComment';

import api from '../../config/api';

function Post(props) {
    const [user] = useState(JSON.parse(localStorage.getItem("user")));
    //const userID = useState(user[0]);
    const [userName] = useState(user[2]);
    const [comments, loadComments] = useState([]);
    const [POSTID, setPostID] = useState(props.postID);

    useEffect(() => {
        loadInCommets();
    // eslint-disable-next-line
    }, []);

    //Make so its just comment for current post
    const loadInCommets = async e => {
        await axios.get(api.base_url + '/comments/get', {
                params: {
                    PostID: props.postID       
                }
            })
            .then(function(response) {
                if(response.data.code === 200) {
                    loadComments(
                        response.data.results
                    );
                    console.log(response.data);
                    console.log("Load Comments Successful");
                }
                else {
                    console.log("Unable to load comments.");
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    function openComment() {
        // Get the comment
        var comment = document.getElementById("new-comment");
    
        // Get the <span> element that closes the comment
        var span = document.getElementsByClassName("close")[1];
    
        comment.style.display = "block";
    
        // When the user clicks on <span> (x), close the comment
        span.onclick = function() {
            //alert("Close");
            comment.style.display = "none";
        }
    
        // When the user clicks anywhere outside of the comment, close it
        window.onclick = function(event) {
            if (event.target === comment) {
                comment.style.display = "none";
            }
        }
    }
    
    function closeComment() {
        // Get the modal
        var modal = document.getElementById("new-comment");
        
        modal.style.display = "none";
    }
    
    return(
        <div>
            <div id={props.postID} className="post">
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
                    <button onClick={openComment} className="commentBtn">
                        <img src={comment} alt="Comment icon" className="icon"/>
                    </button>
                </div>
            </div>
            <div>
                {
                    comments.map((comment, key) =>
                        <Comment key={key} userName={"@" + userName} commentText={comment.Comment} />
                    )
                }
            </div>
            <div>
            </div>
        </div>
    );
}

Post.propTypes = {
    postID: PropTypes.number,
    userName: PropTypes.string,
    postText: PropTypes.string
}

export default Post;