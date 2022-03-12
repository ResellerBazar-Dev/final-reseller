import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import AdminNavBar from "../../components/AdminComponents/AdminNavBar";
import AdminDrawer from "../../components/AdminComponents/AdminDrawer";
import { Divider } from "@mui/material";

const AdminSubCategory = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AdminNavBar />
      <AdminDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4">Sub-Categories</Typography>
        <Divider sx={{ mb: 5 }} />
      </Box>
    </Box>
  );
};

export default AdminSubCategory;
