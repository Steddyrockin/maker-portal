import { Box, Divider, Typography } from "@mui/material";
import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { OrderItem, orderStatusData } from "shared/data/orders";

import alphaIcon from "assets/alpha-icon.svg";
import phoneIcon from "assets/phone-icon.svg";

interface ItemProps extends OrderItem {
  onClick: (id: string) => void;
  isSelected: boolean;
}

const Item: FC<ItemProps> = ({
  id,
  name,
  email,
  phone,
  dateOfProcessing,
  deliveryDate,
  status,
  image,
  onClick,
  isSelected,
}) => {
  const isMobile = useMediaQuery({
    query: "(max-width:640px)",
  });
  const isDesktop = useMediaQuery({
    query: "(max-width:2000px)",
  });
  const onClickMe = () => {
    onClick(id);
    // get order details routine here
    // store into redux store to display throuhg the other components such as map detail component...
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      border="1px solid rgba(51, 51, 51, 1)"
      borderRadius="16px"
      // width="100%"
      // m="6px"
      my="15px"
      mr="15px"
      onClick={onClickMe}
      sx={{
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#333333",
          color: "white",
          // Set styles for sub-content
          "& .vulfmono, & .vulfmono": {
            color: "white",
          },
          "& .StatusImage": {
            filter: "invert(100%)",
          },
        },
        borderColor: isSelected ? "#EB4949" : "",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        padding={isMobile ? "10px" : "15px"}
        width="100%"
        sx={{
          "&:hover": {
            color: "inherit",
          },
          "& .divider-hover": {
            backgroundColor: "rgba(51, 51, 51, 1)", // Set the background color for the Divider on hover
          },
        }}
      >
        <Box width="70%">
          <Box
            display="flex"
            // padding="15px"
            alignItems="center"
            gap="6px"
            pb="5px"
            sx={{
              "&:hover": {
                color: "inherit",
              },
            }}
          >
            {/* <Box component="div" style={{ backgroundImage: 'url(/images/user_avatar.png)' }} className="cartItemImg">
                      </Box> */}
            <img src={image} alt="avatar" style={{ width: 25, height: 25 }} />
            <Typography
              fontSize={isDesktop ? "12px" : "10px"}
              className="vulfmono"
              color="white"
              sx={{
                "&:hover": {
                  color: "inherit",
                },
              }}
            >
              {name}
            </Typography>
          </Box>
          <Box
            display="flex"
            // padding="15px"
            alignItems="center"
            gap="6px"
            pb="5px"
            sx={{
              "&:hover": {
                color: "inherit",
              },
            }}
          >
            <img
              src={alphaIcon}
              alt="@"
              style={{ width: 15, height: 15, marginLeft: 10 }}
            />

            <Typography
              fontSize={isDesktop ? "12px" : "10px"}
              className="vulfmono"
              color="white"
              sx={{
                "&:hover": {
                  color: "inherit",
                },
              }}
            >
              {email}
            </Typography>
          </Box>
          <Box
            display="flex"
            // padding="15px"
            alignItems="center"
            gap="6px"
            pb="5px"
            sx={{
              "&:hover": {
                color: "inherit",
              },
            }}
          >
            <img
              src={phoneIcon}
              alt="phone"
              style={{ width: 15, height: 15, marginLeft: 10 }}
            />

            <Typography
              fontSize={isDesktop ? "12px" : "10px"}
              className="vulfmono"
              color="white"
              sx={{
                "&:hover": {
                  color: "inherit",
                },
              }}
            >
              {phone}
            </Typography>
          </Box>
          <Divider
            className="divider-hover"
            sx={{
              "&:hover": {
                backgroundColor: "white",
              },
            }}
          />
          <Box display="flex" pt="5px" gap="10px" pr="10px" ml="10px">
            <Box>
              <Typography
                fontSize={isDesktop ? "10px" : "10px"}
                className="vulfmono"
                color="rgba(255, 255, 255, 0.2)"
              >
                Date of processing
              </Typography>
              <Typography
                fontSize={isDesktop ? "10px" : "10px"}
                className="vulfmono"
                color="white"
              >
                {dateOfProcessing}
              </Typography>
            </Box>
            <Box>
              <Typography
                fontSize={isDesktop ? "10px" : "10px"}
                className="vulfmono"
                color="rgba(255, 255, 255, 0.2)"
              >
                Delivery date
              </Typography>
              <Typography
                fontSize={isDesktop ? "10px" : "10px"}
                className="vulfmono"
                color="white"
              >
                {deliveryDate ? deliveryDate : "Pending"}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider
          className="divider-hover"
          orientation="vertical"
          sx={{
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        />
        <Box
          display="grid"
          pl="10px"
          alignItems="center"
          justifyContent="center"
          width="30%"
        >
          <img
            src={orderStatusData[status].image}
            alt="step1"
            style={{ margin: "auto" }}
            className="StatusImage"
          />
          <Typography
            fontSize={isDesktop ? "11px" : "11px"}
            className="vulfmono"
            color="rgba(255, 255, 255, 0.2)"
          >
            {orderStatusData[status].label}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;
