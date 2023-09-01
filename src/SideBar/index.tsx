import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Drawer from '@mui/material/Drawer';
import MenuItem from './MenuItem';

interface SideBarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SideBar = ({ open, setOpen }: SideBarProps) => {
  return (
    <Drawer
      open={open}
      onClose={() => setOpen(false)}
      ModalProps={{ keepMounted: true }}
      sx={(theme) => ({
        '.MuiPaper-root': {
          width: 250,
          overflowX: 'hidden',
        },

        [theme.breakpoints.up('md')]: {
          '&.MuiModal-hidden .MuiDrawer-paper': {
            width: 56,
          },
          '.MuiBackdrop-root': {
            transition:
              'opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
          },
          '.MuiPaper-root': {
            visibility: 'visible !important',
            transform: 'unset !important',
            whiteSpace: 'nowrap',
            transition: 'width 225ms cubic-bezier(0, 0, 0.2, 1) 0ms !important',
          },
        },
      })}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <MenuItem
            text={text}
            icon={index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            isOpen={open}
          />
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <MenuItem
            text={text}
            icon={index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            isOpen={open}
          />
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
