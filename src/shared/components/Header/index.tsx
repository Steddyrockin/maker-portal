import { FC, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import MenuButton from "../MenuButton";
import { Box, Drawer } from "@mui/material";
import { ExternalLinksEnum } from "shared/enums";
import DrawerBox from "app/auth/components/common/DrawerBox";
import { data } from "shared/data";

interface HeaderProps {
  drawerOpen: boolean;
  toggleDrawer: (state: boolean) => void;
  handleCloseDrawer: (state: boolean) => void;
  menuIcon?: string;
  logo?: string;
  avatar?: string;
  linkUrl?: ExternalLinksEnum;
  linkLabel?: string;
}

const Header: FC<HeaderProps> = ({
  drawerOpen,
  toggleDrawer,
  handleCloseDrawer,
  menuIcon,
  logo,
  avatar,
}) => {
  const activeIndex = 0;
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });
  useEffect(() => {
    // Retrieve the value of "loggedIn" from localStorage
    const loggedInFromStorage = localStorage.getItem("loggedIn");
    // Convert the retrieved value to boolean (if it's a string "true" or "false")
    if (loggedInFromStorage !== null) {
      setLoggedIn(true);
    }
  }, []);

  const itemsToRender = loggedIn ? data.items : [data.items[3]];

  return (
    <div className={`header ${loggedIn ? "logged-in" : ""}`}>
      {isMobile && (
        <MenuButton icon={menuIcon} clickHandler={() => toggleDrawer(true)} />
      )}
      <Drawer open={drawerOpen} onClose={() => toggleDrawer(false)}>
        {<DrawerBox items={itemsToRender} toggleDrawer={handleCloseDrawer} />}
      </Drawer>
      <Box
        component="img"
        sx={isMobile ? { position: "absolute", left: "38%" } : {}}
        src={logo}
        alt="logo"
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {!isMobile &&
          itemsToRender.map((item, index) => (
            <a
              key={index}
              href={item.url || "#"}
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                color: index == activeIndex ? "white" : "rgba(255,255,255,0.6)",
              }}
              className={loggedIn ? "nav-link" : "external-link"}
            >
              {item.title || "The Collective"}
            </a>
          ))}
        {loggedIn && (
          <img style={{ marginLeft: "20px" }} src={avatar} alt="avatar" />
        )}
      </Box>
    </div>
  );
};

export default Header;
