import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MuiDrawer from '@mui/material/Drawer';
import {styled, useTheme} from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import ContactsIcon from '@mui/icons-material/Contacts';
import FeedIcon from '@mui/icons-material/Feed';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import MapIcon from '@mui/icons-material/Map';
import HelpIcon from '@mui/icons-material/Help';
import {Avatar, Typography} from '@mui/material';
import {useNavigate} from 'react-router';
import {useLocation} from 'react-router';
import {grey} from '@mui/material/colors';

const drawerWidth = 240;

export default function SideBar({open, handleDrawerClose}) {
  const location = useLocation();
  let navigate = useNavigate();
  const theme = useTheme();

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({theme}) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({open}) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({open}) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }));

  const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const arrayOne = [
    {text: 'Dashboard', icon: <HomeIcon />, path: '/'},
    {text: 'Manage Team', icon: <PeopleIcon />, path: '/team'},
    {text: 'Contacts Information', icon: <ContactsIcon />, path: '/contacts'},
    {text: 'Invoices Balances', icon: <FeedIcon />, path: '/invoices'},
  ];
  const arrayTwo = [
    {text: 'Profile Form', icon: <PersonIcon />, path: '/profile'},
    {text: 'Calender', icon: <CalendarMonthIcon />, path: '/calender'},
    {text: 'FAQ Page', icon: <HelpIcon />, path: '/faq'},
  ];
  const arrayThree = [
    {text: 'Bar Chart', icon: <BarChartIcon />, path: '/bar'},
    {text: 'Pie Chart', icon: <PieChartIcon />, path: '/pie'},
    {text: 'Line Chart', icon: <TimelineIcon />, path: '/line'},
    {text: 'Geography Chart', icon: <MapIcon />, path: '/geography'},
  ];

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <Avatar
        sx={{
          mx: 'auto',
          mt: 2,
          mb: 1,
          height: open ? 80 : 45,
          width: open ? 80 : 45,
          transition: '0.3s',
        }}
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
      />

      {open ? (
        <>
          <Typography align="center" sx={{fontSize: 17, transition: '.3s'}}>
            Amr Safwat
          </Typography>
          <Typography
            align="center"
            sx={{
              fontSize: 12,
              mb: 1,
              color: theme.palette.info.main,
              transition: '.3s',
            }}
          >
            Admin
          </Typography>
        </>
      ) : null}

      <Divider />

      <List>
        {arrayOne.map((item) => (
          <ListItem
            key={item.path}
            disablePadding
            sx={{
              display: 'block',
              bgcolor: location.pathname == item.path ? theme.palette.mode == 'dark'? grey[800] : grey[400] : null,
            }}
          >
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: 'initial',
                    }
                  : {
                      justifyContent: 'center',
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: 'auto',
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {arrayTwo.map((item) => (
          <ListItem
            key={item.path}
            disablePadding
            sx={{
              display: 'block',
              bgcolor: location.pathname == item.path ? theme.palette.mode == 'dark'? grey[800] : grey[400] : null,
            }}
          >
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: 'initial',
                    }
                  : {
                      justifyContent: 'center',
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: 'auto',
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {arrayThree.map((item) => (
          <ListItem
            key={item.path}
            disablePadding
            sx={{
              display: 'block',
              bgcolor: location.pathname == item.path ? theme.palette.mode == 'dark'? grey[800] : grey[400] : null,
            }}
          >
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: 'initial',
                    }
                  : {
                      justifyContent: 'center',
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: 'auto',
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
