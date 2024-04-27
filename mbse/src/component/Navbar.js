import React from "react";
import { Link } from "react-router-dom";
import logo from "../people.jpg";
import { Box, Button, IconButton, Typography, Collapse } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Navbar = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ position: "fixed" }}>
      <div className="image">
        <img
          src="https://static.wixstatic.com/media/8bca2d_034a145bcf4d49c2afadec9a53ef6654~mv2.png/v1/crop/x_0,y_504,w_5760,h_2016/fill/w_614,h_215,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Air%20voxel%20logo.png"
          alt=""
        ></img>
      </div>

      <Collapse
        in={expanded}
        orientation="horizontal"
        timeout="auto"
        unmountOnExit
      >
        <div className="nav">
          <div className="nav-sub">
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", pt: 2, pr: 2 }}
            >
              <IconButton
                onClick={handleExpandClick}
                sx={{ bgcolor: "white", border: "1 px solid black" }}
              >
                <KeyboardArrowLeftIcon />
              </IconButton>
            </Box>
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/requirements-validation-two">Create project
                </Link>
              </li>
              <li>
                <Link to="/Setting">Setting</Link>
              </li>
              <li>
                <Link to="/Support">Support</Link>
              </li>
              <li>
                <Link to="/Report">Report</Link>
              </li>
            </ul>
          </div>
          {/* <div style={{height:"10px",width:"30px",color:"black"}}></div> */}
          <div className="nav-bottom">
            <img
              src={logo}
              alt=""
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                padding: "10px",
                backgroundColor: "white",
                marginTop: "10px",
              }}
            ></img>
            <Typography>Hitesh.p</Typography>
            <Typography>System Engineer</Typography>
            <Typography>Hitesh.p@gmail.com</Typography>
            <Button variant="contained" sx={{ my: 2 }}>
              Logout
            </Button>
          </div>
        </div>
      </Collapse>
      <Collapse
        in={!expanded}
        orientation="horizontal"
        timeout="auto"
        unmountOnExit
      >
        <div className="nav">
          <div className="nav-sub">
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", pt: 2, px: 2 }}
            >
              <IconButton
                onClick={handleExpandClick}
                sx={{ bgcolor: "white", border: "1 px solid black" }}
              >
                <KeyboardArrowRightIcon />
              </IconButton>
            </Box>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Navbar;
