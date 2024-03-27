import React, { useState, ChangeEvent } from "react";

interface PasswordInputProps {
  onPasswordChange: (password: string) => void;
  inputClassName: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ onPasswordChange, inputClassName }) => {
  const [password, setPassword] = useState<string>("");

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
    onPasswordChange(value); // Call the callback function with the new password value
  };

  return (
    <div className={inputClassName}>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Passcode"
        value={password}
        onChange={handlePasswordChange}
        required
      />
    </div>
  );
};

export default PasswordInput;
