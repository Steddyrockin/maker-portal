import { FC } from "react";
import OrderList from "./OrdersList";
import ShippingInfo from "./ShippingInfo";
import OrderDetail from "./OrderDetail";
import { Box } from "@mui/material";

import {
  ordersData,
  //   orderStatusData,
  //   oderDetailData,
  //   productDetailData,
} from "shared/data";
import SearchBox from "./common/SearchBox";

const Orders: FC = () => {
  return (
    <Box sx={{ padding: "0 15px" }}>
      <OrderList data={ordersData}>
        <SearchBox />
      </OrderList>
      <ShippingInfo />
      <OrderDetail />
    </Box>
  );
};

export default Orders;
