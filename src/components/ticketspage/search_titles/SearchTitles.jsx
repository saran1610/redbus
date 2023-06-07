import React from "react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import "./SearchTitles.scss";

const SearchTitles = (data) => {
  console.log(data);
  return (
    <>
      <Stack className="search-titles">
        <Grid container>
          <Grid item lg={2}>
            <Stack>
              <Typography className="bold-title">{data.buscount} buses found</Typography>
            </Stack>
          </Grid>

          <Grid item lg={1}>
            <Stack>
              <Typography className="bold-title">SORT BY:</Typography>
            </Stack>
          </Grid>
          <Grid item lg={2}>
            <Stack>
              <Typography className="thin-title">Departure</Typography>
            </Stack>
          </Grid>
          <Grid item lg={1}>
            <Stack>
              <Typography className="thin-title">Duration</Typography>
            </Stack>
          </Grid>

          <Grid item lg={2}>
            <Stack>
              <Typography className="thin-title">Arrival</Typography>
            </Stack>
          </Grid>
          <Grid item lg={1}>
            <Stack>
              <Typography className="thin-title">Ratings</Typography>
            </Stack>
          </Grid>
          <Grid item lg={1}>
            <Stack>
              <Typography className="thin-title">Fare</Typography>
            </Stack>
          </Grid>

          <Grid item lg={2}>
            <Stack>
              <Typography className="thin-title">Seats Available</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default SearchTitles;
