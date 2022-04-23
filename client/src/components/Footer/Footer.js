import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import logo from "../../img/Reseller Bazzar white.svg";
import "./Footer.css";
import { useHistory } from "react-router-dom";
import PrivacyPolicy from "../Privacy&Policy/Pricacy&Policy";
import TearmsCondition from "../Tearms&Condition/Tearms&Condition";

const Footer = () => {
  const history = useHistory();

  // privacy and policy
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpenPrivacyPolicy = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClosePrivacyPolicy = () => {
    setOpen(false);
  };
  // footer end

  return (
    <Box className="footer">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 12, md: 12 }}
      >
        <Grid item xs={6} sm={6} md={4}>
          <Box>
            <img src={logo} alt="logo" />
            {/* <Typography variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut.
            </Typography> */}
          </Box>
        </Grid>
        <Grid item xs={1} sm={3} md={2}>
          <Box>
            <Typography variant="h5">Services</Typography>
            <List>
              <ListItem onClick={() => history.push("/sell-product")}>
                <ListItemText primary="Sell Product" />
              </ListItem>
              {/* <ListItem onClick={() => history.push("/ad-pricing")}>
                <ListItemText primary="Ad For Your Products" />
              </ListItem> */}
            </List>
          </Box>
        </Grid>
        {/* <Grid item xs={1} sm={3} md={4}>
          <Box>
            <Typography variant="h5">Information</Typography>
            <List>
              <ListItem onClick={handleClickOpenPrivacyPolicy()}>
                <ListItemText primary="Privacy Policy" />
              </ListItem>
              <ListItem onClick={handleClickOpenPrivacyPolicy()}>
                <ListItemText primary="Terms & Conditions" />
              </ListItem>
              <ListItem onClick={() => history.push("/help")}>
                <ListItemText primary="Help" />
              </ListItem>
            </List>
          </Box>
        </Grid> */}
      </Grid>
      <PrivacyPolicy
        open={open}
        scroll={scroll}
        handleClickOpenPrivacyPolicy={handleClickOpenPrivacyPolicy}
        handleClosePrivacyPolicy={handleClosePrivacyPolicy}
      />
      <TearmsCondition
        open={open}
        scroll={scroll}
        handleClickOpenPrivacyPolicy={handleClickOpenPrivacyPolicy}
        handleClosePrivacyPolicy={handleClosePrivacyPolicy}
      />
    </Box>
  );
};

export default Footer;
