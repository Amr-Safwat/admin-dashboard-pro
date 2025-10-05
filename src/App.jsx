import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import { styled } from '@mui/material';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './components/Theme';
import { Outlet } from 'react-router';
import { SnackbarProvider } from 'notistack';


  const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

export default function MiniDrawer() {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <SnackbarProvider maxSnack={1} autoHideDuration={3000}>
          <Box sx={{display: 'flex'}}>
            <CssBaseline />

            <TopBar open={open} handleDrawerOpen={handleDrawerOpen} />

            <SideBar open={open} handleDrawerClose={handleDrawerClose} />
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
              <DrawerHeader />
              <Outlet />
            </Box>
          </Box>
        </SnackbarProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}