import React, {useState} from 'react';
import "./profiles.scss";

import EditInfo from './EditInfo';

import Profile_Pic from "../../assets/profile_1_pic.jfif";
import Edit_Icon from "../../assets/edit-icon.png";

function UserInfo() {
    const [user] = useState(JSON.parse(localStorage.getItem("user")));

    function EditInformation () {
        // Get the editBox
        var editBox = document.getElementById("edit-info");

        // Get the <span> element that closes the editBox
        var span = document.getElementsByClassName("close-edit")[0];

        editBox.style.display = "block";

        // When the user clicks on <span> (x), close the editBox
        span.onclick = function() {
            editBox.style.display = "none";
        }
    }

    return (
        <div className="user-info">
            <img className="picture" src={Profile_Pic} width="95px" height="95px" alt="Profile pic" />
            <div className="name-block">
                <h1 className="name">{user.Name}</h1>
                <button className="edit-btn" onClick={EditInformation}>
                    <img className="edit" src={Edit_Icon} alt="Edit icon" />
                </button>
            </div>
            <EditInfo />
            <h3 className="bio">{user.Bio}</h3>

        </div>
    )
}

export default UserInfo;