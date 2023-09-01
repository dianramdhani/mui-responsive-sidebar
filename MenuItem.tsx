import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';

interface MenuItemProps {
  text: string;
  icon: React.JSX.Element;
  isOpen?: boolean;
}

const MenuItem = ({ text, icon, isOpen }: MenuItemProps) => {
  return (
    <Tooltip
      title={text}
      placement="right"
      disableInteractive
      disableHoverListener={isOpen}
      PopperProps={{
        sx: {
          width: 'calc(250px - 56px)',
          '.MuiTooltip-tooltip': {
            display: 'flex',
            alignItems: 'center',
            height: '48px',
            m: '0 !important',
            p: '0 16px',
            borderRadius: 0,
            backgroundColor: '#FFC202',
            fontSize: '1rem',
            color: 'rgba(0, 0, 0, 0.54)',
          },
        },
      }}
    >
      <ListItem key={text} disablePadding>
        <ListItemButton
          sx={{
            ':hover': {
              backgroundColor: '#FFC202',
            },
          }}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </Tooltip>
  );
};

export default MenuItem;
