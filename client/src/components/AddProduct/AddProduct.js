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
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../actions/productAction";

const steps = ["Product Details", "Upload Image", "Review Product"];

const theme = createTheme();
const AddProduct = () => {
  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => state.auth);


  const [selectedImages, setSelectedImages] = useState([]);


  const imageHandleChange = (event) => {
    if (event.target.files) {
      //for preview images
      const fileArrayPreview = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedImages((prevImages) => prevImages.concat(fileArrayPreview));

      // for upload images
      const fileArray = event.target.files;
      setProductInfo({ ...productInfo, product_image: fileArray });
    }
  };
  const renderImages = (images) => {
    return images.map((img) => {
      return <img src={img} key={img} alt="img" />;
    });
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
    state: "",
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
      if (productInfo.product_name !== "") {
        const formData = new FormData();
        formData.append("user_id", loggedInUser?.user?._id);
        formData.append("product_name", productInfo.product_name);
        formData.append("brand_name", productInfo.brand_name);
        formData.append("description", productInfo.description);
        formData.append("category", productInfo.category);
        formData.append("sub_category", productInfo.sub_category);
        formData.append("price", productInfo.price);
        formData.append("city", productInfo.city);
        formData.append("state", productInfo.state);
        formData.append("zipCode", productInfo.zipCode);
        formData.append("address", productInfo.address);
        for (let item of productInfo.product_image) {
          formData.append("product_images", item);
        }
        dispatch(createProduct(formData));
      }
    } else {
      // setProductInfo("");
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
