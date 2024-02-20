import React from "react";
import ProfileDetails from "./ProfileDetails";
import ProfileActions from "./ProfileActions";

// Profile component renders profile details and actions
const Profile = () => {
    return (
        <div>
            <ProfileDetails />
            <ProfileActions />
        </div>
    );
};

export default Profile;
