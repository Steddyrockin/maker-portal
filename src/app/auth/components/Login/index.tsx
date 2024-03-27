import React, { FC, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Box, Drawer } from "@mui/material";
import EmailInput from "../common/EmailInput";
import PasswordInput from "../common/PasswordInput";
import LoginButton from "../common/SubmitButton";
import "./login-page.css";
import logo from "../../../../assets/logo.svg";
import avatar from "../../../../assets/avatar.svg";
import menuIcon from "../../../../assets/menu-icon.svg";
import portalLogo from "../../../../assets/aura.gif";
import ModalLayout from "../common/ModalLayout";
import DrawerBox from "../common/DrawerBox";
import FooterNote from "../common/FooterNote";
import { ExternalLinksEnum } from "../../../../shared/enums";

const Login: FC = () => {
  const [submittedEmail, setSubmittedEmail] = useState<string>("");
  const [submittedPassword, setSubmittedPassword] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  const handleLoginClick = () => {
    // Logic for handling login button click
    console.log("Login button clicked", submittedEmail, submittedPassword);
    setLoggedIn(true);
    localStorage.setItem("loggedIn", JSON.stringify(submittedPassword));
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    console.log("Toggle drawer open close status", newOpen);
    setDrawerOpen(newOpen);
  };

  const handleCloseDrawer = (status: boolean) => {
    console.log("draw", status);
    setDrawerOpen(status);
  };

  return (
    <Box className={`login-page ${loggedIn ? "logged-in" : ""}`}>
      <div className="header">
        {isMobile && (
          <div style={{ paddingTop: 8 }} onClick={toggleDrawer(true)}>
            <img src={menuIcon} alt="menu" />
          </div>
        )}
        <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
          {<DrawerBox toggleDrawer={handleCloseDrawer} />}
        </Drawer>
        <Box
          component="img"
          sx={isMobile ? { position: "absolute", left: "38%" } : {}}
          src={logo}
          alt="logo"
        />
        {isMobile && loggedIn && <img src={avatar} alt="avatar" />}
        {!isMobile && (
          <a href={ExternalLinksEnum.COLLECTIVE} className="external-link">
            The Collective
          </a>
        )}
      </div>

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
      ) : !loggedIn ? (
        <>
          <div className="portal-logo">
            <img src={portalLogo} alt="portal logo" />
          </div>
          <div className="portal-logo-text">
            <div className="title">Maker Portal</div>
            Streamline your workflow
          </div>
        </>
      ) : (
        <></>
      )}
      {!open && !loggedIn && (
        <div className="footer">
          <div onClick={handleOpen} className="login-button">
            Sign in
          </div>
        </div>
      )}
    </Box>
  );
};

export default Login;
