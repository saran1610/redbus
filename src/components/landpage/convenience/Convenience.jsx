import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  Stack,
  Box,
  Typography,
  Link,
} from "@mui/material";
import "./Convenience.scss";

import cityImg from "../../../assets/images/city_scape.png";
import appImg from "../../../assets/images/IOS_Android.png";

const Convenience = () => {
  // const history = useHistory();
  // const navigateTo = () => history.push("/login");

  const navigateLogin = useNavigate();

  const goLogin = () => {
    navigateLogin("/login");
  };

  return (
    <>
      <Stack className="con-container">
        <Container>
          <Grid container>
            <Grid item md={6} padding={"0 20px"}>
              <Stack className="content">
                <Typography className="title">
                  CONVENIENCE ON-THE-GO.
                </Typography>
                <Typography className="para">
                  Enjoy the following exclusive features on the redBus app
                </Typography>
                <Typography className="para">
                  Last Minute Booking - In a hurry to book a bus at the last
                  minute? Choose the bus passing from your nearest boarding
                  point and book in a few easy steps.
                </Typography>
                <Typography className="para">
                  Boarding Point Navigation - Never lose your way while
                  travelling to your boarding point!
                </Typography>
                <Typography className="para">
                  Comprehensive Ticket Details- Everything that you need to make
                  the travel hassle free - rest stop details, boarding point
                  images, chat with co-passengers, wake-up alarm and much more!
                </Typography>

                <Button onClick={goLogin} className="login-btn">
                  LOGIN / SIGNUP
                </Button>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Box
                className="app-img"
                component="img"
                alt="app login"
                src={appImg}
              />
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
};

export default Convenience;
