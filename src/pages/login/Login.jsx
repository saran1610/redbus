import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import "./Login.scss";
import Users from "../../Users/Users.json";

import loginImg from "../../assets/images/login-banner.svg";
import rbLogo from "../../assets/images/login_logo.png";

import { useSelector, useDispatch } from "react-redux";
import {
  signInUser,
  signInAdmin,
  logDetails,
} from "../../components/redux/stateSlice";

const Login = () => {
  const state = useSelector(({ data }) => data);
  const dispatch = useDispatch();

  console.log("login state", state);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigateHome = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkUser = Users.find(
      (item) => item.username === username && item.password === password
    );
    console.log(checkUser);

    // if (checkUser) {
    //   dispatch(signIn(true));
    //   localStorage.setItem("isSignedIn", JSON.stringify(true));
    //   navigateHome("/home");
    // }

    if (checkUser.role === "user") {
      dispatch(signInUser(true));
      dispatch(logDetails(checkUser));
      localStorage.setItem("isUserSignedIn", JSON.stringify(true));
      localStorage.setItem("logData", JSON.stringify(checkUser));
      navigateHome("/home");
    } else if (checkUser.role === "admin") {
      dispatch(signInAdmin(true));
      dispatch(logDetails(checkUser));
      localStorage.setItem("isAdminSignedIn", JSON.stringify(true));
      localStorage.setItem("logData", JSON.stringify(checkUser));
      navigateHome("/add_bus");
    } else {
      alert("Enter valid username or password.!");
    }

    console.log("login state", state);
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <Stack className="login-container">
        <Container>
          <Grid container>
            <Grid item md={8} margin={"0 auto"}>
              <Stack direction={"row"} className="login-area">
                <Grid container>
                  <Grid item md={6}>
                    <Stack
                      className="login-banner"
                      sx={{
                        backgroundImage: `url(${loginImg})`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        padding: "20px",
                      }}
                      height={"80vh"}
                    >
                      <Typography variant="h4" className="unlock">
                        Unlock the Smarter Way to Travel
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item md={6}>
                    <Stack className="login-form" sx={{ height: "80vh" }}>
                      <Box
                        className="rb-logo-red"
                        component="img"
                        alt="redbus"
                        src={rbLogo}
                      />
                      <Typography variant="h5" className="signin-desc">
                        Sign in to avail exciting discounts and cashbacks!!
                      </Typography>
                      <form
                        onSubmit={(e) => handleSubmit(e)}
                        className="form-area"
                      >
                        <TextField
                          className="login-ip"
                          label="Username"
                          variant="filled"
                          placeholder="Enter username"
                          value={username}
                          fullWidth
                          required
                          onChange={(e) => setUsername(e.target.value)}
                          error={!username}
                          helperText={!username ? "Required" : ""}
                        />
                        <TextField
                          className="login-ip"
                          label="Password"
                          variant="filled"
                          placeholder="Enter password"
                          type="password"
                          value={password}
                          fullWidth
                          required
                          onChange={(e) => setPassword(e.target.value)}
                          error={!password}
                          helperText={
                            !password
                              ? "Required"
                              : "Don't share your password with anyone.!"
                          }
                        />

                        <Button
                          className="login-btn"
                          type="submit"
                          color="primary"
                          variant="contained"
                          fullWidth
                        >
                          Login
                        </Button>
                      </form>
                      <Typography className="tc-pp">
                        By signing up, you agree to our Terms & Conditions and
                        Privacy Policy
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
};

export default Login;
