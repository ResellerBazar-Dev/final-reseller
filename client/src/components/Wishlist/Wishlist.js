import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

import "./Wishlist.css";

const Wishlist = () => {
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
        {Array.from(Array(8)).map((_, index) => (
          <Grid item xs={1} sm={4} md={2} key={index}>
            <Card sx={{ maxWidth: "100%" }} className="card">
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="green iguana"
              />
              <CardContent>
                <Box className="name_price">
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    $30000
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton sx={{ mx: "auto", color: "#D10024" }}>
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
