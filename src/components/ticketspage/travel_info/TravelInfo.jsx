import React from "react";
import { Container, Grid, Link, Stack, Typography } from "@mui/material";

import "./TravelInfo.scss"


import { FiChevronRight } from "react-icons/fi";

const TravelInfo = () => {
  return (
    <>
    
      <Stack className="travel-info">
        <Container maxWidth="xl">
          <Stack direction={"row"} className="route">
            <Link to={`/home`} className="home-link">Home</Link>
            <FiChevronRight className="chev-right" />
            <Typography variant="subtitle2">Bus Tickets</Typography>
            <FiChevronRight className="chev-right" />
            <Typography variant="subtitle2">Chennai to Tirunelveli</Typography>
          </Stack>
          <Stack className="fare">
            <Typography variant="subtitle2">Fare Starts from INR 700</Typography>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default TravelInfo;
