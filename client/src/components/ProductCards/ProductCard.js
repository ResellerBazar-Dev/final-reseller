import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { Grid } from "@mui/material";
import "./ProductCard.css";
import { useHistory, useParams } from "react-router-dom";

import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useSelector, useDispatch } from "react-redux";
import { getAllProducts, getProduct } from "../../actions/productAction";
import {
  createWishlist,
  deleteWishlist,
  getAllwishlist,
} from "../../actions/wishlistAction";

const ProductCard = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.productData);
  const wishlistData = useSelector((state) => state.wishlistData);

  const [flag, setFlag] = useState("");

  const filterWishlist = allData.data.filter(
    (v) => v._id === wishlistData?.data?.product?._id
  );
  const filterWishlistId = wishlistData.data.filter(
    (v) => v.product?._id === allData?.data?._id
  );

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllwishlist());
  }, [flag]);

  const addDeleteWishlist = (val) => {
    dispatch(createWishlist(val._id));

    // const delete_id = wishlistData?.data?.filter(
    //   (v) => v?.product?._id === val?._id
    // );
    // dispatch(deleteWishlist(delete_id));
    console.log("hello");
  };
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
                    height="200"
                    image={val.product_image[0]}
                    alt="img"
                    onClick={() => history.push(`/product/${val._id}`)}
                  />
                  <CardContent className="content-details">
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
                    <IconButton
                      sx={{ mx: "auto" }}
                      onClick={
                        () => addDeleteWishlist(val)

                        // filterWishlist[0] === undefined
                        //   ? dispatch(createWishlist(val._id)) &&
                        //     setFlag("update", Date.now())
                        //   : dispatch(
                        //       deleteWishlist(filterWishlistId?.product_id)
                        //     )
                      }
                    >
                      <FavoriteBorderRoundedIcon fontSize="large" />

                      {/* {filterWishlistId[0] === undefined ? (
                        <FavoriteBorderRoundedIcon fontSize="large" />
                      ) : (
                        <FavoriteIcon
                          fontSize="large"
                          style={{ color: "#D10024" }}
                        />
                      )} */}
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
