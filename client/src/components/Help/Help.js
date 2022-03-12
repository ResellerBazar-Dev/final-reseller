import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logoIcon from "../../img/icon.svg";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";

const theme = createTheme();

const Help = () => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <IconButton onClick={() => history.push("/")}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
      </Box>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <ConnectWithoutContactIcon />
          </Avatar> */}
          <Box>
            <img src={logoIcon} alt="logo" />
          </Box>
          <Typography component="h1" variant="h4" className="title">
            Help
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Phone Number"
              type="text"
              id="phone"
            />
            <TextField
              required
              fullWidth
              margin="normal"
              id="outlined-multiline-static"
              //   label="Multiline"
              label="Please Enter Your Complaints"
              multiline
              rows={4}
              //   defaultValue="Please Enter Your Complaints"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="signInBtn"
            >
              connect with us
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Help;
