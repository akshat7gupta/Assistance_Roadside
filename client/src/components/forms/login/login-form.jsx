import "./login-form.scss";

import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import FormHeader from "../form-header/form-header";
import AdditionalLinks from "../additional-links";
import userService from "../../../services/user-service";
import { AuthContext } from "../../../ContextWrapper";

const additionalLinks = [
  {
    link: "/register",
    text: "NEW HERE?",
  },
];

const LoginForm = ({ history }) => {
  const { setAuth } = useContext(AuthContext);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  function handleFormSubmit(e) {
    e.preventDefault();

    const email = state.email;
    const password = state.password;
    const user = { email, password };

    userService.login(user).then((res) => {
      setAuth(res._id);
      localStorage.setItem("auth", res._id);
      history.push("/home");
    });
  }

  function handleChange(evt) {
    const value = evt.target.value;

    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  return (
    <div className="login-form">
      <FormHeader title="Login" subtitle="Send a request for road assistance" />

      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="EMAIL"
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            placeholder="PASSWORD"
          />
        </label>
        <input type="submit" value="LOGIN" />
        <AdditionalLinks links={additionalLinks} />
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
