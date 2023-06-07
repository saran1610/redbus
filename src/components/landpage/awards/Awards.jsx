import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import "./Awards.scss";

import bsImg from "../../../assets/images/Business_Standard.png";
import btrImg from "../../../assets/images/Brand_Trust_Report.png";
import eftImg from "../../../assets/images/Eye_for_Travel.png";

const Awards = () => {
  let awardsData = [
    {
      img: bsImg,
      desc: "Most Innovative Company",
    },
    {
      img: btrImg,
      desc: "Most Trusted Brand",
    },
    {
      img: eftImg,
      desc: "Mobile Innovation Award",
    },
  ];
  return (
    <>
      <Stack className="awards-container">
        <Container>
          <Stack className="awards-title-area">
            <Typography className="awards-title">
              AWARDS & RECOGNITION
            </Typography>
          </Stack>
          <Stack className="awards-card-area">
            <Grid container>
              {awardsData.map((value, index) => (
                <Grid item md={4} key={index}>
                  <Stack className="awards-card-box">
                    <Box
                      className="awards-card-img"
                      component="img"
                      alt={value.title}
                      src={value.img}
                    />
                    <Typography className="awards-desc">
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

export default Awards;
