import React from "react";
// import Box from '@mui/material/Box';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { TreeView } from '@mui/x-tree-view/TreeView';
// import { TreeItem } from '@mui/x-tree-view/TreeItem';
import "./gojs.css";

const Tree =()=>{
    

    return(
        <div id="sidebar">
        {/* <div class="sidebar-heading">Control System Model Explorer</div> */}
        <ul class="menu">
          <li class="menu-item">
            <a href="#">Actuator Elements</a>
            <ul class="submenu">
              
            </ul>
          </li>
          <li class="menu-item" id="lo">
            <a href="#">Logical<br></br> Elements</a>
            <ul class="submenu" id="lo">
              <li><div><a href="#">Adaptive<br></br> Control
              Logic </a></div></li>
              <li><a href="#">Fuel Control<br></br>Logic</a></li>
            </ul>
          </li>
          <li class="menu-item">
            <a href="#">Sensor <br></br>Elements</a>
            <ul class="submenu">
              
            </ul>
          </li>
        </ul>
      </div>
   
    )
};
export default Tree