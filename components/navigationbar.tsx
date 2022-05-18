import { useAuth0 } from '@auth0/auth0-react';
import { Mail, Notifications, Pets, Router, TrySharp } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  });

  const SearchBar = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    borderRadius: theme.shape.borderRadius,
    padding: '0 10px',
    width: '40%',
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  }));

  const { logout } = useAuth0();
  const router = useRouter();
  const logOutClickHandler = () => {
    try {
      logout();
      router.replace('/');
    } catch {
      console.error('XXX: error loggin out');
    }
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white' }}>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          Moonbase
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }}>Navbar</Pets>
        <SearchBar>
          <InputBase > </InputBase>
        </SearchBar>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="action" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications color="action" />
          </Badge>
          <Avatar onClick={(e) => setOpen(true)}></Avatar>
        </Icons>
        <UserBox>
          <Avatar></Avatar>
          <Typography variant="span">Maddy</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={logOutClickHandler}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
