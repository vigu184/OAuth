import React from 'react';
import {Toolbar, AppBar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
class Navbar extends React.Component {
    render() {
        return(
                    <AppBar>
                        <Toolbar>
                        <MenuIcon style={{marginRight:5}}></MenuIcon> 
                            <Typography>
                              Mumbo-Jumbo
                            </Typography>
                        </Toolbar>
                    </AppBar>
        );
       
    }
}

export default Navbar;