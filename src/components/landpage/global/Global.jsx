import React from "react";
import "./Global.scss";

import india from "../../../assets/images/india.png";
import malaysia from "../../../assets/images/malaysia.png";
import singapore from "../../../assets/images/singapore.png";
import peru from "../../../assets/images/peru.png";
import colombia from "../../../assets/images/colombia.png";
import indonesia from "../../../assets/images/indonesia.png";
import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";

const Global = () => {
  let countryData = [
    { flag: malaysia, country: "MALAYSIA" },
    { flag: india, country: "INDIA" },
    { flag: singapore, country: "SINGAPORE" },
    { flag: indonesia, country: "INDONESIA" },
    { flag: peru, country: "PERU" },
    { flag: colombia, country: "COLOMBIA" },
  ];
  return (
    <>
      <Stack className="global-container">
        <Container>
          <Stack className="global-title-area">
            <Typography className="global-title">
              OUR GLOBAL PRESENCE
            </Typography>
          </Stack>
          <Stack className="global-card-area">
            <Grid container>
              {countryData.map((value, index) => (
                <Grid item md={4} key={index}>
                  <Link className="site-link">
                    <Box
                      className="flag-img"
                      component="img"
                      alt={value.country}
                      src={value.flag}
                    />
                  </Link>
                  <Typography>{value.country}</Typography>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default Global;
