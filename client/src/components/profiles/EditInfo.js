import React, { /*useEffect,*/ useState } from 'react';
import axios from 'axios';
import './profiles.scss';

import api from '../../config/api';

function closeEditor() {
    // Get the modal
    var editBox = document.getElementById("edit-info");
    
    editBox.style.display = "none";
}

function EditInfo() {
    const [user] = useState(JSON.parse(localStorage.getItem("user")));
    const [nameText, setNameText] = useState(user.Name);
    const [bioText, setBioText] = useState(user.Bio);
    const userID = user.UserID;


    const handleInformationChange = async e => {
        e.preventDefault();
        if (user.Bio !== bioText || user.Name !== nameText) {
        const Info = {
            userID: userID,
            newName: nameText,
            newBio: bioText
        }
        closeEditor();
        await axios.patch(api.base_url + "/users/update_info/update", Info)
            .then(function(response) {
                console.log(response.data);
                console.log("Profile change successful");
                closeEditor();
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    }
    return(
        <div id="edit-info" className="edit-info">
            <div className="edit-info-content">
                <div className="close-space">
                    <span className="close-edit">&times;</span>
                </div>
                <div className="info-space">
                    <form onSubmit={handleInformationChange}>
                        <input
                        className="form-control"
                        type="text"
                        autoComplete="on"
                        id="name"
                        required
                        name="name"
                        placeholder={nameText}
                        value={nameText}
                        onChange={(e) => {
                            setNameText(e.target.value);
                        }}
                        />
                        <textarea
                        className="form-control"
                        type="text"
                        autoComplete="on"
                        id="postText"
                        required
                        name="postText"
                        placeholder={user.Bio}
                        rows="5"
                        value={user.Bio}
                        onChange={(e) => {
                            setBioText(e.target.value);
                        }}
                        />
                        <button type="submit" className="edit-info-button">
                            Save Changes
                        </button>
            
                    </form>
                </div>
            </div>
        </div>
    );
}
export default EditInfo;