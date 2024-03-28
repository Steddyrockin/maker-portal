import { Box } from "@mui/material";
import { FC, ReactNode, useState } from "react";
import Header from "../Header";
import avatar from "assets/avatar.svg";
import menuIcon from "assets/menu-icon.svg";
import { ExternalLinksEnum } from "shared/enums";
import logo from "assets/logo.svg";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    console.log("Toggle drawer open close status", newOpen);
    setDrawerOpen(newOpen);
  };

  const handleCloseDrawer = (status: boolean) => {
    console.log("draw", status);
    setDrawerOpen(status);
  };
  return (
    <Box className={`login-page`}>
      <Header
        drawerOpen={drawerOpen}
        toggleDrawer={toggleDrawer(true)}
        handleCloseDrawer={handleCloseDrawer}
        menuIcon={menuIcon}
        logo={logo}
        avatar={avatar}
        linkUrl={ExternalLinksEnum.COLLECTIVE}
        linkLabel="The Collective"
      />
      {children}
    </Box>
  );
};

export default MainLayout;
