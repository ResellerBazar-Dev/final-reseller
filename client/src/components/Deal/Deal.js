import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import "./Deal.css";
import { useHistory } from "react-router-dom";

import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const Deal = () => {
  const history = useHistory();
  return (
    <Box>
      <Typography variant="h4" className="title" pb={2}>
        Deals
      </Typography>
      <Grid
        container
        columns={{ xs: 2, sm: 12, md: 12 }}
        spacing={{ xs: 2, md: 3 }}
        className="main_grid"
      >
        <Grid item xs={12} sm={12} md={2} className="deal-card-details-mobile">
          <Card sx={{ width: "100%" }}>
            <CardContent className="card-content">
              <Typography variant="h6" pb={2}>
                Hii,Prasant Gajera
              </Typography>
              <Typography variant="h5">25 Products</Typography>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="signUpBtn"
              >
                Sell
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2} sm={12} md={10}>
          <Grid
            container
            columns={{ xs: 2, sm: 12, md: 12 }}
            spacing={{ xs: 2, md: 3 }}
          >
            {Array.from(Array(12)).map((_, index) => (
              <Grid item xs={1} sm={4} md={3} key={index}>
                <Card sx={{ maxWidth: "100%" }}>
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ me: "auto" }}>
                    <IconButton sx={{ color: "#0000FF" }}>
                      <EditRoundedIcon fontSize="large" />
                    </IconButton>
                    <IconButton sx={{ color: "#D10024" }}>
                      <DeleteRoundedIcon fontSize="large" />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={2} className="deal-card-details">
          <Card sx={{ maxWidth: "100%" }}>
            <CardContent className="card-content">
              <Typography variant="h6" pb={2}>
                Hii,Prasant Gajera
              </Typography>
              <Typography variant="h5">25 Products</Typography>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="signUpBtn"
                onClick={() => history.push("/sell-product")}
              >
                Sell
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Deal;
