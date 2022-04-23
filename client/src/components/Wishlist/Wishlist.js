import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { getAllwishlist, deleteWishlist } from "../../actions/wishlistAction";

import "./Wishlist.css";

const Wishlist = () => {
  const history = useHistory();
  const wishlistData = useSelector((state) => state.wishlistData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllwishlist());
  }, []);

  return (
    <Box pb={10}>
      <Typography variant="h4" className="title">
        Wishlist
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 12, md: 8 }}
        sx={{ padding: "50px" }}
        className="mainGrid"
      >
        {wishlistData.data.map((val, index) => (
          <Grid item xs={1} sm={4} md={2} key={index}>
            <Card sx={{ maxWidth: "100%" }} className="card">
              <CardMedia
                component="img"
                height="140"
                image={val.product[0]?.product_image[0]}
                alt="green iguana"
                onClick={() => history.push(`/product/${val.product[0]._id}`)}
              />
              <CardContent className="content-details">
                <Box className="name_price">
                  <Typography gutterBottom variant="h5" component="div">
                    {val.product[0]?.product_name}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {val.product[0]?.price}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {val.product[0]?.description}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  sx={{ mx: "auto", color: "#D10024" }}
                  onClick={() => dispatch(deleteWishlist(val._id))}
                >
                  <DeleteRoundedIcon fontSize="large" />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Wishlist;
