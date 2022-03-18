import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../actions/categoryAction";
import { getAllSubCategories } from "../../actions/subCategoryAction";

const ProductDetails = ({ productInfo, setProductInfo }) => {
  const catData = useSelector((state) => state.categoryData);
  const subCatdata = useSelector((state) => state.subCategoryData);
  const dispatch = useDispatch();

  console.log("cat", catData);
  console.log("subCat", subCatdata);

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllSubCategories());
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Product Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            label="Product Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={productInfo.product_name}
            onChange={(e) =>
              setProductInfo({ ...productInfo, product_name: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth required>
            <InputLabel id="demo-simple-select-standard-label">
              Brand Name
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Age"
              value={productInfo.brand_name}
              onChange={(e) =>
                setProductInfo({
                  ...productInfo,
                  brand_name: e.target.value,
                })
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth required>
            <InputLabel id="demo-simple-select-standard-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Age"
              value={productInfo.category}
              onChange={(e) =>
                setProductInfo({
                  ...productInfo,
                  category: e.target.value,
                })
              }
            >
              {catData.data.map((catVal, id) => {
                return (
                  <MenuItem value={catVal._id} key={id}>
                    {catVal.category_name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth required>
            <InputLabel id="demo-simple-select-standard-label">
              Sub-Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Age"
              value={productInfo.sub_category}
              onChange={(e) =>
                setProductInfo({
                  ...productInfo,
                  sub_category: e.target.value,
                })
              }
            >
              {subCatdata.data.map((catVal, id) => {
                return (
                  <MenuItem value={catVal._id} key={id}>
                    {catVal.sub_category_name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address"
            fullWidth
            variant="standard"
            value={productInfo.address}
            onChange={(e) =>
              setProductInfo({ ...productInfo, address: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Description"
            multiline
            fullWidth
            variant="standard"
            value={productInfo.description}
            onChange={(e) =>
              setProductInfo({ ...productInfo, description: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Price"
            fullWidth
            variant="standard"
            value={productInfo.price}
            onChange={(e) =>
              setProductInfo({ ...productInfo, price: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            variant="standard"
            value={productInfo.city}
            onChange={(e) =>
              setProductInfo({ ...productInfo, city: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State"
            fullWidth
            variant="standard"
            value={productInfo.dist}
            onChange={(e) =>
              setProductInfo({ ...productInfo, dist: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            variant="standard"
            value={productInfo.zipCode}
            onChange={(e) =>
              setProductInfo({ ...productInfo, zipCode: e.target.value })
            }
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ProductDetails;
