import { Box, Divider } from "@mui/material";
import { FC } from "react";
import CustomButton from "../../common/CustomButton";

interface ShippingUtilsBoxProps {
  dividerTop?: boolean;
  dividerBottom?: boolean;
}

const ShippingUtilsBox: FC<ShippingUtilsBoxProps> = ({
  dividerTop,
  dividerBottom,
}) => {
  const handlePackingClick = () => {
    console.log("clicked");
  };
  const handleShippingClick = () => {
    console.log("clicked");
  };
  return (
    <>
      {dividerTop && (
        <Divider
          variant="middle"
          flexItem
          sx={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
        />
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "15px 0",
        }}
      >
        <CustomButton
          label="View packing slip"
          handleClick={handlePackingClick}
          widthPercent={38}
          contained
        />
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
        />
        <CustomButton
          label="Create shipping label"
          handleClick={handleShippingClick}
          widthPercent={38}
          outlined
        />
      </Box>
      {dividerBottom && (
        <Divider
          variant="middle"
          flexItem
          sx={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
        />
      )}
    </>
  );
};

export default ShippingUtilsBox;
