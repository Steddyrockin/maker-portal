import { Box } from "@mui/material";
import { FC, ReactNode, useState } from "react";
import { OrderItem } from "shared/data/orders";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Item from "./Item";

interface OrderListProps {
  data: OrderItem[];
  children?: ReactNode;
}

const OrderList: FC<OrderListProps> = ({ data, children }) => {
  const [selectedId, setSelectedId] = useState("");

  const handleOrderClick = (id: string) => {
    // Set the selected child when it's clicked
    console.log("clicked order id", id);
    setSelectedId(id);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ overflow: "hidden" }}
    >
      {children}
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={1.25}
        direction="horizontal" // Set direction to horizontal
        //slidesPerView="auto" // Show as many slides as possible
        style={{
          width: "100%",
          //   padding: "10px 14px",
          borderBottom:
            "1px solid  var(--greyscale-00020, rgba(13, 13, 13, 0.20))",
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Item
              key={index}
              id={item.id}
              image={item.image}
              name={"@" + item.name}
              email={item.email}
              phone={item.phone}
              dateOfProcessing={item.dateOfProcessing}
              deliveryDate={item.deliveryDate}
              status={item.status}
              isSelected={item.id === selectedId}
              onClick={handleOrderClick}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default OrderList;
