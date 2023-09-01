import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';

const NavBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        [theme.breakpoints.up('md')]: {
          width: 'calc(100% - 56px)',
          ml: '56px',
        },
      })}
    >
      <Toolbar>
        <IconButton aria-label="delete" size="small">
          <Delete fontSize="inherit" />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Permanent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
