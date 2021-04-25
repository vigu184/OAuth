import React from "react";
import { Button, TextField } from "@material-ui/core";
import { Grid, Paper } from "@material-ui/core";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleSubmit = () => {
    console.log("Submit zhala");
  };
  render() {
    return (
      <>
        <Paper
          component={Grid}
          item
          container
          alignContent="center"
          direction="column"
          md={4}
        >
          <div style={{ paddingTop: 50, paddingBottom: 50 }}>
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
              <Grid>
                <TextField
                  id="filled-basic"
                  label="Enter User Name"
                  variant="filled"
                />
              </Grid>
              <Grid>
                <TextField
                  id="filled-basic"
                  label="Enter Password"
                  variant="filled"
                />
              </Grid>
            </form>
            <Button color="primary" alignContent="center">
              Submit
            </Button>
          </div>
        </Paper>
      </>
    );
  }
}

export default Login;
