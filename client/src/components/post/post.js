import React from 'react';
import "./post.scss";
import Comment from "./comment"
import Profile_1 from "../../assets/profile_1_pic.jfif"
import Upvote_Icon from "../../assets/upvote.svg"
import Comment_Icon from "../../assets/comment.svg"


function Post() {

    return (
        <div className="post-section">
            <img className="picture" src={Profile_1} width="65px" height="65px" alt="Profile Pic"></img>
            <h1 className="poster">John Smith</h1>
            <h4 className="time-posted">Posted at 1:05 PM 3/24</h4>
            <h3 className="post">Quisque imperdiet tellus eget ex tempor,
                eget feugiat metus vestibulum. Curabitur sapien
                quam, sollicitudin sed auctor vel, ornare eu
                mauris. Donec malesuada placerat scelerisque.
            </h3> 
            <img className="upvote-icon" src={Upvote_Icon} width="40px" height="40px" alt="Upvote"></img>
            <img className="comment-icon" src={Comment_Icon} width="40px" height="40px" alt="Comment"></img>
            <Comment />
            <Comment />
        </div>
    )
}

export default Post;
