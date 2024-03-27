import React, { useState, ChangeEvent } from "react";
// import isEmail from "../../../../../core/utils/isEmail";
import "./email-input.css";

interface EmailInputProps {
  onEmailChange: (email: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ onEmailChange }) => {
  const [email, setEmail] = useState<string>("");

  // const [emailError, setEmailError] = useState(false);

  // const validateEmail = (inputEmail: string) => {
  //   setEmail(inputEmail);

  //   if (isEmail(inputEmail) || inputEmail === "") {
  //     setEmailError(false);
  //   } else {
  //     setEmailError(true);
  //   }
  // };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
    onEmailChange(value); // Call the callback function with the new email value
  };

  return (
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Email"
      value={email}
      onChange={handleEmailChange}
      required
    />
  );
};

export default EmailInput;
