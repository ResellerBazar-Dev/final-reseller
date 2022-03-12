import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { Grid } from "@mui/material";
import "./ProductCard.css";

import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../actions/productAction";

const ProductCard = () => {
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <>
      <Box pb={10}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 12, md: 12 }}
        >
          {allData.data.map((val, index) => {
            return (
              <Grid item xs={1} sm={4} md={2} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="blob:http://localhost:3000/74614aa2-9d54-4379-b7e9-d1772fddb4d6"
                    alt="img"
                  />
                  <CardContent>
                    <Box className="name_price">
                      <Typography gutterBottom variant="h5" component="div">
                        {val.product_name}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                        ₹{val.price}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 2 }}
                    >
                      {val.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton sx={{ mx: "auto" }}>
                      <FavoriteBorderRoundedIcon fontSize="large" />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default ProductCard;
