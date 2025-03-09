'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';

export default function TopBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const router = useRouter();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path: string) => {
    router.push(path);
    handleClose();
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box 
          sx={{ 
            marginRight: 2, 
            alignItems: 'center', 
            display: 'flex',
            cursor: 'pointer' 
          }}
          onClick={() => router.push('/')}
        >
          <Box
        sx={{
          width: 40,
          height: 40,
          backgroundImage: `url("https://images.squarespace-cdn.com/content/5aceb3075ffd20be26cc1d42/570069cb-d8ec-4795-a21c-026417e597e9/logo.PNG?content-type=image%2Fpng")`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      ></Box>
        </Box>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            color: 'white',
            cursor: 'pointer'
          }}
          onClick={() => router.push('/')}
        >
          Green Room
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenu}
          sx={{ ml: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleMenuItemClick('/articles')}>Articles</MenuItem>
          {/* <MenuItem onClick={() => handleMenuItemClick('/resources')}>Resources</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/calendar')}>Events</MenuItem> */}
          <MenuItem onClick={() => handleMenuItemClick('/contact')}>Contact</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/studio')}>Studio</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}