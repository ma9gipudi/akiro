import { useAuth0 } from '@auth0/auth0-react';
import { Box, Stack } from '@mui/material';
import { Fragment } from 'react';
import Navbar from './navigationbar';
import Sidebar from './sidebar';

const Layout = (props: any) => {
  const { isAuthenticated } = useAuth0();
  return (
    <Box>
      {isAuthenticated ? <Navbar /> : <Fragment />}
      <Stack direction="row" justifyContent="space-evenly" spacing={2}>
        {isAuthenticated ? <Sidebar /> : <Fragment />}
        <Box flex={3}>{props.children}</Box>
      </Stack>
    </Box>
  );
};

export default Layout;
