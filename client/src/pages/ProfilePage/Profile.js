import React from "react";
import { Box } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import ProfileForm from "../../components/Profile/Profile";

const Profile = () => {
  return (
    <Box>
      {/* Navbar -section */}
      <NavBar />
      {/* Navbar -section end*/}
      <ProfileForm />
    </Box>
  );
};

export default Profile;
