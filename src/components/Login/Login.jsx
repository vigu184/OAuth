import React from "react";
import { Button, TextField } from "@material-ui/core";
import { Grid, Paper } from "@material-ui/core";
import {createMuiTheme} from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleSubmit = () => {
    console.log("");
  };

  onChange = (event) => {
    const caller = event.target.name;
    const value = event.target.value;
    this.setState({[caller]: value,});
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
          className={darkTheme}
        >

          <div>
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
              <Grid>
                <TextField
                  name="username"
                  label="Enter User Name"
                  variant="filled"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid style={{paddingTop:10}}>
                <TextField
                  name="password"
                  label="Enter Password"
                  type="password"
                  variant="filled"
                  value={this.state.password}
                  onChange={this.onChange}
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
