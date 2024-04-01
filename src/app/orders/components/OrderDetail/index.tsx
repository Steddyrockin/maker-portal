import { Box, Drawer } from "@mui/material";
import { FC } from "react";

interface OrderDetailProps {
  drawerOpen?: boolean;
  toggleDrawer: (state: boolean) => void;
  handleCloseDrawer: (state: boolean) => void;
}

const OrderDetail: FC<OrderDetailProps> = ({drawerOpen, toggleDrawer}) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        fontFamily: "Vulf Sans Demo",
        fontSize: "12px",
        lineHeight: "18px",
        cursor: "pointer",
      }}
    >
      Order #123456
      <Drawer open={drawerOpen} onClose={() => toggleDrawer(false)}>
        {<Box>Item 1</Box>}
      </Drawer>
    </Box>
  );
};

export default OrderDetail;
