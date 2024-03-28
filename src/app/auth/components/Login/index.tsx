import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailInput from "../common/EmailInput";
import PasswordInput from "../common/PasswordInput";
import LoginButton from "../common/SubmitButton";
import "./login-page.css";
import portalLogo from "assets/aura.gif";
import ModalLayout from "../common/ModalLayout";
import FooterNote from "../common/FooterNote";
import { ExternalLinksEnum } from "shared/enums";
import MainLayout from "shared/components/MainLayout";

const Login: FC = () => {
  const navigate = useNavigate();
  const [submittedEmail, setSubmittedEmail] = useState<string>("");
  const [submittedPassword, setSubmittedPassword] = useState<string>("");

  const handleLoginClick = () => {
    // Logic for handling login button click
    console.log("Login button clicked", submittedEmail, submittedPassword);
    localStorage.setItem("loggedIn", JSON.stringify(submittedPassword));
    setOpen(false);

    navigate("/orders");
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <MainLayout>
      {open ? (
        <div className="login-modal">
          <ModalLayout login onClose={handleClose}>
            <EmailInput
              onEmailChange={(email: string) => setSubmittedEmail(email)}
            />
            <PasswordInput
              onPasswordChange={(password: string) =>
                setSubmittedPassword(password)
              }
              inputClassName="password-input"
            />
            <LoginButton
              disabled={submittedEmail === "" || submittedPassword === ""}
              onClick={handleLoginClick}
              className="submit-button"
            />
            <FooterNote
              normalText="Don't have an account?"
              hrefText="Request Access"
              hrefUrl={ExternalLinksEnum.REQUESTACCESS}
            />
          </ModalLayout>
        </div>
      ) : (
        <>
          <div className="portal-logo">
            <img src={portalLogo} alt="portal logo" />
          </div>
          <div className="portal-logo-text">
            <div className="title">Maker Portal</div>
            Streamline your workflow
          </div>
        </>
      )}
      {!open && (
        <div className="footer">
          <div onClick={handleOpen} className="login-button">
            Sign in
          </div>
        </div>
      )}
    </MainLayout>
    // </Box>
  );
};

export default Login;
