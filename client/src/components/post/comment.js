import React from 'react';
import "./post.scss";
import Profile_1 from "../../assets/profile_1_pic.jfif"


function Comment() {

    return (
        <div className="comment-section">
            <div className="individual-comment">
                <img className="picture" src={Profile_1} width="65px" height="65px"></img>
                <h1 className="poster">Matthew Barnes</h1>
                <h4 className="time-posted">Posted at 1:05 PM 3/24</h4>
                <h3 className="post">Maecenas sodales dictum iaculis. Cras leo magna,
                lacinia id malesuada eu, feugiat vel eros. Cras non
                mi tellus. Suspendisse semper dolor dui, quis
                fringilla diam viverra quis. 
                </h3> 
            </div>
        </div>
    )
}

export default Comment;