import React from "react";
import '../styles/ProfileDetails.css';

// ProfileActions component renders actions related to user profile
const ProfileActions = () => {
    return (
        <div className="profile-details">
            <h3>Profile Actions</h3>
            <button style={{ margin: "10px" }}>Edit Profile</button>
            <button style={{ margin: "10px" }}>Change Password</button>
        </div>
    );
};

export default ProfileActions;
