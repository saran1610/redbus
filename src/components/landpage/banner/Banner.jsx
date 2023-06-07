import React from "react";
import { Stack } from "@mui/material";

import bannerImg from "../../../assets/images/Banner.png";

const Banner = () => {
  return (
    <>
      <Stack
        className="banner"
        sx={{ backgroundImage: `url(${bannerImg})` }}
        height={400}
      ></Stack>
    </>
  );
};

export default Banner;


