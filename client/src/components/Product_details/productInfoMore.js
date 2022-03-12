import React from "react";
import { Paper, Typography, Grid, Avatar } from "@mui/material";

const productInfoMore = () => {
  return (
    <>
      <Grid
        className="productInfo_main"
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 12, md: 12 }}
      >
        <Grid item xs={1} sm={4} md={10}>
          <Paper sx={{ padding: "15px" }}>
            <Typography variant="h5" style={{ fontWeight: 700 }}>
              Product Name
            </Typography>
            <Typography variant="h5" style={{ fontWeight: 700 }}>
              Price
            </Typography>
            <Typography variant="h5" style={{ fontWeight: 700 }}>
              Brand Name
            </Typography>
            <Typography>
              <span style={{ fontWeight: 700 }}>Product Description: </span>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is
            </Typography>
            <Typography>
              <span style={{ fontWeight: 700 }}>Address: </span>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is
            </Typography>
            <Typography style={{ fontWeight: 700 }}>Zip Code: </Typography>
            <Typography style={{ fontWeight: 700 }}>Dis: </Typography>
            <Typography style={{ fontWeight: 700 }}>city: </Typography>
          </Paper>
        </Grid>
        <Grid item xs={1} sm={4} md={2}>
          <Paper sx={{ padding: "15px" }}>
            <Avatar />
            <Typography>Rajkumar Rupapara</Typography>
            <Typography>
              <span>Phone: 9909719458</span>
            </Typography>
            <Typography>
              <span>Email: </span>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default productInfoMore;
