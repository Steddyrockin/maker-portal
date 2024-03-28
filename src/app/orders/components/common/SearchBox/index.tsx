import { FC } from "react";

import searchIcon from "assets/search-icon.svg";
import { Box, Typography } from "@mui/material";

const SearchBox: FC = () => {
  return (
    <Box
      sx={{
        border: "1px solid rgba(51, 51, 51, 1)",
        borderRadius: "67px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: "10px",
        boxSizing: "border-box",
        my: "15px",
      }}
    >
      <img src={searchIcon} alt="search" width={20} height={20} />
      <Typography
        flexGrow={1}
        ml={1}
        sx={{
          fontFamily: "Vulf Sans Demo",
          fontSize: "14px",
          lineHeight: "22px",
          color: "rgba(217, 217, 217, 1)",
        }}
      >
        Search
      </Typography>
      <Typography
        ml={1}
        sx={{
          fontFamily: "Vulf Sans Demo",
          fontSize: "14px",
          lineHeight: "22px",
          color: "rgba(217, 217, 217, 1)",
          mr:1
        }}
      >
        Filter
      </Typography>
    </Box>
  );
};

export default SearchBox;
