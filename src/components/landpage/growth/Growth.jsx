import React from "react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import "./Growth.scss";

const Growth = () => {
  let growthData = [
    {
      title: "CUSTOMERS",
      count: "36 M",
      desc: "redBus is trusted by over 36 million happy customers globally",
    },
    {
      title: "OPERATORS",
      count: "3500",
      desc: "network of over 3500 bus operators worldwide",
    },
    {
      title: "BUS TICKETS",
      count: "220+ M",
      desc: "Over 220 million trips booked using redBus",
    },
  ];

  return (
    <>
      <Stack className="growth-container">
        <Container>
          <Stack className="growth-title-area">
            <Typography className="growth-title">
              THE NUMBERS ARE GROWING!
            </Typography>
          </Stack>
          <Stack className="growth-card-area">
            <Grid container>
              {growthData.map((value, index) => (
                <Grid item md={4} key={index}>
                  <Stack className="growth-card-box">
                    <Typography className="growth-card-title">
                      {value.title}
                    </Typography>
                    <Typography className="growth-count">
                      {value.count}
                    </Typography>
                    <Typography className="growth-desc">
                      {value.desc}
                    </Typography>
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

export default Growth;
