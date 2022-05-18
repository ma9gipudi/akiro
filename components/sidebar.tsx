import { Inbox, Home, ModeNight } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';

const Sidebar = () => {
  return (
    <Box
      flex={1}
      padding={2}
      sx={{
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <Box position="fixed" borderRight="solid rgb(236, 239, 241)">
        <List>
          <ListItem>
            <ListItemButton component="a">
              <ListItemIcon>
                <Home></Home>
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a">
              <ListItemIcon>
                <Home></Home>
              </ListItemIcon>
              <ListItemText primary="Organizations" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a">
              <ListItemIcon>
                <Home></Home>
              </ListItemIcon>
              <ListItemText primary="Payroll" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a">
              <ListItemIcon>
                <Home></Home>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a">
              <ListItemIcon>
                <ModeNight></ModeNight>
              </ListItemIcon>
              <Switch></Switch>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
