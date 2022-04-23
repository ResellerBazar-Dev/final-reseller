import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import { useDispatch } from "react-redux";
import { login } from "../../actions/authAction";
import { useHistory } from "react-router-dom";

const LoginDialog = ({ open, handleClose }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });

    dispatch(login(userLogin));
    handleClose();
    // history.push("/");
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle>{"Signin "}</DialogTitle> */}
        <DialogContent>
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
              autoComplete="email"
              onChange={(e) =>
                setUserLogin({ ...userLogin, ["email"]: e.target.value })
              }
              value={userLogin?.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) =>
                setUserLogin({ ...userLogin, ["password"]: e.target.value })
              }
              value={userLogin?.password}
            />

            <Link href="/signup" variant="body2" className="signInLinks">
              {"Don't have an account? Sign Up"}
            </Link>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="signInBtn"
            onClick={() => handleSubmit()}
          >
            Sign In
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginDialog;
