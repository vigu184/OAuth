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
const UppercaseRegex = RegExp(/[A-Z]/);
const LowerCaseRegex = RegExp(/[a-z]/);
const NumberRegex = RegExp(/\d/);
const SpecialCharacter = RegExp(/[@_!#$%^&*()<>?/|}{~:]/);
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
      passwordStrength: "",
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
          ? "Password must contain minimum 8 characters with at least 1 Uppercase, 1 Lowercase, 1 Number and 1 special character"
          : "";
        if (value === "") {
          this.setState({ passwordStrength: "Password cannot be empty" });
        } else if (value.length < 8) {
          console.log("Password Must have atleast 8 characters");
          alert(
            "Password must contain:\nMinimum 8 characters\n1 Uppercase Letter\n1 Lowercase letter\n1 number\n1 Special character"
          );
        } else if (!NumberRegex.test(value)) {
          console.log("Password Must have atleast one number");
          this.setState({
            passwordStrength:
              "Password must have atleast 1 numerical character",
          });
        } else if (!UppercaseRegex.test(value)) {
          console.log("Password Must have atleast one Uppercase character");
          this.setState({
            passwordStrength: "Password must have atleast 1 Uppercase letter",
          });
        } else if (!LowerCaseRegex.test(value)) {
          console.log("Password Must have atleast one lowercase character");
          this.setState({
            passwordStrength: "Password must have atleast 1 Lowercase letter",
          });
        } else if (!SpecialCharacter.test(value)) {
          console.log("Password Must have atleast 1 Special character");
          this.setState({
            passwordStrength:
              "Add special characters to make the best possible!",
          });
        } else {
          this.setState({ passwordStrength: "Strong Password" });
        }
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
                  />
                </Grid>
                <Grid style={{ paddingTop: 10, paddingBottom: 10 }}>
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
                <Paper component={Grid}>{this.state.passwordStrength}</Paper>
                <Grid style={{ paddingTop: 10 }} container justify="center">
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    onClick={this.validate}
                  >
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
