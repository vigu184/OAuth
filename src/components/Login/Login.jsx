import React from "react";
import { Button, TextField } from "@material-ui/core";
import { Grid, Paper } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const EmailRegex = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,10}$/i);
const InvalidPasswordRegex = RegExp(
  /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/
);
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {
        email: "",
        password: "",
      },
    };
  }

  validate = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const errors = this.state.errors;
    switch (name) {
      case "email":
        errors.email = EmailRegex.test(value) ? "" : "Invalid Email";
        console.log(errors);
        break;
      case "password":
        errors.password = InvalidPasswordRegex.test(value)
          ? alert(
              "Password must contain minimum 8 characters with at least 1 Uppercase, 1 Lowercase, 1 Number and 1 special character"
            )
          : "";
        console.log(errors);
        break;
      default:
        break;
    }
  };

  onChange = (event) => {
    const caller = event.target.name;
    const value = event.target.value;
    this.setState({ [caller]: value });
  };

  render() {
    return (
      <>
        <Grid container justify="center">
          <Paper
            component={Grid}
            item
            container
            variant="outlined"
            direction="column"
            alignContent="center"
            md={4}
            style={{ paddingTop: 100, paddingBottom: 20 }}
            className={darkTheme}
          >
            <div>
              <form
                onSubmit={this.handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "2em",
                }}
              >
                <Grid>
                  <TextField
                    name="email"
                    label="Enter Email ID"
                    variant="outlined"
                    value={this.state.email}
                    onChange={this.onChange}
                    onBlur={this.validate}
                  />
                </Grid>
                <Grid style={{ paddingTop: 10 }}>
                  <TextField
                    name="password"
                    label="Enter Password"
                    type="password"
                    variant="outlined"
                    value={this.state.password}
                    onChange={this.onChange}
                    onBlur={this.validate}
                  />
                </Grid>
                <Grid style={{ paddingTop: 10 }} container justify="center">
                  <Button color="primary" variant="contained" type="submit">
                    Submit
                  </Button>
                </Grid>
              </form>
            </div>
          </Paper>
        </Grid>
      </>
    );
  }
}

export default Login;
