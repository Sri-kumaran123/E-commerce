import { useState, useEffect } from "react";
import userInfoHook from "../hooks/userInfoHook";

export default function UserProfile() {
  const [userinfo, addPhone] = userInfoHook();
  const [phone, setPhone] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [showUpdateButton, setShowUpdateButton] = useState(false);

  useEffect(() => {
    if (userinfo?.info?.phone) {
      setPhone(userinfo.info.phone); // Set phone once userinfo is loaded
    }
  }, [userinfo]);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setShowUpdateButton(true);
  };

  const enableEdit = () => {
    setIsEditable(true);
  };

  const handleUpdate = () => {
    console.log("Updated Phone:", phone);
    addPhone(userinfo?.info?._id, phone);
    setIsEditable(false);
    setShowUpdateButton(false);
  };

  if (!userinfo || !userinfo?.info?.user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h2 className="profile-heading">User Profile</h2>

      <div className="profile-field phone-field">
        <label>Phone:</label>
        <div className="input-wrapper">
          <input
            type="text"
            value={phone}
            onChange={handlePhoneChange}
            disabled={!isEditable}
            placeholder="Enter phone number"
          />
          {!isEditable && (
            <span className="edit-icon" onClick={enableEdit} title="Edit Phone">
              ✎
            </span>
          )}
        </div>
        {showUpdateButton && (
          <button className="update-button" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>

      <div className="profile-field">
        <label>Email:</label>
        <span>{userinfo.info.user?.email}</span>
      </div>

      <div className="profile-field">
        <label>Username:</label>
        <span>{userinfo.info.user?.userName}</span>
      </div>
    </div>
  );
}
