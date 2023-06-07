import React from "react";
import { Link, useNavigate } from "react-router-dom";

import redbusLogo from "../../assets/images/redbus_logo.png";

import {
  Container,
  Grid,
  Box,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import "./Header.scss";

import { useSelector, useDispatch } from "react-redux";
import { signInUser, signInAdmin, logDetails } from "../redux/stateSlice";
import { store } from "../redux/store";

import { FaRegUserCircle, FaChevronDown } from "react-icons/fa";

const Header = () => {
  const state = useSelector(({ data }) => data);
  const dispatch = useDispatch();

  const isUser = state?.isUserSignedIn;
  const isAdmin = state?.isAdminSignedIn;
  const isRole = state?.logData?.role;
  // console.log(isUser, isAdmin, isRole);

  const navigateLandpage = useNavigate();

  const handleSignout = () => {
    if (isRole === "user") {
      dispatch(signInUser(false));
      dispatch(logDetails({}));
      localStorage.removeItem("isUserSignedIn");
      localStorage.removeItem("logData");
      console.log("Hi");
      navigateLandpage("/");
    } else if (isRole === "admin") {
      dispatch(signInAdmin(false));
      dispatch(logDetails({}));
      localStorage.removeItem("isAdminSignedIn");
      localStorage.removeItem("logData");
      console.log("Hi");
      navigateLandpage("/");
    } else {
      alert("Not Signed Out!");
    }
  };
  return (
    <>
      <Stack className="app-bar">
        <Container>
          <Grid container spacing={3} padding={"10px 0"}>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link to={`/home`} className="links">
                <Box
                  component="img"
                  sx={{
                    width: "90px",
                    height: "auto",
                  }}
                  alt="redbus"
                  src={redbusLogo}
                />
              </Link>
              <Stack direction={"row"} spacing={3} className="nav-left">
                <Link className="links" to={`/bus_tickets`}>
                  Bus Tickets
                </Link>
                <Link to={`/`} className="links">
                  rYde<sup>New</sup>
                </Link>
                <Link to={`/`} className="links">
                  redRail<sup>New</sup>
                </Link>
              </Stack>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Stack direction={"row"} spacing={3} className="nav-right">
                <Link to={`/`} className="links">
                  Help
                </Link>
                <Link className="links manage-menu">
                  Manage Booking
                  <FaChevronDown className="chevron-down" />
                  <ul className="manage-submenu">
                    <li>
                      <Link to={`/`} className="sub-links">
                        Bus Tickets
                      </Link>
                    </li>
                    <li>
                      <Link to={`/`} className="sub-links">
                        Cancel
                      </Link>
                    </li>
                    <li>
                      <Link to={`/`} className="sub-links">
                        Change Travel Date
                      </Link>
                    </li>
                    <li>
                      <Link to={`/`} className="sub-links">
                        Show My Ticket
                      </Link>
                    </li>
                    <li>
                      <Link to={`/`} className="sub-links">
                        Email/SMS
                      </Link>
                    </li>
                  </ul>
                </Link>
                <Link className="links user-menu">
                  <FaRegUserCircle className="user-icon" />
                  <FaChevronDown className="chevron-down" />
                  {isUser ? (
                    <ul className="user-submenu">
                      <li>
                        <Link to={`/`} className="sub-links">
                          My Trips
                        </Link>
                      </li>
                      <li>
                        <Link to={`/`} className="sub-links">
                          Wallets/Cards
                        </Link>
                      </li>
                      <li>
                        <Link to={`/`} className="sub-links">
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link to={`/`} className="sub-links">
                          Wallet
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/`}
                          onClick={() => {
                            handleSignout();
                          }}
                          className="sub-links"
                        >
                          Sign Out
                        </Link>
                      </li>
                      <li>
                        <Link to={`/`} className="sub-links">
                          Signout from All Devices
                        </Link>
                      </li>
                    </ul>
                  ) : isAdmin ? (
                    <ul className="user-submenu">
                      <li>
                        <Link
                          to={`/`}
                          onClick={() => {
                            handleSignout();
                          }}
                          className="sub-links"
                        >
                          Sign Out
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    <ul className="user-submenu">
                      <li>
                        <Link to={`/login`} className="sub-links">
                          Sign In / Sign Up
                        </Link>
                      </li>
                    </ul>
                  )}
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
};

export default Header;
