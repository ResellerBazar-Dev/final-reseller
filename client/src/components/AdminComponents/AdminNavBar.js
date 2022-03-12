import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import logo from "../../img/Reseller Bazzar.svg";

const AdminNavBar = () => {
  return (
    <Box className="admin_navbar">
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <img src={logo} alt="logo" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AdminNavBar;
