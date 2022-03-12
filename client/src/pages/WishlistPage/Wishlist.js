import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Box from "@mui/material/Box";
import Wishlist from "../../components/Wishlist/Wishlist";

const WishlistPage = () => {
  return (
    <Box>
      {/* Navbar -section */}
      <NavBar />
      {/* Navbar -section end*/}
      <Wishlist />
    </Box>
  );
};

export default WishlistPage;
