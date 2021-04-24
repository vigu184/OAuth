import React from "react";
import { Button, TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import ReactDOM from "react-dom";

class Login extends React.Component {
  render() {
    return (
      <Grid>
        <form noValidate autoComplete="off">
          <TextField
            id="filled-basic"
            label="Enter User Name"
            variant="filled"
          />
          <TextField
            id="filled-basic"
            label="Enter Password"
            variant="filled"
          />
        </form>
      </Grid>
    );
  }
}

export default Login;
