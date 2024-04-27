import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import logo from "../people.jpg";
import { Button } from "@mui/material";
import SidebarMenu from "../component/SidebarMenu";
import Footer from "../component/Footer/index 2";
import { useAuth0 } from "@auth0/auth0-react";

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  border: "none",
  // overflowX: "hidden",
  // backgroundColor:"#79c9dd"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    // backgroundColor:"#79c9dd",
    backgroundColor: theme.transitions.backgroundColor,
  }),
  overflowX: "hidden",
  border: "none",

  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  // backgroundColor:"white",
  padding: theme.spacing(0, 1),

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  backgroundColor: "white",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };
  const { logout, user } = useAuth0();



  return (
    <Box>
      <Box sx={{ display: "flex", mt: "50px" }}>
        {/* <CssBaseline /> */}
        <AppBar
          position="fixed"
          variant="outlined"
          color="inherit"
          sx={{ border: "none" }}
        >
          <Toolbar>
            {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton> */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "200px",
                mt: 1,
                mr: 1,
                ml: 1,
              }}
            >
              <img src={"/Logo.svg"} alt=""></img>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar sx={{ marginBottom: "10px" }}></Toolbar>
          <div className="nav" style={{
            // display: open ? "block" : "none"
          }}>
            <DrawerHeader
            open ={open}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "80%",
                  pt: 2,
                  py: 2,
                }}
              >
                <IconButton
                  onClick={handleDrawer}
                  sx={{ bgcolor: "white", border: "1 px solid black" }}
                >
                  {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </Box>
              <div
                // className="nav-sub"
                style={{ display:open ? "block" : "none" }}
              >
                <Box
                  sx={{
                    display:open ? "flex" : "none",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <SidebarMenu title="Dashboard" to="/dashboard2" sx={{mb:2}} open ={open}></SidebarMenu>
                  <Box sx={{mb:2}}>

                  <SidebarMenu
                    title="Project Viewer"
                    
                  >
                    <SidebarMenu
                    
                      title="Project Editor"
                      to="/project-editor"
                    ></SidebarMenu>
                  </SidebarMenu>
                  </Box>

                  <Box sx={{mb:2}}>
                  <SidebarMenu
                    title="Requirement Viewer"
                    to="/user-requirement-table"
                  >
                    <SidebarMenu
                   
                      title="Requirement Editor"
                      to="/requirements-validation-two"
                    ></SidebarMenu>
                  </SidebarMenu>
                  </Box>

                  <Box sx={{mb:2}}>
                  <SidebarMenu
                    title="Test Case Matrix"
                    to="/testcase-matrix"
                  >
                    <SidebarMenu
                      title="Test Case Editor"
                      to="/testcontext-matrix"
                    ></SidebarMenu>
                  </SidebarMenu>
                  </Box>

                  <Box sx={{mb:2}}>

                  <SidebarMenu
                    title="Model Viewer"
                    to="/model-editor"
                  >
                    <SidebarMenu
                      title="Model Editor"
                      to="/modeleditor"
                    ></SidebarMenu>
                  </SidebarMenu>
                  </Box>
                  <SidebarMenu
                  sx={{mb:2}}
                    title="Design Review"
                    to="/design-view"
                  ></SidebarMenu>
                  <SidebarMenu
                  sx={{mb:2}}
                    title="View Report"
                    // to="/dashboard2"
                  ></SidebarMenu>
                  <SidebarMenu
                  sx={{mb:2}}
                    title="Fmu Liabrary"
                    to="/fmuliabrary"
                  ></SidebarMenu>
                </Box>

                {/* <ul>
              <li>
                <Link to="/dashboard2">Dashboard</Link>
              </li>
              <CollapasableButtonNav></CollapasableButtonNav>

              <li>
                <Link to="/user-requirement-table">Requirement Viewer</Link>
              </li>
              <li>
                <Link to="/requirements-validation-two">Requirement Editor</Link>
              </li>
              <li>
                <Link to="/project-editor">Project Editor</Link>
              </li>
              <li>
                <Link to="/testcontext-matrix">Test Case Editor</Link>
              </li>
              <li>
                <Link to="/model-editor">Model Editor</Link>
              </li>
              {/* <li>
                <Link to="/Setting">Setting</Link>
              </li> */}
                {/* <li>
                <Link to="/design-view">Design Review</Link>
              </li>
              <li>
                <Link to="/Report"> View Report</Link>
              </li> */}
                {/* </ul> */}
              </div>
            </DrawerHeader>

            {/* <div style={{height:"10px",width:"30px",color:"black"}}></div> */}
            <div
              className="nav-bottom"
              style={{ display: open ? "block" : "none" }}
            >
              <img
                src={logo}
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  padding: "8px",
                  backgroundColor: "white",
                  marginTop: "10px",
                }}
              ></img>
              <Typography>{user.name}</Typography>
              <Typography>System Engineer</Typography>
              <Typography>{user.email}</Typography>
              <Button variant="contained" sx={{ my: 2 }} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Logout
              </Button>
            </div>
          </div>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt:2 }}>
          {/* <DrawerHeader 
          // sx={{ marginBottom: "px" }}
           /> */}
          {children}
          <Footer sx={{mt:5}}></Footer>
        </Box>
      </Box>
     
    </Box>
  );
}
