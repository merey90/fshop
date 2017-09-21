import React, { Component } from 'react';
import {AppBar,Toolbar,Typography} from 'material-ui/';

class Header extends Component {
    state = {  }
    render() {
        return (
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography type="title" color="inherit">
                        Shop
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;