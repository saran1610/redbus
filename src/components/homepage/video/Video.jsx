import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import "./Video.scss";

const Video = () => {
  return (
    <>
      <Stack className="video-container" >
        <Container>
          <Grid container>
            <Grid item md={12}>
              <Stack className="video-content">
                <Typography className="video-h4" variant="h4">
                  How to book bus tickets online on redBus?
                </Typography>
                <Box className="video-box">
                  <iframe
                    width="80%"
                    height="500px"
                    src="https://www.youtube.com/embed/eyAAUGhvZu8"
                    title="YouTube video player"
                    // frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    // allowfullscreen
                  ></iframe>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
};

export default Video;
