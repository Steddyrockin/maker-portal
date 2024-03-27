import { Box } from "@mui/material";
import { FC, useState, useEffect } from "react";

import logo from "../../../../../assets/logo.svg";
import CloseButton from "../CloseButton";
import FooterNote from "../FooterNote";
import { data } from "../../../../../shared/data";
import { ExternalLinksEnum } from "../../../../../shared/enums";

interface DrawerBoxProps {
  toggleDrawer: (arg: boolean) => void;
}

const DrawerBox: FC<DrawerBoxProps> = ({ toggleDrawer }) => {
  const activeIndex = 0;
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const data = localStorage.getItem("loggedIn");
    console.log("localstorage data", !!data);
    
    !!data? setLoggedIn(true):setLoggedIn(false);
  }, []);

  const itemsToRender = loggedIn ? data.items : [data.items[2]];

  return (
    <Box
      sx={{
        width: 300,
        height: "100%",
        backgroundColor: "rgba(13, 13, 13, 1)",
        color: "rgba(255, 255, 255, 1)",
        padding: "44px 30px",
      }}
      role="presentation"
      //   onClick={() => toggleDrawer(false)}
    >
      <Box
        sx={{
          borderBottom: "1px solid rgba(204, 183, 131, 0.3)",
          padding: "0px 0px 20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src={logo} alt="logo" />
        <CloseButton onClick={() => toggleDrawer(false)} />
      </Box>
      <Box sx={{ paddingTop: "15px" }}>
        {itemsToRender.map((item, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
            <img src={item.icon} alt={item.title} />
            <a
              href={item.url}
              style={{
                marginLeft: "10px",
                fontFamily: "Vulf Sans Demo",
                fontSize: "14px",
                lineHeight: "42px",
                color: index == activeIndex ? "white" : "rgba(255,255,255,0.6)",
              }}
            >
              {item.title}
            </a>
          </Box>
        ))}
      </Box>
      <Box sx={{ position: "fixed", bottom: "44px" }}>
        <FooterNote
          normalText="Don't have an account?"
          hrefText="Request Access"
          hrefUrl={ExternalLinksEnum.REQUESTACCESS}
        />
      </Box>
    </Box>
  );
};

export default DrawerBox;
