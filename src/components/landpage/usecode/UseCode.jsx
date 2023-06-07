import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Grid, Stack, Box, Typography } from "@mui/material";
import "./UseCode.scss";

import summerImg from "../../../assets/images/summer.png";
import bus200Img from "../../../assets/images/bus200.png";
import superImg from "../../../assets/images/superhit.png";
import rb200Img from "../../../assets/images/rb200.png";

let sliderData = [
  {
    content: "Save up to Rs 500 on bus tickets",
    code: "Use Code SUMMER",
    img: summerImg,
  },
  {
    content: "Save up to Rs 200 in KL and KA Routes.",
    code: "Use Code BUS200",
    img: bus200Img,
  },
  {
    content: "Save upto Rs 300 on AP and TS route",
    code: "Use Code SUPERHIT",
    img: superImg,
  },
  {
    content: "Save upto Rs 200 on Delhi and North routes",
    code: "Use Code RB200",
    img: rb200Img,
  },
];

const UseCode = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <Stack className="slider-container" direction={"row"}>
        <Container maxWidth="lg" sx={{ height: "300px" }}>
          <Slider {...settings} className="slider">
            {sliderData.map((value, index) => (
              <Stack key={index} className="slider-card">
                <Typography variant="body2" textAlign={"center"}>
                  {value.content}
                </Typography>
                <Box
                  component="img"
                  sx={{
                    width: "240px",
                    height: "auto",
                    margin: "20px auto",
                  }}
                  alt="redbus"
                  src={value.img}
                />
                <Typography variant="body2" textAlign={"center"}>
                  {value.code}
                </Typography>
              </Stack>
            ))}
          </Slider>
        </Container>
      </Stack>
    </>
  );
};

export default UseCode;
