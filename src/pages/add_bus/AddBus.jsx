import {
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import "./AddBus.scss";

import moment from "moment";

import { nanoid } from "nanoid";

import { useForm } from "react-hook-form";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import { useSelector, useDispatch } from "react-redux";
import { addBus } from "../../components/redux/stateSlice";

const AddBus = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const state = useSelector(({ data }) => data);
  const dispatch = useDispatch();

  const [buslist, setBuslist] = useState(
    JSON.parse(localStorage.getItem("allBuses")) || []
  );

  // const [busname, setBusName] = useState("");
  // const [travelfrom, setTravelFrom] = useState("");
  // const [travelto, setTravelTo] = useState("");
  // const [ratings, setRatings] = useState("");
  // const [ratingcount, setRatingCount] = useState("");
  // const [seatsavailable, setSeatsAvailable] = useState("");
  // const [pricelower, setPriceLower] = useState("");
  // const [priceupper, setPriceUpper] = useState("");

  const [departure, setDeparture] = useState(null);
  const [arrival, setArrival] = useState(null);

  console.log(departure, arrival);

  const dateDep = new Date(departure);
  const dateArr = new Date(arrival);

  // # travel duration

  const diffInMs = Math.abs(dateArr - dateDep);

  const diffInHrs = Math.floor(diffInMs / 3600000);
  const diffInMins = Math.floor((diffInMs % 3600000) / 60000);
  const duration = `${diffInHrs} hrs ${diffInMins} mins`;

  console.log(duration);

  // # departure and arrival date

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const depMonth = months[departure ? departure.$M : null];
  const arrMonth = months[arrival ? arrival.$M : null];

  console.log(depMonth, arrMonth);

  // # departure and arrival date

  const depDate = `${departure ? departure.$D : null} - ${depMonth} - ${
    departure ? departure.$y : null
  }`;
  const arrDate = `${arrival ? arrival.$D : null} - ${arrMonth} - ${
    arrival ? arrival.$y : null
  }`;

  const depDateSearch = `${departure ? departure.$y : null}-${
    departure ? (departure.$M + 1 < 10 ? "0" : "") + (departure.$M + 1) : null
  }-${departure ? (departure.$D < 10 ? "0" : "") + departure.$D : null}`;

  console.log(depDate, arrDate);
  console.log("depDateSearch", depDateSearch);

  // departure ? ((departure.$D < 10 ? "0" : "") + departure.$D) : null

  // # departure and arrival day

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const depDay = days[departure ? departure.$W : null];
  const arrDay = days[arrival ? arrival.$W : null];

  console.log(depDay, arrDay);

  // # departure and arrival time

  const depHrMin = `${departure ? departure.$H : null} : ${
    departure ? departure.$m : null
  }`;
  const arrHrMin = `${arrival ? arrival.$H : null} : ${
    arrival ? arrival.$m : null
  }`;

  const depTime = moment(depHrMin, "hh:mm").format("LT");
  const arrTime = moment(arrHrMin, "hh:mm").format("LT");

  console.log(depTime, arrTime);

  // # bus type

  // const genID = nanoid();
  // console.log(genID);

  const onSubmit = (data) => {
    // data.preventDefault();
    // console.log(data);
    const genID = nanoid();
    let busData = {
      BusID: genID,
      BusName: data.busName,
      Travelfrom: data.travelFrom,
      Travelto: data.travelTo,
      Duration: duration,
      DepTime: depTime,
      ArrTime: arrTime,
      DepDay: depDay,
      ArrDay: arrDay,
      DepDate: depDate,
      ArrDate: arrDate,
      Ratings: data.ratings,
      RatingsCount: data.ratingCount,
      BusType: `${data.acORnonac} ${data.seatType} (2+1)`,
      SeatAvailable: data.seatsAvailable,
      UpperPrice: data.upperPrice,
      LowerPrice: data.lowerPrice,
      DepDateSearch: depDateSearch,
    };

    setBuslist([...buslist, busData]);

    localStorage.setItem("allBuses", JSON.stringify([...buslist, busData]));

    console.log(busData);
    dispatch(addBus(busData));

    console.log("add bus state", state);
  };
  console.log(errors);

  return (
    <>
      <Stack className="addbus-container">
        <Container>
          <Grid container>
            <Grid item md={12}>
              <Stack className="addbus-content">
                <Typography className="addbus-h5" variant="h5">
                  Add Bus Details
                </Typography>
                <form className="addbus-form" onSubmit={handleSubmit(onSubmit)}>
                  <Grid container>
                    <Grid item md={6}>
                      <Stack className="addbus-stack" spacing={3}>
                        <TextField
                          id="bus-name"
                          label="Bus Name"
                          variant="outlined"
                          // value={busname}
                          {...register("busName", {
                            required: "Bus Name is required",
                          })}
                        />
                        <TextField
                          id="from-city"
                          label="Travel From"
                          variant="outlined"
                          // value={travelfrom}
                          {...register("travelFrom", {
                            required: "Travel From is required",
                          })}
                        />
                        <TextField
                          id="to-city"
                          label="Travel To"
                          variant="outlined"
                          // value={travelto}
                          {...register("travelTo", {
                            required: "Travel To is required",
                          })}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DateTimePicker
                            label="Departure"
                            value={departure}
                            onChange={(newValue) => setDeparture(newValue)}
                            renderInput={(props) => <TextField {...props} />}
                          ></DateTimePicker>
                          <DateTimePicker
                            label="Arrival"
                            value={arrival}
                            onChange={(newValue) => setArrival(newValue)}
                            renderInput={(props) => <TextField {...props} />}
                          ></DateTimePicker>
                        </LocalizationProvider>
                        <TextField
                          id="ratings"
                          label="Ratings"
                          variant="outlined"
                          // value={ratings}
                          {...register("ratings", {
                            required: "Ratings is required",
                          })}
                        />
                        <TextField
                          id="rating-count"
                          label="Rating Count"
                          variant="outlined"
                          // value={ratingcount}
                          {...register("ratingCount", {
                            required: "Rating Count is required",
                          })}
                        />
                      </Stack>
                    </Grid>
                    <Grid item md={6}>
                      <Stack className="addbus-stack" spacing={3}>
                        <TextField
                          id="seats-available"
                          label="Seats Available"
                          variant="outlined"
                          // value={seatsavailable}
                          {...register("seatsAvailable", {
                            required: "Seats Available is required",
                          })}
                        />
                        <FormControl>
                          <FormLabel id="demo-row-radio-buttons-group-label">
                            A/C or Non A/C
                          </FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="ac"
                          >
                            <FormControlLabel
                              value="ac"
                              control={<Radio />}
                              label="AC"
                              {...register("acORnonac", {
                                required: "AC or Non AC is required",
                              })}
                            />
                            <FormControlLabel
                              value="non-ac"
                              control={<Radio />}
                              label="Non A/C"
                              {...register("acORnonac", {
                                required: "AC or Non AC is required",
                              })}
                            />
                          </RadioGroup>
                        </FormControl>

                        <FormControl>
                          <FormLabel id="demo-radio-buttons-group-label">
                            Seat Type
                          </FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="sleeper"
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="sleeper"
                              control={<Radio />}
                              label="Sleeper"
                              {...register("seatType", {
                                required: "Seat Type is required",
                              })}
                            />
                            <FormControlLabel
                              value="seater"
                              control={<Radio />}
                              label="Seater"
                              {...register("seatType", {
                                required: "Seat Type is required",
                              })}
                            />
                            <FormControlLabel
                              value="semi-sleeper"
                              control={<Radio />}
                              label="Semi Sleeper"
                              {...register("seatType", {
                                required: "Seat Type is required",
                              })}
                            />
                          </RadioGroup>
                        </FormControl>

                        <TextField
                          id="us-price"
                          label="Price (Upper)"
                          variant="outlined"
                          // value={priceupper}
                          {...register("upperPrice", {
                            required: "Price (Upper) is required",
                          })}
                        />
                        <TextField
                          id="ls-price"
                          label="Price (Lower)"
                          variant="outlined"
                          // value={pricelower}
                          {...register("lowerPrice", {
                            required: "Price (Lower) is required",
                          })}
                        />
                      </Stack>
                    </Grid>
                    <Grid item md={12}>
                      <Stack className="btn-area">
                        <Button
                          className="submit-btn"
                          type="submit"
                          variant="contained"
                          // onSubmit={handleSubmit}
                        >
                          Submit
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </form>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
};

export default AddBus;
