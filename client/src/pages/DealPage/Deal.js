import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Box from "@mui/material/Box";
import Deal from "../../components/Deal/Deal";

const DealPage = () => {
  return (
    <Box>
      {/* Navbar -section */}
      <NavBar />
      {/* Navbar -section end*/}
      <Deal />
    </Box>
  );
};

export default DealPage;
