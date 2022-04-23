import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { createProduct, addProductImage } from "../../actions/productAction";

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];

const Review = ({ productInfo, selectedImages }) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review Product
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Box className="preview-images">
            {selectedImages.map((img) => {
              return <img src={img} />;
            })}
          </Box>

          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Product Details
          </Typography>
          <Grid container sx={{ ml: "auto" }}>
            <Grid item xs={12} sm={6}>
              <Typography gutterBottom>
                Product Name: {productInfo.product_name}
              </Typography>
              <Typography gutterBottom>
                Product Brand: {productInfo.brand_name}
              </Typography>
              <Typography gutterBottom>
                Product Category: {productInfo.category}
              </Typography>
              <Typography gutterBottom>
                Product Sub Category: {productInfo.sub_category}
              </Typography>
              <Typography gutterBottom>
                Product Description: {productInfo.description}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography gutterBottom>
                Product Price: {productInfo.price}
              </Typography>
              <Typography gutterBottom>city: {productInfo.city}</Typography>
              <Typography gutterBottom>state: {productInfo.state}</Typography>
              <Typography gutterBottom>
                postal code: {productInfo.zipCode}
              </Typography> 
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Review;
