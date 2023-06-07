import React from "react";
import "./Filters.scss";
import { Box, Stack, Typography } from "@mui/material";

import { MdLocationOn, MdStarOutline } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";

const Filters = () => {
  return (
    <>
      <Stack className="filter-menu">
        <Stack className="add-filter">
          <ul className="add-filter-list">
            <li className="list-item">
              <Box>
                <MdLocationOn />
                <span>Live Tracking</span>
              </Box>
              <Box>
                <BsCheckLg />
              </Box>
            </li>
            <li className="list-item">
              <Box>
                <MdStarOutline />
                <span>Primo Bus</span>
              </Box>
              <Box>
                <BsCheckLg />
              </Box>
            </li>
          </ul>
        </Stack>
      </Stack>
    </>
  );
};

export default Filters;
