import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { makeUnauthenticateedPOSTRequest } from "../utils/serverHelpers";

const SignupComponent = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    const emailRegex = /^[a-z][a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  const signUp = async () => {
    // Reset error messages
    setEmailError("");
    setPasswordError("");

    // Check if email matches confirm email
    if (email !== confirmEmail) {
      setEmailError("Email and confirm email fields must match.");
      return;
    }

    // Validate email format
    if (!isEmailValid(email)) {
      setEmailError(
        "Invalid email. It should start with a lowercase letter and follow the correct format."
      );
      return;
    }

    // Validate password length
    if (!isPasswordValid(password)) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    }

    // If all validations pass, proceed with signup
    const data = { email, password, username, firstName, lastName };
    const response = await makeUnauthenticateedPOSTRequest(
      "/auth/register",
      data
    );
    if (response && !response.err) {
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });
      alert("Registration successful");
      navigate("/home");
    } else {
      alert("Registration unsuccessful");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-5 border-b border-solid border-gray-275 w-full flex justify-center">
        <Icon icon="logos:spotify" width="150" />
      </div>
      <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
        {/* We will have 2 inputs email and password and we will have sign up instaed button*/}
        <div className="font-bold mb-6 text-2xl">
          Sign up for free to start listening.
        </div>
        <TextInput
          label="Email address"
          placeholder="Enter your email"
          className="my-6"
          value={email}
          setValue={setEmail}
        />
        <TextInput
          label="Confirm email address"
          placeholder="Enter your email again"
          className="mb-6"
          value={confirmEmail}
          setValue={setConfirmEmail}
        />
        {/* Display email error */}
        {emailError && <p className="text-red-500">{emailError}</p>}
        <TextInput
          label="Username"
          placeholder="Enter your username"
          className="mb-6"
          value={username}
          setValue={setUsername}
        />
        <PasswordInput
          label="Create password"
          placeholder="Enter a strong password"
          value={password}
          setValue={setPassword}
        />
        {/* Display password error */}
        {passwordError && <p className="text-red-500">{passwordError}</p>}
        <div className="w-full flex justify-between items-center space-x-8">
          <TextInput
            label="First name"
            placeholder="Enter your first name"
            className="my-6"
            value={firstName}
            setValue={setFirstname}
          />
          <TextInput
            label="Last name"
            placeholder="Enter your last name"
            className="my-6"
            value={lastName}
            setValue={setLastname}
          />
        </div>
        <div className="w-full flex item-center justify-center my-8">
          <button
            className="bg-button-green font-semibold p-3 px-10 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              signUp();
            }}
          >
            SIGN UP
          </button>
        </div>
        <div className="border border-solid border-gray-275 w-full"></div>
        <div className="my-6 font-semibold text-lg">
          Already have an account
        </div>
        <div className="border boder-gray-500 text-gray-500 font-bold w-full flex items-center justify-center py-4 rounded-full">
          <Link to="/login">LOG IN INSTEAD</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
