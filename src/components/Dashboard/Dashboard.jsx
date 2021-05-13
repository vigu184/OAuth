import { Typography, Paper } from "@material-ui/core";
import React from "react";
import Navbar from "./NavigationBar/Navbar";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Paper>
          <Typography> This is a Dashboard </Typography>
        </Paper>
      </>
    );
  }
}

export default Dashboard;
