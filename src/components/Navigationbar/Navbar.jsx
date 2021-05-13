import React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";
class Navbar extends React.Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <Typography>Application Based out of Rendumness!!</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
