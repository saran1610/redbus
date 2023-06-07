import React from "react";
import "./ModifySearch.scss";
import { Container, Stack, Typography } from "@mui/material";

import { BsArrowRight } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ModifySearch = () => {
  return (
    <>
      <Stack className="modify-search">
        <Container maxWidth="xl">
          <Stack direction={"row"} className="search-content">
            <Typography className="content">Chennai</Typography>
            <BsArrowRight className="content-icon"/>
            <Typography className="content">Tirunelveli</Typography>
            <FiChevronLeft className="content-icon" />
            <Typography className="content">09 May Tue</Typography>
            <FiChevronRight className="content-icon" />
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default ModifySearch;
