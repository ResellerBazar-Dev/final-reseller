import React, { useEffect } from "react";
import { Paper, Typography, Grid, Avatar, Box } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "../../actions/authAction";

const ProductInfoMore = ({ filterData }) => {
  console.log(filterData[0]);

  const dispatch = useDispatch();

  return (
    <>
      <Grid
        className="productInfo_main"
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 12, md: 12 }}
      >
        <Grid item xs={12} sm={4} md={10}>
          <Paper sx={{ padding: "15px" }}>
            <Box className="name_price_details">
              <Typography variant="h5" style={{ fontWeight: 700 }}>
                {filterData[0]?.product_name}
              </Typography>
              <Typography variant="h5" style={{ fontWeight: 700 }}>
                ₹{filterData[0]?.price}
              </Typography>
            </Box>
            <Typography>
              <span style={{ fontWeight: 700 }}>Product Brand: </span>
              {filterData[0]?.brand_name}
            </Typography>
            <Typography>
              <span style={{ fontWeight: 700 }}>Product Category: </span>
              {filterData[0]?.category}
            </Typography>
            <Typography>
              <span style={{ fontWeight: 700 }}>Product Sub-Category: </span>
              {filterData[0]?.sub_category}
            </Typography>
            <Typography>
              <span style={{ fontWeight: 700 }}>Product Description: </span>
              {filterData[0]?.description}
            </Typography>
            <Typography>
              <span style={{ fontWeight: 700 }}>Address: </span>
              {filterData[0]?.address}
            </Typography>
            <Typography style={{ fontWeight: 700 }}>
              Zip Code: {filterData[0]?.zipCode}
            </Typography>
            <Typography style={{ fontWeight: 700 }}>
              State: {filterData[0]?.state}{" "}
            </Typography>
            <Typography style={{ fontWeight: 700 }}>
              city: {filterData[0]?.city}{" "}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Paper sx={{ padding: "15px" }}>
            <Avatar />
            <Typography>
              Name:{filterData[0]?.user[0]?.first_name}{" "}
              {filterData[0]?.user[0]?.last_name}
            </Typography>
            <Typography>
              <span>Phone: {filterData[0]?.user[0]?.phone}</span>
            </Typography>
            <Typography>
              <span>Email: {filterData[0]?.user[0]?.email}</span>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductInfoMore;
