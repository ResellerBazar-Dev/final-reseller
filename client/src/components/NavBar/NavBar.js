import React, { useState, useeffect, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Box,
  Avatar,
  MenuItem,
  IconButton,
  Badge,
  InputBase,
  Menu,
  Divider,
  ListItemIcon,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import Logout from "@mui/icons-material/Logout";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LockIcon from "@mui/icons-material/Lock";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SellIcon from "@mui/icons-material/Sell";
import "./Navbar.css";
import logo from "../../img/Reseller Bazzar.svg";
import { useHistory } from "react-router-dom";
import LoginDialog from "../Login_Dialog/LoginDialog";

import { useSelector, useDispatch } from "react-redux";
import { getAllwishlist } from "../../actions/wishlistAction";

import { logOut } from "../../actions/authAction";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "beige",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loggedInUser = useSelector((state) => state.auth);
  const wishlistData = useSelector((state) => state.wishlistData);

  // ------------ Profile menu ---------//
  const [profileMenu, setProfileMenu] = useState(null);
  const open = Boolean(profileMenu);
  const handleClick = (event) => {
    setProfileMenu(event.currentTarget);
  };
  const handleClose = () => {
    setProfileMenu(null);
  };

  // add-product befor login page
  const [openLoginDialog, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    if (loggedInUser?.token !== null) {
      history.push("/deals");
    } else {
      setOpen(true);
    }
  };

  const handleCloseLoginDialog = () => {
    setOpen(false);
  };
  // ------------ Profile menu ---------//
  // ------------ Drawer ---------//
  // const [drawer, setDrawer] = useState(null);
  // const drawerOpen = Boolean(drawer);
  // const drawerhandleClick = (event) => {
  //   setDrawer(event.currentTarget);
  // };
  // const drawerhandleClose = () => {
  //   setDrawer(null);
  // };
  // ------------ Drawer ---------//

  useEffect(() => {
    dispatch(getAllwishlist());
  }, []);

  return (
    <>
      <Box sx={{ pb: 10 }}>
        <AppBar color="inherit">
          <Toolbar>
            {/* <Box className="mobileMenuIcon">
              <IconButton edge="start" onClick={drawerhandleClick}>
                <MenuRoundedIcon style={{ fontSize: "2rem" }} />
              </IconButton>
              <Drawer
                anchorEl={drawer}
                open={drawerOpen}
                onClose={drawerhandleClose}
                onClick={drawerhandleClose}
              >
                <ListItem button>
                  <ListItemIcon>
                    <FavoriteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Whishlist" />
                </ListItem>
              </Drawer>
            </Box> */}
            <Box
              style={{ flexGrow: "1", cursor: "pointer" }}
              onClick={() => history.push("/")}
            >
              <img src={logo} alt="logo" />
            </Box>
            {/* <Search className="searchBarLg">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search> */}

            <IconButton
              size="large"
              color="inherit"
              // onClick={() => history.push("/sell-product")}
              onClick={() => handleClickOpen()}
            >
              <SellIcon style={{ fontSize: "2rem" }} />
            </IconButton>
            <LoginDialog
              handleClose={handleCloseLoginDialog}
              open={openLoginDialog}
            />
            <IconButton
              size="large"
              color="inherit"
              onClick={() =>
                loggedInUser?.token !== null
                  ? history.push("/wishlist")
                  : history.push("/signin")
              }
            >
              <Badge badgeContent={wishlistData?.data?.length} color="error">
                <FavoriteIcon style={{ fontSize: "2rem" }} />
              </Badge>
            </IconButton>

            <IconButton
              onClick={handleClick}
              size="large"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar>M</Avatar>
            </IconButton>
            <Menu
              anchorEl={profileMenu}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              className="profileMenuItems"
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem
                onClick={() => history.push("/user-profile")}
                style={{
                  display: loggedInUser?.token === null ? "none" : "flex",
                }}
              >
                <ListItemIcon>
                  <PersonRoundedIcon />
                </ListItemIcon>
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/deals")}
                style={{
                  display: loggedInUser?.token === null ? "none" : "flex",
                }}
              >
                <ListItemIcon>
                  <StorefrontRoundedIcon />
                </ListItemIcon>
                My Deals
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/admin-dashboard")}
                style={{
                  display: loggedInUser?.token === null ? "none" : "flex",
                }}
              >
                <ListItemIcon>
                  <AdminPanelSettingsIcon />
                </ListItemIcon>
                Admin
              </MenuItem>
              <Divider
                style={{
                  display: loggedInUser?.token === null ? "none" : "flex",
                }}
              />
              <MenuItem
                onClick={() => history.push("/signin")}
                style={{
                  display: loggedInUser?.token === null ? "flex" : "none",
                }}
              >
                <ListItemIcon>
                  <LockIcon />
                </ListItemIcon>
                Sign In
              </MenuItem>
              <MenuItem
                onClick={() => history.push("/signup")}
                style={{
                  display: loggedInUser?.token === null ? "flex" : "none",
                }}
              >
                <ListItemIcon>
                  <LockIcon />
                </ListItemIcon>
                Sign Up
              </MenuItem>
              <MenuItem
                onClick={() => dispatch(logOut())}
                style={{
                  display: loggedInUser?.token === null ? "none" : "flex",
                }}
              >
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
