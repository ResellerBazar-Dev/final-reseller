import React, { useState, useEffect } from "react";
import "./Product.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, Grid } from "@mui/material";
import ProductInfo from "./productInfo";
import ProductInfoMore from "./productInfoMore";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../actions/productAction";
import { useParams } from "react-router-dom";

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
  const dispatch = useDispatch();

  const allData = useSelector((state) => state.productData);

  const { id } = useParams();

  const filterData = allData.data.filter((v) => v._id === id);

  console.log(id);
  console.log(allData);
  console.log(filterData);

  useEffect((id) => {
    dispatch(getProduct(id));
  }, []);

  return (
    <>
      <Box className="slider_main">
        <Box className="slider">
          <Carousel>
            {filterData[0]?.product_image?.map((item, i) => (
              // <Item key={i} item={item[0]} />
              <img src={item} />
            ))}
          </Carousel>
        </Box>

        {/* <ProductInfo /> */}

        <ProductInfoMore filterData={filterData} />
      </Box>
    </>
  );
};

export default Product;
