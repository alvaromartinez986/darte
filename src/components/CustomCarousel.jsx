import React from "react";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Stack } from "@mui/system";

const CustomCarousel = ({ imgs = [], ...props }) => {
  return (
    <Carousel
      animation="fade"
      navButtonsAlwaysVisible
      autoPlay
      cycleNavigation
      NextIcon={<ArrowForwardIosIcon />}
      PrevIcon={<ArrowBackIosIcon />}
      indicatorIconButtonProps={{
        style: {
          color: "#F6D0E2",
          paddingRight: "7px",
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: "#8F148F",
        },
      }}
      navButtonsProps={{
        style: {
          color: "#8F148F",
          backgroundColor: "transparent",
        },
      }}
      navButtonsWrapperProps={{
        style: {
          fontSize: "32px",
        },
      }}
      {...props}
    >
      {imgs.map((item, i) => (
        <Stack
          key={item.toString()}
          sx={{
            height: "100%",
          }}
        >
          <img src={item} alt="banne1" />
        </Stack>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
