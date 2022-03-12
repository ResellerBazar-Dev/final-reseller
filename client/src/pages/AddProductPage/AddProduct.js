import React from "react";
import Box from "@mui/material/Box";
import AddProductForm from "../../components/AddProduct/AddProduct";
import NavBar from "../../components/NavBar/NavBar";

const AddProduct = () => {
  return (
    <Box>
      <NavBar />
      <AddProductForm />
    </Box>
  );
};

export default AddProduct;
