import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box ml={{ xs: 0, md: '56px' }}>
      <Button onClick={() => setOpen(true)}>left</Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={(theme) => ({
          [theme.breakpoints.up('md')]: {
            '&.MuiModal-hidden .MuiDrawer-paper': {
              width: 56,
            },
            '.MuiBackdrop-root': {
              transition:
                'opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
            },
          },
        })}
        PaperProps={{
          sx: (theme) => ({
            width: 250,
            overflowX: 'hidden',

            [theme.breakpoints.up('md')]: {
              visibility: 'visible !important',
              transform: 'unset !important',
              whiteSpace: 'nowrap',
              transition:
                'width 225ms cubic-bezier(0, 0, 0.2, 1) 0ms !important',
            },
          }),
        }}
        ModalProps={{ keepMounted: true }}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
