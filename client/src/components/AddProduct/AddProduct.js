import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import Review from "./Review";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";
import "./AddProduct.css";
import { v4 as uuidv4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import { createProduct, addProductImage } from "../../actions/productAction";

const steps = ["Product Details", "Upload Image", "Review Product"];

const theme = createTheme();
const AddProduct = () => {
  const dispatch = useDispatch();

  const [selectedImages, setSelectedImages] = useState([]);

  var productImageArrayList = selectedImages;

  console.log("selectedImage", selectedImages);

  const imageResponse = useSelector((state) => state);

  const imageHandleChange = (event) => {
    if (event.target.files) {
      const fileArray = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      console.log(fileArray);
      setSelectedImages((prevImages) => prevImages.concat(fileArray));
      Array.from(event.target.files).map((file) => URL.revokeObjectURL(file));
      setProductInfo({ ...productInfo, product_image: fileArray });
    }
  };
  const renderImages = (images) => {
    return images.map((img) => {
      return <img src={img} key={img} alt="img" />;
    });

    // let reader = new FileReader();
    // reader.readAsDataURL(event.target.files[0]);
    // var mediaFileData = event.target.files[0];

    // reader.onload = async (e) => {
    //   console.log(imageResponse);

    //   var tempImageData = {
    //     id: uuidv4(),
    //     name: mediaFileData.name.replace(
    //       `.${mediaFileData.name.split(".").pop()}`,
    //       ""
    //     ),
    //     date: new Date(),
    //     size: mediaFileData.size,
    //     source: mediaFileData,
    //     url: e.target.result,
    //   };

    //   console.log("tempData", tempImageData.url);
    //   setSelectedImages(tempImageData);

    //   setProductInfo({ ...productInfo, product_image: tempImageData });
    // };
  };

  const [productInfo, setProductInfo] = useState({
    product_name: "",
    brand_name: "",
    address: "",
    description: "",
    price: "",
    category: "",
    sub_category: "",
    city: "",
    dist: "",
    zipCode: "",
    product_image: [],
  });

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <ProductDetails
            productInfo={productInfo}
            setProductInfo={setProductInfo}
          />
        );
      case 1:
        return (
          <ProductImage
            selectedImages={selectedImages}
            setSelectedImages={setSelectedImages}
            imageHandleChange={imageHandleChange}
            renderImages={renderImages}
            productInfo={productInfo}
          />
        );
      case 2:
        return (
          <Review productInfo={productInfo} selectedImages={selectedImages} />
        );
      default:
        throw new Error("Unknown step");
    }
  }
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
      dispatch(createProduct(productInfo, selectedImages));
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <IconButton onClick={() => history.push("/")}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
      </Box>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Product Selling
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button
                      onClick={handleBack}
                      className="signUpBtn"
                      sx={{ mt: 3, ml: 1, color: "white" }}
                    >
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                    className="signUpBtn"
                  >
                    {activeStep === steps.length - 1 ? "Sell Product" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default AddProduct;
