import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import SideBar from './SideBar';
import NavBar from './NavBar';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box ml={{ xs: 0, md: '56px' }}>
      <CssBaseline />
      <NavBar />
      <SideBar open={open} setOpen={setOpen} />
      <Button onClick={() => setOpen(true)}>left</Button>
    </Box>
  );
}
