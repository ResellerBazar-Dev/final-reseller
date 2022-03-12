import React from "react";
import ListItem from "@mui/material/ListItem";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "./Admin.css";
import { useHistory } from "react-router-dom";

// icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { Typography } from "@mui/material";

const drawerWidth = 240;

const AdminDrawer = () => {
  const history = useHistory();
  return (
    <Box>
      <Drawer
        variant="permanent"
        className="drawer"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List className="drawer_menu_list">
            <ListItem button onClick={() => history.push("/admin-dashboard")}>
              <DashboardIcon sx={{ mr: 4 }} />
              <Typography>Dashborad</Typography>
            </ListItem>
            <ListItem button onClick={() => history.push("/admin-user")}>
              <GroupRoundedIcon sx={{ mr: 4 }} />
              <Typography>Users</Typography>
            </ListItem>
            <ListItem button onClick={() => history.push("/admin-category")}>
              <CategoryRoundedIcon sx={{ mr: 4 }} />
              <Typography>Categories</Typography>
            </ListItem>
            <ListItem button onClick={() => history.push("/admin-subcategory")}>
              <CategoryRoundedIcon sx={{ mr: 4 }} />
              <Typography>SubCategories</Typography>
            </ListItem>
            <ListItem button onClick={() => history.push("/admin-help")}>
              <HelpRoundedIcon sx={{ mr: 4 }} />
              <Typography>Help</Typography>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default AdminDrawer;
