import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import "./Deal.css";
import { useHistory } from "react-router-dom";

import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions/productAction";
import { loadUser } from "../../actions/authAction";

const Deal = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const productData = useSelector((state) => state.productData);
  const loggedInUser = useSelector((state) => state.auth);

  const dealFilter = productData?.data?.filter(
    (v) => v.user_id === loggedInUser?.user?._id
  );

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(loadUser());
  }, []);

  return (
    <Box>
      <Typography variant="h4" className="title" pb={2}>
        Deals
      </Typography>
      <Grid
        container
        columns={{ xs: 2, sm: 12, md: 12 }}
        spacing={{ xs: 2, md: 3 }}
        className="main_grid"
      >
        <Grid item xs={12} sm={12} md={2} className="deal-card-details-mobile">
          <Card sx={{ width: "100%" }}>
            <CardContent className="card-content">
              <Typography variant="h6" pb={2}>
                Hii,{loggedInUser?.user?.first_name}{" "}
                {loggedInUser?.user?.last_name}
              </Typography>
              {/* <Typography variant="h5">25 Products</Typography> */}
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="signUpBtn"
                onClick={() => history.push("/sell-product")}
              >
                Sell
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2} sm={12} md={10}>
          <Grid
            container
            columns={{ xs: 2, sm: 12, md: 12 }}
            spacing={{ xs: 2, md: 3 }}
          >
            {dealFilter.map((value, index) => (
              <Grid item xs={1} sm={4} md={3} key={index}>
                <Card sx={{ maxWidth: "100%" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={value?.product_image[0]}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Box className="name_price">
                      <Typography gutterBottom variant="h5" component="div">
                        {value?.product_name}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                        ₹{value?.price}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ me: "auto" }}>
                    {/* <IconButton sx={{ color: "#0000FF" }}>
                      <EditRoundedIcon fontSize="large" />
                    </IconButton> */}
                    {/* <IconButton sx={{ color: "#D10024" }}>
                      <DeleteRoundedIcon fontSize="large" />
                    </IconButton> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={2} className="deal-card-details">
          <Card sx={{ maxWidth: "100%" }}>
            <CardContent className="card-content">
              <Typography variant="h6" pb={2}>
                Hii,{loggedInUser?.user?.first_name}{" "}
                {loggedInUser?.user?.last_name}
              </Typography>
              {/* <Typography variant="h5">25 Products</Typography> */}
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="signUpBtn"
                onClick={() => history.push("/sell-product")}
              >
                Sell
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Deal;
