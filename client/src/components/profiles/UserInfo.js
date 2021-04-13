import React, {useState} from 'react';
import "./profiles.scss";
import Profile_Pic from "../../assets/profile_1_pic.jfif";
import Edit_Icon from "../../assets/edit-icon.png";
import EditInfo from './EditInfo';

function UserInfo() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    function EditInformation () {
        // Get the modal
        var modal = document.getElementById("edit-info");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    }

    return (
        <div className="user-info">
            <img className="picture" src={Profile_Pic} width="95px" height="95px" alt="Profile pic"></img>
            <div className="name-block">
                <h1 className="name">{user.Name}</h1>
                <button className="edit-btn" onClick={EditInformation}>
                    <img className="edit" src={Edit_Icon}/>
                </button>
            </div>
            <EditInfo />
            <h3 className="bio">{user.Bio}</h3>

        </div>
    )
}

export default UserInfo;