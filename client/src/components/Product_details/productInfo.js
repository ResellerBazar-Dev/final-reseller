import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import "./Product.css";

const productInfo = () => {
  return (
    <Box>
      <Paper className="product_main_info">
        <Typography variant="h4">Product Name</Typography>
        <Typography variant="h5">Price</Typography>
        <Typography variant="h5">Brand Name</Typography>
        <Typography variant="h5">User Name</Typography>
      </Paper>
    </Box>
  );
};

export default productInfo;
