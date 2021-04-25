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
      <Grid container justify="center">
      <Paper
          component={Grid}
          item
          container
          alignContent="center"
          direction="column"
          md={4}
          style={{ paddingTop: 100, paddingBottom:20}}
        >
          <div>
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
              <Grid>
                <TextField
                  id="filled-basic"
                  label="Enter User Name"
                  variant="filled"
                />
              </Grid>
              <Grid style={{paddingTop:10}}>
                <TextField
                  id="filled-basic"
                  label="Enter Password"
                  variant="filled"
                />
              </Grid>
            <Grid style={{paddingTop:10}} container justify="center">
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
