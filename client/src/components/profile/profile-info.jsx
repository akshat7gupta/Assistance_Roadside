import React, { useEffect, useContext, useState } from "react";
import EditUserModal from "components/modals/edit-user-modal";
import { AuthContext } from "../../ContextWrapper";
import userService from "../../services/user-service";

const ProfileInfo = ({ updateProfile }) => {
  const { auth } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    userService.getUser(auth).then((res) => {
      const { name, email, phone } = res;
      setUserData({
        name: name,
        email: email,
        phone: phone,
      });
    });
  }, [auth]);

  return (
    <>
      <div className="profile-info-wrapper">
        <strong>Name:</strong>
        <span>{userData.name}</span>
      </div>
      <div className="profile-info-wrapper">
        <strong>Email:</strong>
        <span>{userData.email}</span>
      </div>
      <div className="profile-info-wrapper">
        <strong>Phone:</strong>
        <span>{userData.phone}</span>
      </div>
      <EditUserModal updateProfile={updateProfile} user={userData} />
    </>
  );
};

export default ProfileInfo;
