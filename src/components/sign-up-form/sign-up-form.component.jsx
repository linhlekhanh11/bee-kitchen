import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-up-form.styles.scss";
import Button from "../button/button.component";


const defaultformFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const matchPassword = password.value === confirmPassword.value;
    const validPassword = password.length >= 6;
    if (!matchPassword) {
      alert("password do not match");
      return;
    } else if (!validPassword) {
      alert("password need to be longer than 6 characters");
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      alert("success create account");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, This email already in use");
        resetFormFields();
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <div className="sign-up-container">
        <h2>Don't have an account </h2>
      <span>Sign Up with Your Email and Password</span>
      <form onSubmit={handleSubmit}>
        {/* <label> Display Name</label> */}
        <FormInput
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
          label="Display Name"
        />

        {/* <label>Email</label> */}
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        {/* <label>Password</label> */}
        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        {/* <label>Confirm Password</label> */}
        <FormInput
          label="Confirm Password"
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit"> Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
