import React from "react";
import "./submitbutton.css";

interface LoginButtonProps {
  disabled: boolean;
  onClick: () => void;
  className?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ disabled, onClick, className }) => {
  return (
    <button
      className={`submit-button ${className? className: ""} ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      Login
    </button>
  );
};

export default LoginButton;
