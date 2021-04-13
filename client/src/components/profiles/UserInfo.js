import React, {useState} from 'react';
import "./profiles.scss";
import Profile_Pic from "../../assets/profile_1_pic.jfif";
import { Button } from "react-bootstrap";
import Edit_Icon from "../../assets/edit-icon.png";

function UserInfo() {
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("user")));

    return (
        <div className="user-info">
            <img className="picture" src={Profile_Pic} width="95px" height="95px" alt="Profile pic"></img>
            {/* <h1 className="name">{userInfo.Name}</h1> */}
            <button><img className="edit" src={Edit_Icon}/></button>
            <h3 className="bio">{userInfo.Bio}</h3>
            <button><img className="edit" src={Edit_Icon}/></button>
        </div>
    )
}

export default UserInfo;