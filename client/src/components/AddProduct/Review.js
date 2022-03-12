import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { createProduct, addProductImage } from "../../actions/productAction";

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];

const Review = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review Product
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Box className="preview-images">
            <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          </Box>

          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Product Details
          </Typography>
          <Grid container sx={{ ml: "auto" }}>
            <Grid item xs={12} sm={6}>
              <Typography gutterBottom>Product Name</Typography>
              <Typography gutterBottom>Product Brand</Typography>
              <Typography gutterBottom>Product Category</Typography>
              <Typography gutterBottom>Product Sub Category</Typography>
              <Typography gutterBottom>Product Description</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography gutterBottom>Product Price</Typography>
              <Typography gutterBottom>city</Typography>
              <Typography gutterBottom>state</Typography>
              <Typography gutterBottom>postal code</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Review;
