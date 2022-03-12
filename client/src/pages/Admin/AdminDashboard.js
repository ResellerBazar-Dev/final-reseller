import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import AdminNavBar from "../../components/AdminComponents/AdminNavBar";
import AdminDrawer from "../../components/AdminComponents/AdminDrawer";
import { Divider } from "@mui/material";
import DashboardCard from "../../components/AdminComponents/DashboardCard";
import DashboardChart from "../../components/AdminComponents/DashboardChart";

const AdminDashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AdminNavBar />
      <AdminDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4">Dashboard</Typography>
        <Divider sx={{ mb: 5 }} />

        {/* Card Section */}
        <DashboardCard />
        {/* Card Section end */}
        {/* chart */}
        <DashboardChart />
        {/* chart end */}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
