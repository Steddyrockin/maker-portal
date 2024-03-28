import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { OrderStatusData } from "shared/data/orders";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface StepBarProps {
  data: OrderStatusData[];
  currentStatus: number;
}

const StepBar: FC<StepBarProps> = ({ data, currentStatus }) => {
  return (
    <Box sx={{ border: "1px solid rgba(51, 51, 51, 1)", borderRadius: "66px" }}>
      <Swiper
        watchSlidesProgress={true}
        //slidesPerView={1.25}
        direction="horizontal" // Set direction to horizontal
        slidesPerView={3.1} // Show as many slides as possible
        // style={{
        //   //    width: "fit-content",
        //   //   padding: "10px 14px",
        //   borderBottom:
        //     "1px solid  var(--greyscale-00020, rgba(13, 13, 13, 0.20))",
        // }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              borderRadius="20px"
              border={
                index === currentStatus
                  ? "1px solid rgba(235, 73, 73, 1)"
                  : "none"
              }
            >
              <img src={item.image} width="35px" height="35px" alt="image" />
              <Typography
                sx={{
                  fontFamily: "Vulf Sans Demo",
                  fontSize: "11px",
                  lineHeight: "18px",
                }}
                color={
                  index === currentStatus ? "white" : "rgba(153, 153, 153, 1)"
                }
              >
                {item.label}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default StepBar;
