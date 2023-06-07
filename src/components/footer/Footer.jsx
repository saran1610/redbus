import React from "react";
import "./Footer.scss";
import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";

import redbusLogo from "../../assets/images/logo2.png";
import { FaFacebookF, FaTwitter, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Stack className="footer-container">
        <Container>
          <Grid container>
            <Grid item md={4}>
              <Stack className="first-col">
                <Grid container>
                  <Grid item md={6}>
                    <Stack>
                      <Typography className="footer-title">
                        About redBus
                      </Typography>
                      <Link>About Us</Link>
                      <Link>Contact Us</Link>
                      <Link>Mobile Version</Link>
                      <Link>redbus on Mpbile</Link>
                      <Link>Sitemap</Link>
                      <Link>Offers</Link>
                      <Link>Careers</Link>
                      <Link>Values</Link>
                    </Stack>
                  </Grid>
                  <Grid item md={6}>
                    <Stack>
                      <Typography className="footer-title">Info</Typography>
                      <Link>T & C</Link>
                      <Link>Privacy Policy</Link>
                      <Link>FAQ</Link>
                      <Link>Blog</Link>
                      <Link>Bus Operator Reg</Link>
                      <Link>Agent Registration</Link>
                      <Link>Insurance Partner</Link>
                      <Link>User Agreement</Link>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Stack className="second-col">
                <Grid container>
                  <Grid item md={6}>
                    <Stack>
                      <Typography className="footer-title">
                        Global Sites
                      </Typography>
                      <Link>India</Link>
                      <Link>Singapore</Link>
                      <Link>Malaysia</Link>
                      <Link>Indonesia</Link>
                      <Link>Peru</Link>
                      <Link>Colombia</Link>
                    </Stack>
                  </Grid>
                  <Grid item md={6}>
                    <Stack>
                      <Typography className="footer-title">
                        Our Partners
                      </Typography>
                      <Link>Goibibo</Link>
                      <Link>Makemytrip</Link>
                      <Typography className="footer-title">
                        Other Services
                      </Typography>
                      <Link>Train Tickets</Link>
                      <Link>Bus Hire</Link>
                      <Link>Cab Booking</Link>
                      <Link>Tempo Traveller</Link>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Stack className="third-col">
                <Box
                  className="redbus-logo"
                  component="img"
                  alt="redbus"
                  src={redbusLogo}
                />
                <Typography className="content">
                  redBus is the world's largest online bus ticket booking
                  service trusted by over 25 million happy customers globally.
                  redBus offers bus ticket booking through its website,iOS and
                  Android mobile apps for all major routes.
                </Typography>
                <Stack direction={"row"} spacing={3} className="links">
                  <Link>
                    <FaFacebookF />
                  </Link>
                  <Link>
                    <FaTwitter />
                  </Link>
                </Stack>

                <Typography className="copyrights">
                  <FaRegCopyright /> 2023 ibibogroup All rights reserved
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
};

export default Footer;
