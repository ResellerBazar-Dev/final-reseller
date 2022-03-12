import React from "react";

import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "./Admin.css";

// icons
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from "@mui/icons-material/Person";
import HelpIcon from "@mui/icons-material/Help";

const DashboardCard = () => {
  return (
    <>
      <Paper
        className="dashboard_card_main dashboard-card"
        sx={{ m: "auto" }}
        elevation={3}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 2,
          }}
        >
          <Box className="">
            <PersonIcon fontSize="large" />
          </Box>
          <Typography variant="h6" sx={{ alignSelf: "center" }}>
            5000
          </Typography>
        </Box>
      </Paper>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 12, md: 12 }}
      >
        <Grid item xs={1} sm={4} md={3}>
          <Paper className="dashboard_card1 dashboard-card" elevation={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: 5,
              }}
            >
              <Box className="dashboard_card_icon">
                <Inventory2Icon fontSize="large" />
              </Box>
              <Typography variant="h6" sx={{ alignSelf: "center" }}>
                Products
              </Typography>
              <Typography variant="h6" sx={{ alignSelf: "center" }}>
                500
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={1} sm={4} md={3}>
          <Paper className="dashboard_card2 dashboard-card" elevation={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: 5,
              }}
            >
              <Box className="dashboard_card_icon">
                <CategoryIcon fontSize="large" />
              </Box>
              <Typography variant="h6" sx={{ alignSelf: "center" }}>
                Category
              </Typography>
              <Typography variant="h6" sx={{ alignSelf: "center" }}>
                500
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={1} sm={4} md={3}>
          <Paper className="dashboard_card3 dashboard-card" elevation={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: 5,
              }}
            >
              <Box className="dashboard_card_icon">
                <CategoryIcon fontSize="large" />
              </Box>
              <Typography variant="h6" sx={{ alignSelf: "center" }}>
                Sub-Category
              </Typography>
              <Typography variant="h6" sx={{ alignSelf: "center" }}>
                500
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={1} sm={4} md={3}>
          <Paper className="dashboard_card4 dashboard-card" elevation={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: 5,
              }}
            >
              <Box className="dashboard_card_icon">
                <HelpIcon fontSize="large" />
              </Box>
              <Typography variant="h6" sx={{ alignSelf: "center" }}>
                Complaints
              </Typography>
              <Typography variant="h6" sx={{ alignSelf: "center" }}>
                500
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardCard;
