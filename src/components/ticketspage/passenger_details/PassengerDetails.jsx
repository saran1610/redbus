import {
  Box,
  Grid,
  Stack,
  Typography,
  Avatar,
  TextField,
  Radio,
  RadioGroup,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  Link,
  Button,
} from "@mui/material";
import React, { useState } from "react";

import "./PassengerDetails.scss";

import { isEmail } from "validator";

import primoSvg from "../../../assets/images/primo-logo-white.svg";

import rapImg from "../../../assets/images/rap_redbus.png";
import cancelImg from "../../../assets/images/bus_cancellation.png";
import hospitalImg from "../../../assets/images/hospitalisation.png";
import accidentImg from "../../../assets/images/accident.png";

import { ImUser } from "react-icons/im";

const PassengerDetails = ({ busID, totalAmount, bookedSeats }) => {
  console.log(busID, totalAmount, bookedSeats);

  let rapData = [
    {
      img: cancelImg,
      title: "Upto ₹ 500",
      desc: "extra refund on ticket price if the bus is cancelled.",
    },
    {
      img: hospitalImg,
      title: "Upto ₹ 75,000",
      desc: "in the event of accidental hospitalisation",
    },
    {
      img: accidentImg,
      title: "Upto ₹ 5Lakh",
      desc: "in case of death/PTD/PPD",
    },
  ];

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setIsValidEmail(isEmail(value));
  };

  return (
    <>
      <Stack className="passenger-details">
        <Stack className="pass-title-area">
          <Typography className="pass-title" sx={{ textAlign: "center" }}>
            Passenger Details
          </Typography>
        </Stack>
        <Stack className="primo-banner" direction={"row"}>
          <Stack className="primo-svg-area">
            <Box
              className="primo-svg"
              component="img"
              alt="Primo"
              src={primoSvg}
            />
          </Stack>
          <Stack className="primo-content">
            <Typography className="features">
              Safe | On-time | Comfortable
            </Typography>
            <Typography className="slogan">Experience the best</Typography>
          </Stack>
        </Stack>
        <Stack className="passenger-info" direction={"row"}>
          <Avatar className="user-avatar" sx={{ backgroundColor: "#6EC7B4" }}>
            <ImUser className="user-icon" />
          </Avatar>
          <Typography className="pi-title">Passenger Information</Typography>
        </Stack>

        <Stack className="passenger-form">
          <form>
            {bookedSeats.map((item, index) => (
              <Stack className="passenger-inputs" key={index}>
                <Typography className="passenger-no-seat">
                  <span className="passenger-no">Passenger {index + 1}</span> |{" "}
                  <span className="seat-no">Seat {item}</span>
                </Typography>
                <Stack className="name-input">
                  <TextField
                    className="passenger-name"
                    label="Name"
                    variant="outlined"
                    size="small"
                  />
                </Stack>
                <Stack className="gender-age" direction={"row"}>
                  <Stack className="gender-radio">
                    <FormControl>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Gender
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        className="gender-radio-group"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Stack>
                  <Stack className="age-input">
                    <TextField
                      className="passenger-age"
                      label="Age"
                      variant="outlined"
                      size="small"
                    />
                  </Stack>
                </Stack>
              </Stack>
            ))}

            <Stack className="contact-details" direction={"row"}>
              <Avatar
                className="contact-avatar"
                sx={{ backgroundColor: "#F1AF43" }}
              >
                <ImUser className="contact-icon" />
              </Avatar>
              <Typography className="cd-title">Contact Details</Typography>
            </Stack>
            <Stack className="contact-inputs">
              <Typography className="contact-note">
                Your ticket will be sent to these details
              </Typography>
              <TextField
                className="passenger-email"
                label="Email"
                variant="outlined"
                type="email"
                size="small"
                value={email}
                onChange={handleChange}
                error={!isValidEmail}
                helperText={!isValidEmail ? "Please enter a valid email" : ""}
              ></TextField>
              <TextField
                className="passenger-mobile"
                label="Mobile No"
                variant="outlined"
                size="small"
              ></TextField>
              <TextField
                className="residence-city"
                label="City of Residence"
                variant="outlined"
                size="small"
              ></TextField>
              <TextField
                className="residence-state"
                label="State of Residence"
                variant="outlined"
                size="small"
              ></TextField>
            </Stack>
            <Stack className="subscribe-wa">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Subscribe to Whatsapp Messages"
                />
              </FormGroup>
            </Stack>
            <Stack className="rap-area" direction={"row"}>
              <Stack className="rap-content" direction={"row"}>
                <Box
                  className="rap-logo"
                  component="img"
                  alt="redBus Assurance Program"
                  src={rapImg}
                />
                <Stack className="rap-info">
                  <Typography className="rap-title">
                    redBus Assurance Program
                  </Typography>
                  <Typography className="rap-price">
                    Secure your trip just at{" "}
                    <span className="nineteen">₹19</span> per passenger
                  </Typography>
                </Stack>
              </Stack>
              <Stack className="tc-link">
                <Link>T&C Apply</Link>
              </Stack>
            </Stack>
            <Stack className="rap-card-area">
              <Grid container>
                {rapData.map((value, index) => (
                  <Grid item md={4} key={index}>
                    <Stack className="rap-card-box">
                      <Box
                        className="rap-card-img"
                        component="img"
                        alt={value.title}
                        src={value.img}
                      />
                      <Typography className="title-rap">
                        {value.title}
                      </Typography>
                      <Typography className="desc-rap">{value.desc}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
            <Stack className="protect-trip">
              <FormControl>
                {/* <FormLabel id="demo-radio-buttons-group-label2"></FormLabel> */}
                <RadioGroup name="protect-trip-radio-btn">
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label={
                      <Typography className="label-content">
                        Yes, Protect my trip at{" "}
                        <span className="nineteen">Rs.19</span>{" "}
                        <span className="per-passenger">(1 Passenger)</span>. I
                        agree to the{" "}
                        <Link className="terms-conditions">
                          Terms and Conditions
                        </Link>
                        .
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label={
                      <Typography className="label-content">
                        No, I would like to proceed without insurance.
                      </Typography>
                    }
                  />
                </RadioGroup>
              </FormControl>
            </Stack>

            <Stack className="proceed-to-pay">
              <Typography className="agree-note">
                By clicking on proceed, I agree that I have read and understood
                the <Link>TnCs</Link> and the <Link>Privacy Policy</Link>
              </Typography>
              <Stack className="amount-pay" direction={"row"}>
                <Typography className="total-amount">
                  Total Amount : {totalAmount}
                </Typography>
                <Stack className="pay-btn-area">
                  <Button className="pay-btn" variant="contained">
                    PROCEED TO PAY
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </>
  );
};

export default PassengerDetails;
