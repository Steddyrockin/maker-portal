import { Box } from "@mui/material";
import { FC } from "react";
import StepBar from "../common/StepBar";
import { orderStatusData } from "shared/data/orders";
import NewMap from "shared/components/NewMap";
import ShippingUtilsBox from "./ShippingUtilsBox";

const ShippingInfo: FC = () => {
  return (
    <Box>
      <StepBar data={orderStatusData} currentStatus={0} />
      <Box my="15px" border="1px" borderRadius="28px">
        <NewMap fullWidth fullHeight />
      </Box>
      <ShippingUtilsBox dividerBottom/>
    </Box>
  );
};

export default ShippingInfo;
