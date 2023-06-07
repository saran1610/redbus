import React from "react";
import TravelInfo from "../../components/ticketspage/travel_info/TravelInfo";
import ModifySearch from "../../components/ticketspage/modify_search/ModifySearch";
import { Container, Grid, Stack, Typography, Box, Button } from "@mui/material";
import Filters from "../../components/ticketspage/filter_menu/Filters";
import BannerTiles from "../../components/ticketspage/banner_tiles/BannerTiles";
import SearchTitles from "../../components/ticketspage/search_titles/SearchTitles";
import primoLogo from "../../assets/images/primo_logo.svg";

import ShowSeats from "../../components/ticketspage/show_seats/ShowSeats";

import { useSelector, useDispatch } from "react-redux";

import { useState } from "react";

import { RiShieldStarLine } from "react-icons/ri";
import { SlPeople } from "react-icons/sl";

import "./BusTickets.scss";

import { useSearchParams } from "react-router-dom";

const BusTickets = () => {
  const state = useSelector(({ data }) => data);
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState({});
  console.log("toggle", toggle);

  const [searchParams] = useSearchParams();

  const travelFrom = searchParams.get("travelFrom");
  const travelTo = searchParams.get("travelTo");
  const travelDate = searchParams.get("travelDate");

  console.log(travelFrom, travelTo, travelDate);

  console.log("state", state);
  const getAllBuses = state.allBusData;
  console.log(getAllBuses);

  const searchBuses = getAllBuses.filter(
    (item) =>
      item.Travelfrom === travelFrom &&
      item.Travelto === travelTo &&
      item.DepDateSearch === travelDate
  );
  console.log(searchBuses);

  const handleToggle = (e) => {
    const idx = e.target.value;
    console.log(e.target.value);
    setToggle((tog) => ({ ...tog, [idx]: !tog[idx] }));
  };

  return (
    <>
      <Stack className="bus-tickets">
        <TravelInfo />
        <ModifySearch />
        <Stack className="menu-area">
          <Container maxWidth="xl">
            <Grid container>
              <Grid item md={2}>
                <Filters />
              </Grid>
              <Grid item md={10}>
                <BannerTiles />
                <SearchTitles buscount={searchBuses.length} />
                <Stack>
                  {searchBuses.map((item, index) => (
                    <Stack>
                      <Stack className="search-results" key={index}>
                        <Grid container>
                          <Grid item lg={2}>
                            <Stack className="bus-info-col">
                              <Box
                                className="primo-logo"
                                component="img"
                                alt="Primo"
                                src={primoLogo}
                              />
                              <Typography className="travels-name">
                                {item.BusName}
                              </Typography>
                              <Typography className="bus-type">
                                {item.BusType}
                              </Typography>
                            </Stack>
                          </Grid>

                          <Grid item lg={1}>
                            <Stack>
                              <Typography>.</Typography>
                            </Stack>
                          </Grid>
                          <Grid item lg={2}>
                            <Stack className="departure-col">
                              <Typography className="departure-time">
                                {item.DepTime}
                              </Typography>
                              <Typography className="departure-date">
                                {item.DepDate}
                              </Typography>
                              <Typography className="departure-place">
                                {item.Travelfrom}
                              </Typography>
                            </Stack>
                          </Grid>
                          <Grid item lg={1}>
                            <Stack className="duration-col">
                              <Typography className="travel-duration">
                                {item.Duration}
                              </Typography>
                            </Stack>
                          </Grid>

                          <Grid item lg={2}>
                            <Stack className="arrival-col">
                              <Typography className="arrival-time">
                                {item.ArrTime}
                              </Typography>
                              <Typography className="arrival-date">
                                {item.ArrDate}
                              </Typography>
                              <Typography className="arrival-place">
                                {item.Travelto}
                              </Typography>
                            </Stack>
                          </Grid>
                          <Grid item lg={1}>
                            <Stack className="ratings-col">
                              <Box className="ratings-box">
                                <RiShieldStarLine className="ratings-icon" />
                                <Typography className="ratings">
                                  {item.Ratings}
                                </Typography>
                              </Box>
                              <Box className="ratings-count-box">
                                <SlPeople className="ratings-count-icon" />
                                <Typography className="ratings-count">
                                  {item.RatingsCount}
                                </Typography>
                              </Box>
                            </Stack>
                          </Grid>
                          <Grid item lg={1}>
                            <Stack className="fare-col">
                              <Typography className="fare">
                                Starts from INR
                                <span className="in-rupees">
                                  {item.LowerPrice}
                                </span>
                              </Typography>
                            </Stack>
                          </Grid>

                          <Grid item lg={2}>
                            <Stack className="seats-col">
                              <Typography className="avail-seats">
                                {item.SeatAvailable} Seats available
                              </Typography>
                              <Typography className="single-seats">
                                10 Single
                              </Typography>
                              <Button
                                value={index}
                                className="view-seats"
                                variant="contained"
                                onClick={(index) => handleToggle(index)}
                              >
                                {toggle[index] ? "Hide Seats" : "Show Seats"}
                              </Button>
                            </Stack>
                          </Grid>
                        </Grid>
                      </Stack>
                      <Stack>
                        {toggle[index] ? <ShowSeats bus={item} /> : ""}
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Stack>
      </Stack>
    </>
  );
};

export default BusTickets;
