import React from "react";
import {
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import "./Search.scss";

import { useNavigate, useParams } from "react-router-dom";

import { useForm } from "react-hook-form";

import homeBanner from "../../../assets/images/home-banner.jpg";

import { FaBus, FaRegCalendarAlt } from "react-icons/fa";

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigateBusList = useNavigate();

  const onSubmit = (data) => {
    console.log(data.fromCity, data.toCity, data.travelDate);
    navigateBusList(
      `/bus_tickets?travelFrom=${data.fromCity}&travelTo=${data.toCity}&travelDate=${data.travelDate}`
    );
  };

  return (
    <>
      <Stack className="search-container">
        <Stack sx={{ backgroundColor: "#4A4A4A", height: "80px" }}></Stack>
        <Stack
          className="home-banner"
          sx={{
            backgroundImage: `url(${homeBanner})`,
          }}
        >
          <Typography variant="h3" className="heading-h3">
            Bus Ticket Booking Online
          </Typography>
          <Typography variant="h5" className="heading-h5">
            Book Bus Tickets in India
          </Typography>
          <Stack
            className="search-bus"
            marginTop={"50px"}
            // sx={{
            //   position: "absolute",
            //   left: "50%",
            //   top: "50%",
            //   transform: "translate(-50%, -50%)",
            // }}
          >
            <Container>
              <Grid container>
                <Grid item md={10} margin={"0 auto"}>
                  <form
                    className="search-form"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <Grid container>
                      <Grid item md={3}>
                        <Box className="ip-box">
                          <input
                            type="text"
                            className="search-ip travel-from"
                            placeholder="FROM"
                            {...register("fromCity", {
                              required: "From City is required",
                            })}
                          />
                          <FaBus className="icon-ip" />
                        </Box>
                      </Grid>
                      <Grid item md={3}>
                        <Box className="ip-box">
                          <input
                            type="text"
                            className="search-ip travel-to"
                            placeholder="TO"
                            {...register("toCity", {
                              required: "To City is required",
                            })}
                          />
                          <FaBus className="icon-ip" />
                        </Box>
                      </Grid>
                      <Grid item md={3}>
                        <Box className="ip-box">
                          <input
                            type="date"
                            className="search-ip travel-date"
                            placeholder="ONWARD DATE"
                            {...register("travelDate", {
                              required: "Onward Date is required",
                            })}
                          />
                          <FaRegCalendarAlt className="icon-ip" />
                        </Box>
                      </Grid>
                      <Grid item md={3}>
                        <Box className="ip-box">
                          <button type="submit" className="search-btn">
                            Search Buses
                          </button>
                        </Box>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
            </Container>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Search;
