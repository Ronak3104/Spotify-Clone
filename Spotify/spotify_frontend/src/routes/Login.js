import { useState } from "react";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticateedPOSTRequest } from "../utils/serverHelpers";
import { useCookies } from "react-cookie";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    const emailRegex = /^[a-z][a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  const login = async () => {
    // Reset error messages
    setEmailError("");
    setPasswordError("");

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

    const data = { email, password };
    const response = await makeUnauthenticateedPOSTRequest("/auth/login", data);
    if (response && !response.err) {
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });
      alert("Login successful");
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
        <div className="font-bold mb-4">To continue, log in to Spotify</div>
        <TextInput
          label="Email address or username"
          placeholder="Email address or username"
          className="my-6"
          value={email}
          setValue={setEmail}
        />
        {/* Display email error */}
        {emailError && <p className="text-red-500">{emailError}</p>}
        <PasswordInput
          label="Password"
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />
        {/* Display password error */}
        {passwordError && <p className="text-red-500">{passwordError}</p>}
        <div className="w-full flex item-center justify-end my-8">
          <button
            className="bg-button-green font-semibold p-3 px-10 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              login();
            }}
          >
            LOG IN
          </button>
        </div>
        <div className="border border-solid border-gray-275 w-full"></div>
        <div className="my-6 font-semibold text-lg">Don't have an account?</div>
        <div className="border boder-gray-500 text-gray-500 font-bold w-full flex items-center justify-center py-4 rounded-full">
          <Link to="/signup">SIGN UP FOR SPOTIFY</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
