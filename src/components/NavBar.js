import * as React from 'react';
// import './App.css';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  // MenuIcon,
  TextField,
} from "@mui/material";

import { Menu as MenuIcon } from '@mui/icons-material'

export default function NavBar() {
  // console.log('test')
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" component="div" sx={{  }}>
              My Music App
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    );
  }





  