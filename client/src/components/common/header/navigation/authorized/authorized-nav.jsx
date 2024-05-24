import React, { useContext, useEffect, useState } from "react";
import ListItem from "../list-item/list-item";
import userService from "../../../../../services/user-service";
import { AuthContext } from "../../../../../ContextWrapper";

const AuthorizedNav = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);

  function logout(e) {
    e.preventDefault();
    userService.logout();
    setAuth("");
  }

  useEffect(() => {
    userService.getUser(auth).then((res) => {
      setIsAdmin(res.isAdmin);
    });
  }, [auth]); // Include 'auth' in the dependency array

  return (
    <ul>
      <ListItem link="/home" text="Home" />
      <ListItem link="/about" text="About" />
      <ListItem link="/services" text="Services" />
      <ListItem link="/profile" text="Profile" />
      {isAdmin 
        ? <ListItem link="/administration" text="Administration" />
        : <ListItem link="/request" text="New Request" />
      }
      <li className="list-item">
        <a href="#" onClick={logout}>
          LOGOUT
        </a>
      </li>
    </ul>
  );
};

export default AuthorizedNav;
