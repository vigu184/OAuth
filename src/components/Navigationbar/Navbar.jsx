import React from 'react';
import {Toolbar, AppBar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
class Navbar extends React.Component {
    render() {
        return(
                    <AppBar>
                        <Toolbar>
                            <IconButton>
                            <MenuIcon style={{marginRight:5}}></MenuIcon> 
                            </IconButton>
                            <Typography>
                              Mask Pehno
                            </Typography>
                        </Toolbar>
                    </AppBar>
        );
    }
}
export default Navbar;