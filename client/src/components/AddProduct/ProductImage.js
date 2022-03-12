import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Input, IconButton } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const ProductImage = ({ imageHandleChange, selectedImages, renderImages }) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Upload Product Image
      </Typography>
      <Box className="add-images">
        <label htmlFor="icon-button-file">
          <input
            accept="image/*"
            id="icon-button-file"
            type="file"
            multiple
            className="image-input"
            onChange={imageHandleChange}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <AddPhotoAlternateIcon />
          </IconButton>
        </label>
      </Box>
      <Box className="preview-images">{renderImages(selectedImages)}</Box>
    </React.Fragment>
  );
};

export default ProductImage;
