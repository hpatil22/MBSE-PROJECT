import React from "react";
// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../people.jpg'
import { Link } from "react-router-dom";
import Rightside from "./Rightside";
const Leftside =(props)=>{
    const drawerWidth = 240;
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <div>
        <img src="https://static.wixstatic.com/media/8bca2d_034a145bcf4d49c2afadec9a53ef6654~mv2.png/v1/crop/x_0,y_504,w_5760,h_2016/fill/w_614,h_215,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Air%20voxel%20logo.png" className="img"></img>
        {/* <Toolbar /> */}
        {/* <Divider /> */}
        <List sx={{backgroundColor:"#0193F5", height:"80vh", marginTop:"0", borderTopRightRadius:'20px',
            borderBottomRightRadius:"20px"}}>
          {['Dashboard', 'Requirement', 'Support', 'Report'].map((text, index) => (
            <ListItem key={text} disablePadding>
                
                <ListItemText primary={text} sx={{left:'10px', marginLeft:'10px', margin:"20px"}}/>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === <MailIcon />}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
       
      </div>
    );
  
    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;
    return(
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{backgroundColor:"#0193F5" ,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6" noWrap component="div">
              Responsive drawer
            </Typography> */}
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ color:'#0193F5' ,width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
          style={{backgroundColor:"#0193F5"}}
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          {/* <Typography> */}
          <Rightside></Rightside>
          {/* </Typography> */}
         
        </Box>
      </Box>
    );

};

export default Leftside;