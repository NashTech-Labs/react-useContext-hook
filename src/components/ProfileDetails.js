import React, { useContext } from "react";
import { UserContext } from "./App";
import '../styles/ProfileDetails.css';

// ProfileDetails component displays user profile details
const ProfileDetails = () => {
    // Accessing user context using useContext hook
    const { userid, name, address, email, dob } = useContext(UserContext);

    return (
        <div className="profile-details">
            <h3>ProfileDetails</h3>
            <p><b>id: {userid}</b></p>
            <p><b>name: {name}</b></p>
            <p><b>Address: {address}</b></p>
            <p><b>email: {email}</b></p>
            <p><b>DOB: {dob}</b></p>
        </div>
    );
};

export default ProfileDetails;
