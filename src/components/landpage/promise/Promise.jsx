import React from "react";
import "./Promise.scss";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import promiseImg from "../../../assets/images/promise.png";
import benefitsImg from "../../../assets/images/benefits.png";
import careImg from "../../../assets/images/customer_care.png";
import lowpriceImg from "../../../assets/images/lowest_price.png";

const Promise = () => {
  let cardData = [
    {
      img: benefitsImg,
      title: "UNMATCHED BENEFITS",
      desc: "We take care of your travel beyond ticketing by providing you with innovative and unique benefits.",
    },
    {
      img: careImg,
      title: "LOWEST PRICES",
      desc: "We put our experience and relationships to good use and are available to solve your travel issues.",
    },
    {
      img: lowpriceImg,
      title: "UNMATCHED BENEFITS",
      desc: "We always give you the lowest price with the best partner offers.",
    },
  ];
  return (
    <>
      <Stack className="pro-container">
        <Container>
          <Stack className="title-area">
            <Box
              className="pro-img"
              component="img"
              alt="promise"
              src={promiseImg}
            />
            <Typography className="pro-title">WE PROMISE TO DELIVER</Typography>
          </Stack>
          <Stack className="card-area">
            <Grid container>
              {cardData.map((value, index) => (
                <Grid item md={4} key={index}>
                  <Stack className="card-box">
                    <Box
                      className="card-img"
                      component="img"
                      alt={value.title}
                      src={value.img}
                    />
                    <Typography className="title">{value.title}</Typography>
                    <Typography className="desc">{value.desc}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default Promise;
