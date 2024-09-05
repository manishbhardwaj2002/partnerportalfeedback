import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import logo from '../images/logo.svg';
import WindowIcon from '@mui/icons-material/Window';
import MovingIcon from '@mui/icons-material/Moving';
import Feedback from './Feedback';
import Footer from './Footer';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';



const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(



  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Sidebar=()=>{
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const nav=  [
  {label:'Dashboard', icon: <WindowIcon/>}, 
  {label:'Sales', icon: <MovingIcon/>},
  {label:'Earnings', icon: <WindowIcon/>},
  {label:'Digital Library', icon: <WindowIcon/>},
  {label:'Research', icon: <SearchSharpIcon/>},
  {label:'Payout Request',  icon: <WindowIcon/>},
  {label:'Master BDR', icon: <WindowIcon/>}]

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{backgroundColor:'#161B2E',}}>
        <Toolbar>
        
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
         
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          backgroundColor: '#161B2E',
          height:'100vh',
          borderRight:'0px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader  sx={{backgroundColor: '#161B2E'}}>
   
        <Box component="img" src={logo} alt="" title="'" sx={{width:'248px', height:'33px'}} />
        <IconButton onClick={handleDrawerClose} sx={{color:'#fff'}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon/>}
          </IconButton>
         
        </DrawerHeader>
     
        <Box sx={{backgroundColor: '#161B2E', height: '100vh', padding:'0px 10px', paddingTop:'17px',}}>
        <List>
        {nav.map(({label, icon, index}) => (
            <ListItem key={index} disablePadding sx={{ color:'#ffffff',}}>
              <ListItemButton>
          
                <ListItemIcon sx={{color:'#fff'}}>
                  {icon}
            </ListItemIcon>
               
                <ListItemText primary={label}  sx={{color:'#CACACA'}}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
     
       
        </Box>
      </Drawer>
      <Main open={open} style={{backgroundColor: '#F8FAFF', width:'100%', padding:'0px'}}>
        <DrawerHeader />

     
       <Feedback/>
       <Footer/>  
      </Main>
     
    </Box>

    </>
  );
}

export default Sidebar;