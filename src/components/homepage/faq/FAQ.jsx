import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Container, Grid, Stack } from "@mui/material";

import "./FAQ.scss";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const FAQ = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Stack className="faq-container">
        <Container>
          <Grid container>
            <Grid item md={12}>
              <Stack className="faq-content">
                <Typography className="faq-h4" variant="h4">
                  FAQ's Related to Bus Booking with redBus
                </Typography>
                <Stack className="faq-area">
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography>
                        How can I cancel my bus ticket on redBus?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Yes, you can cancel your bus ticket on redBus. All you
                        have to do is log in to the redBus website or app and
                        follow the cancellation procedure or simply visit:
                        https://www.redbus.in/Cancellation You can even call the
                        customer care number of redBus to get your online bus
                        booking cancelled. redBus offers a 100% refund on bus
                        cancellation if it is attributed to either redBus or the
                        bus operator.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                    >
                      <Typography>
                        How can I reschedule my bus ticket?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        To reschedule your bus ticket on redBus, follow these
                        steps: 1. Visit https://www.redbus.in/reschedule 2.
                        Search for your bus ticket by entering your ticket
                        number and registered email ID. 3. Verify your ticket
                        details and select the date to reschedule your journey.
                        4. Select a bus operator, verify every detail, and make
                        your payment if any difference in bus ticket prices
                        needs to be cleared.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <AccordionSummary
                      aria-controls="panel3d-content"
                      id="panel3d-header"
                    >
                      <Typography>
                        Do I need a print out of my bus ticket to board a bus?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        No, you do not need to print out your bus ticket while
                        boarding a bus. You can present your M-ticket or
                        e-ticket on your mobile device before boarding the bus.
                        It is advisable to carry a government-issued ID to
                        verify your identity before boarding the bus.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                  >
                    <AccordionSummary
                      aria-controls="panel4d-content"
                      id="panel4d-header"
                    >
                      <Typography>
                        What does a PNR number on my bus ticket mean?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        PNR stands for 'Passenger Name Record.' This is
                        generally represented as a 10-digit number on your
                        M-ticket or E-ticket.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                  >
                    <AccordionSummary
                      aria-controls="panel5d-content"
                      id="panel5d-header"
                    >
                      <Typography>
                        Can I track my bus online using redBus?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Yes, you can track your bus online using redBus. To do
                        so, you have to book your bus ticket with redBus. You
                        will get the bus number and tracking link 30 mins before
                        your journey, using which you can track the bus from
                        your mobile.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel6"}
                    onChange={handleChange("panel6")}
                  >
                    <AccordionSummary
                      aria-controls="panel6d-content"
                      id="panel6d-header"
                    >
                      <Typography>What is rYde?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Looking to book an outstation cab, hourly rental service
                        for travelling within the city, or airport transfers?
                        rYde is your one-stop solution! redBus has introduced
                        rYde for travelers seeking intra and intercity cabs with
                        professional drivers and great prices. rYde also offers
                        24/7 customer support, safe and hygienic vehicles, GPS
                        tracking, and a travel safety kit. Passengers can choose
                        from SUVs, Sedans, Hatchbacks, tempo travelers, mini
                        buses, and large buses.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
};

export default FAQ;
