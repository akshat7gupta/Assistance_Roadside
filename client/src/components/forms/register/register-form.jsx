import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormHeader from "../form-header/form-header";
import TermsAndConditions from "../terms-and-conditions";
import userService from "../../../services/user-service";
import "./register-form.scss";

const RegisterForm = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      phone,
    };
    userService.register(user);
    history.push("/login");
  }

  return (
    <div className="register-form-wrapper">
      <FormHeader
        title="Registration"
        subtitle="Send a request for road assistance"
      />

      <form onSubmit={handleFormSubmit} className="register-form">
        <div className="register-form-content">
          <div className="register-form-labels-wrapper">
            <label>
              <input
                type="text"
                name="name"
                onChange={(ev) => setName(ev.target.value)}
                value={name}
                placeholder="Name"
              />
            </label>
            <label className="register-form-labels-wrapper">
              <input
                onChange={(ev) => setEmail(ev.target.value)}
                value={email}
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                name="phone"
                onChange={(ev) => setPhone(ev.target.value)}
                value={phone}
                placeholder="Phone"
              />
            </label>
            <label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                placeholder="Password"
              />
            </label>
          </div>
        </div>

        <TermsAndConditions />
        <input
          type="submit"
          value="REGISTER"
          className="register-form-submit-btn"
        />
        <label className="additional-links">
          <span>
            <Link to="/login">ALREADY HAVE AN ACCOUNT?</Link>
          </span>
        </label>
      </form>
    </div>
  );
};

export default RegisterForm;
