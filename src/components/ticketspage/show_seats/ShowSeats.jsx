import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Drawer,
} from "@mui/material";

import PassengerDetails from "../passenger_details/PassengerDetails";

import React, { useState, useEffect } from "react";

import "./ShowSeats.scss";

import { GiSteeringWheel } from "react-icons/gi";

import availImg from "../../../assets/images/available-seat-icon.jpg";
import unavailImg from "../../../assets/images/unavailable-seat-icon.jpg";
import femaleseatImg from "../../../assets/images/female-seat-icon.jpg";

import { useSelector, useDispatch } from "react-redux";

const ShowSeats = ({ bus }) => {
  console.log(bus);

  const state = useSelector(({ data }) => data);
  const dispatch = useDispatch();

  const getGender = state?.logData?.gender;
  console.log("getGender", getGender);

  const [selectedSeat, setSelectedSeat] = useState({});
  const [condition, setCondition] = useState(false);
  const [seat, setSeat] = useState([]);
  const [selectedby, setSelectedBy] = useState([]);

  const [grandtotal, setGrandtotal] = useState(0);

  const [drawerState, setDrawerState] = useState(false);

  console.log(selectedSeat, condition, seat, selectedby);

  console.log(drawerState);

  const handleChange = (e) => {
    let { name, checked, type } = e.target;
    console.log(name, checked, type);
    setSelectedSeat({
      ...selectedSeat,
      [name]: checked,
    });

    setSelectedBy([...selectedby, { [name]: checked }]);
  };

  useEffect(() => {
    for (let x in selectedSeat) {
      if (selectedSeat[x] === false) {
        setCondition(false);
        continue;
      } else {
        setCondition(true);
        break;
      }
    }

    const a = [];
    let countL = 0,
      countU = 0;
    for (let y in selectedSeat) {
      if (selectedSeat[y] == false) {
        continue;
      } else {
        a.push(y);
        y[0] === "L" ? (countL += 1) : (countU += 1);
      }
    }
    console.log(countL, countU);

    let lowerTotal = parseFloat(bus.LowerPrice) * countL;
    let upperTotal = parseFloat(bus.UpperPrice) * countU;
    let subTotal = lowerTotal + upperTotal;
    console.log(lowerTotal, upperTotal, subTotal);
    setGrandtotal(subTotal);

    setSeat(a);
  }, [selectedSeat]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  return (
    <>
      <Stack className="showseats-container">
        <Container>
          <Grid container>
            <Grid item md={12}>
              <Stack className="price-filter-area" direction={"row"}>
                <Typography>Seat Price</Typography>
                <Stack className="price-filter" direction={"row"}>
                  <Box className="price-filter-box">All</Box>
                  <Box className="price-filter-box">{bus.UpperPrice}</Box>
                  <Box className="price-filter-box">{bus.LowerPrice}</Box>
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack className="instruction">
                <Typography className="text">
                  Click on an Available seat to proceed with your transaction.
                </Typography>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack className="seat-hint-area">
                <Typography className="seat-legend">SEAT LEGEND</Typography>
                <Stack direction={"row"} className="seat-hint">
                  <Stack direction={"row"} className="hint-info">
                    <Box className="available hint" />
                    <Typography>Available</Typography>
                  </Stack>
                  <Stack direction={"row"} className="hint-info">
                    <Box className="unavailable hint" />
                    <Typography>Unavailable</Typography>
                  </Stack>
                  <Stack direction={"row"} className="hint-info">
                    <Box className="female hint" />
                    <Typography>Female</Typography>
                  </Stack>
                  <Stack direction={"row"} className="hint-info">
                    <Box className="male hint" />
                    <Typography>Male</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack className="seat-selector">
                <Stack className="lower-deck-area">
                  <Typography>Lower Deck</Typography>
                  <Stack direction={"row"} className="lower-deck-box">
                    <Stack className="driver-cabin">
                      <Box>
                        <GiSteeringWheel className="steer-wheel" />
                      </Box>
                    </Stack>
                    <Stack className="lower-seat-selector">
                      <Stack>
                        <FormGroup className="low-row">
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="L1"
                              onChange={handleChange}
                              name="L1"
                              id="L1"
                              label={
                                <img
                                  src={
                                    selectedSeat.L1
                                      ? getGender === "male"
                                        ? unavailImg
                                        : femaleseatImg
                                      : availImg
                                  }
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="L4"
                              onChange={handleChange}
                              name="L4"
                              id="L4"
                              label={
                                <img
                                  src={selectedSeat.L4 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="L7"
                              onChange={handleChange}
                              name="L7"
                              id="L7"
                              label={
                                <img
                                  src={selectedSeat.L7 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="L10"
                              onChange={handleChange}
                              name="L10"
                              id="L10"
                              label={
                                <img
                                  src={selectedSeat.L10 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="L13"
                              onChange={handleChange}
                              name="L13"
                              id="L13"
                              label={
                                <img
                                  src={selectedSeat.L13 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                        </FormGroup>
                      </Stack>
                      <Stack>
                        <FormGroup className="low-row">
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="L2"
                              onChange={handleChange}
                              name="L2"
                              id="L2"
                              label={
                                <img
                                  src={selectedSeat.L2 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="L5"
                              onChange={handleChange}
                              name="L5"
                              id="L5"
                              label={
                                <img
                                  src={selectedSeat.L5 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="L8"
                              onChange={handleChange}
                              name="L8"
                              id="L8"
                              label={
                                <img
                                  src={selectedSeat.L8 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="L11"
                              onChange={handleChange}
                              name="L11"
                              id="L11"
                              label={
                                <img
                                  src={selectedSeat.L11 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="L14"
                              onChange={handleChange}
                              name="L14"
                              id="L14"
                              label={
                                <img
                                  src={selectedSeat.L14 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                        </FormGroup>
                      </Stack>
                      <Stack className="path"></Stack>
                      <Stack>
                        <FormGroup className="low-row">
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="L3"
                              onChange={handleChange}
                              name="L3"
                              id="L3"
                              label={
                                <img
                                  src={selectedSeat.L3 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="L6"
                              onChange={handleChange}
                              name="L6"
                              id="L6"
                              label={
                                <img
                                  src={selectedSeat.L6 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="L9"
                              onChange={handleChange}
                              name="L9"
                              id="L9"
                              label={
                                <img
                                  src={selectedSeat.L9 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="L12"
                              onChange={handleChange}
                              name="L12"
                              id="L12"
                              label={
                                <img
                                  src={selectedSeat.L12 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="L15"
                              onChange={handleChange}
                              name="L15"
                              id="L15"
                              label={
                                <img
                                  src={selectedSeat.L15 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                        </FormGroup>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack className="upper-deck-area">
                  <Typography>Upper Deck</Typography>
                  <Stack direction={"row"} className="upper-deck-box">
                    <Stack className="upper-space"></Stack>
                    <Stack className="upper-seat-selector">
                      <Stack>
                        <FormGroup className="up-row">
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="U1"
                              onChange={handleChange}
                              name="U1"
                              id="U1"
                              label={
                                <img
                                  src={selectedSeat.U1 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="U4"
                              onChange={handleChange}
                              name="U4"
                              id="U4"
                              label={
                                <img
                                  src={selectedSeat.U4 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="U7"
                              onChange={handleChange}
                              name="U7"
                              id="U7"
                              label={
                                <img
                                  src={selectedSeat.U7 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="U10"
                              onChange={handleChange}
                              name="U10"
                              id="U10"
                              label={
                                <img
                                  src={selectedSeat.U10 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="U13"
                              onChange={handleChange}
                              name="U13"
                              id="U13"
                              label={
                                <img
                                  src={selectedSeat.U13 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                        </FormGroup>
                      </Stack>
                      <Stack>
                        <FormGroup className="up-row">
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="U2"
                              onChange={handleChange}
                              name="U2"
                              id="U2"
                              label={
                                <img
                                  src={selectedSeat.U2 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="U5"
                              onChange={handleChange}
                              name="U5"
                              id="U5"
                              label={
                                <img
                                  src={selectedSeat.U5 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="U8"
                              onChange={handleChange}
                              name="U8"
                              id="U8"
                              label={
                                <img
                                  src={selectedSeat.U8 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="U11"
                              onChange={handleChange}
                              name="U11"
                              id="U11"
                              label={
                                <img
                                  src={selectedSeat.U11 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="U14"
                              onChange={handleChange}
                              name="U14"
                              id="U14"
                              label={
                                <img
                                  src={selectedSeat.U14 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                        </FormGroup>
                      </Stack>
                      <Stack className="path"></Stack>
                      <Stack>
                        <FormGroup className="up-row">
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="U3"
                              onChange={handleChange}
                              name="U3"
                              id="U3"
                              label={
                                <img
                                  src={selectedSeat.U3 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="U6"
                              onChange={handleChange}
                              name="U6"
                              id="U6"
                              label={
                                <img
                                  src={selectedSeat.U6 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="U9"
                              onChange={handleChange}
                              name="U9"
                              id="U9"
                              label={
                                <img
                                  src={selectedSeat.U9 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="U12"
                              onChange={handleChange}
                              name="U12"
                              id="U12"
                              label={
                                <img
                                  src={selectedSeat.U12 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                          <Box>
                            <FormControlLabel
                              control={<Checkbox />}
                              title="U15"
                              onChange={handleChange}
                              name="U15"
                              id="U15"
                              label={
                                <img
                                  src={selectedSeat.U15 ? unavailImg : availImg}
                                />
                              }
                            />
                          </Box>
                        </FormGroup>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={6}>
              {condition ? (
                <Stack className="boarding-dropping">
                  <Stack className="bd-title" direction={"row"}>
                    <Typography className="bd">Boarding & Dropping</Typography>
                    <Typography className="change">CHANGE</Typography>
                  </Stack>
                  <Stack className="boarding-city-time" direction={"row"}>
                    <Typography className="from">{bus.Travelfrom}</Typography>
                    <Typography className="dep-time">{bus.DepTime}</Typography>
                  </Stack>
                  <Stack className="dropping-city-time" direction={"row"}>
                    <Typography className="to">{bus.Travelto}</Typography>
                    <Typography className="arr-time">
                      {bus.ArrTime}{" "}
                      <span className="arr-date">({bus.ArrDate})</span>{" "}
                    </Typography>
                  </Stack>
                  <Stack className="seat-no-content" direction={"row"}>
                    <Typography className="sn-title">Seat No</Typography>
                    <Typography className="seat-nos">{seat}</Typography>
                  </Stack>
                  <Stack className="fare-title">
                    <Typography className="fare-heading">
                      Fare Details
                    </Typography>
                  </Stack>
                  <Stack className="fare-content" direction={"row"}>
                    <Stack className="fare-desc">
                      <Typography className="amount">Amount</Typography>
                      <Typography className="tax-note">
                        Taxes will be calculated during payment
                      </Typography>
                    </Stack>
                    <Typography className="total-amount">
                      INR {grandtotal}
                    </Typography>
                  </Stack>
                  <Button
                    variant="contained"
                    id="proceed-btn"
                    className="proceed-btn"
                    onClick={toggleDrawer("right", true)}
                  >
                    PROCEED TO BOOK
                  </Button>
                </Stack>
              ) : (
                <Stack></Stack>
              )}
              <Stack className="drawer-area">
                <Drawer
                  anchor="right"
                  open={drawerState["right"]}
                  onClose={toggleDrawer("right", false)}
                >
                  <Stack className="passenger-details" sx={{ width: "700px" }}>
                    <PassengerDetails
                      busID={bus.BusID}
                      totalAmount={grandtotal}
                      bookedSeats={seat}
                    />
                  </Stack>
                </Drawer>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
};

export default ShowSeats;
