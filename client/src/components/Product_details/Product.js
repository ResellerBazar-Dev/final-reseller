import React from "react";
import "./Product.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, Grid } from "@mui/material";
import ProductInfo from "./productInfo";
import ProductInfoMore from "./productInfoMore";

var items = [
  {
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];
function Item(props) {
  return (
    <Paper className="slider_paper">
      <img src={props.item.img} />
    </Paper>
  );
}
const Product = () => {
  return (
    <>
      <Box className="slider_main">
        <Box className="slider">
          <Carousel>
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </Box>

        {/* <ProductInfo /> */}

        <ProductInfoMore />
      </Box>
    </>
  );
};

export default Product;
