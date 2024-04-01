import { FC, useState } from "react";
import OrderList from "./OrdersList";
import ShippingInfo from "./ShippingInfo";
import OrderDetail from "./OrderDetail";
import { Stack } from "@mui/material";

import {
  ordersData,
  //   orderStatusData,
  //   oderDetailData,
  //   productDetailData,
} from "shared/data";
import SearchBox from "./common/SearchBox";

const Orders: FC = () => {
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
    <Stack direction="column" spacing="15px" sx={{ padding: "0 15px" }}>
      <OrderList data={ordersData}>
        <SearchBox />
      </OrderList>
      <ShippingInfo />
      <OrderDetail drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} handleCloseDrawer={handleCloseDrawer} />
    </Stack>
  );
};

export default Orders;
