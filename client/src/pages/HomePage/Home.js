import React, { useEffect } from "react";
import { Box } from "@mui/material";

import Navbar from "../../components/NavBar/NavBar";
import Products from "../../components/ProductCards/ProductCard";
import Footer from "../../components/Footer/Footer";

import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../actions/productAction";

const Home = () => {
  const dispatch = useDispatch();
  // const allData = useSelector((state) => state.productData);

  // console.log(allData.data);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <Box>
      {/* Navbar section */}
      <Navbar />
      {/* Navbar section */}
      {/* products Sections */}
      <Products />
      {/* products Sections */}
      {/* Footer Section */}
      <Footer />
      {/* Footer Section */}
    </Box>
  );
};

export default Home;
