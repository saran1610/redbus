import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "./BannerTiles.scss";

import primoImg from "../../../assets/images/PRIMO.png";
import flexiImg from "../../../assets/images/FLEXITICKET.png";
import topImg from "../../../assets/images/TOP_RATED.png";
import returnImg from "../../../assets/images/RETURN_TRIP.png";
import trailImg from "../../../assets/images/TRAIL_OFFERS.png"

import { RiShieldStarLine } from "react-icons/ri";

const BannerTiles = () => {
  return (
    <>
      <Stack className="tiles-container">
        <ul className="tiles-list">
          <li>
            <Box
              className="tiles-img"
              component="img"
              alt="redDeal"
              src={primoImg}
            />
          </li>
          <li>
            <Box
              className="tiles-img"
              component="img"
              alt="redDeal"
              src={flexiImg}
            />
          </li>
          <li>
            <Box
              className="tiles-img"
              component="img"
              alt="redDeal"
              src={topImg}
            />
          </li>
          <li>
            <Box
              className="tiles-img"
              component="img"
              alt="redDeal"
              src={returnImg}
            />
          </li>
          <li>
            <Box
              className="tiles-img"
              component="img"
              alt="redDeal"
              src={trailImg}
            />
          </li>
        </ul>
        <Stack direction={"row"} className="note-area">
          <RiShieldStarLine className="shield-star"/>
          <Typography className="note">
            All bus ratings include safety as a major factor
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default BannerTiles;
