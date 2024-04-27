import { Box, CardHeader, Grid, IconButton, List, ListItem, ListItemText } from "@mui/material";
import CollapsableButton from "./CollapsableButton";
import CollapsableButton1 from "./BasicTable/CollapsableButton1";
import React, { useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Dropdown from "../routes/DesignView/index 1";

const ReusableCollapsButton =()=>{
    
   
    return(
        <>
         <Grid item  container sx={{ mb: 5 }}>
              {/* <CardHeader
                title="Model Explorer​"
                titleTypographyProps={{
                  fontWeight: "bold",
                  variant: "h6",
                  textAlign: "center",
                }}
                sx={{
                  backgroundColor: "#1577a3",
                  color: "white",
                  padding: "4px 16px",
                  p: 2,
                  borderRadius: "8px",
                  mb: 2,
                  mt: 3,
                }}
              /> */}
  
              <Dropdown
                title={"Compressor"}
                color="primary-light"
                sx={{ p: 0, px: 2, mt: 1 }}
              >
                <Box sx={{ ml: 3 }}>
                  <Dropdown
                    title={"Blisk"}
                    color="secondary-light"
                    sx={{ p: 0, px: 2, mt: 1 }}
                  >
                    <List dense={false}>
                      <ListItem>
                        <ListItemText primary="Rotor Disk" />
                      </ListItem>
                      <ListItem sx={{ bgcolor: "#d2edf4", borderRadius: "8px" }}>
                        <ListItemText
                          primary="Blade"
                          primaryTypographyProps={{
                            fontWeight: "bold",
                            color: "#454545",
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Ring Damper" />
                      </ListItem>
                    </List>
                  </Dropdown>
                  <Dropdown
                    title={"Stator Vane"}
                    color="secondary-light"
                    sx={{ p: 0, px: 2 }}
                  ></Dropdown>
                  <Dropdown
                    title={"Casing"}
                    color="secondary-light"
                    sx={{ p: 0, px: 2 }}
                  ></Dropdown>
                </Box>
              </Dropdown>
              <Dropdown
                title={"Combustor"}
                color="primary-light"
                sx={{ p: 0, px: 2, mt: 1 }}
              ></Dropdown>
              <Dropdown
                title={"Turbine"}
                color="primary-light"
                sx={{ p: 0, px: 2, mt: 1 }}
              ></Dropdown>
              <Dropdown
                title={"FADEC Controller​"}
                color="primary-light"
                sx={{ p: 0, px: 2, mt: 1 }}
              ></Dropdown>
              <Dropdown
                title={"Accessories"}
                color="primary-light"
                sx={{ p: 0, px: 2, mt: 1 }}
              ></Dropdown>
            </Grid>
        {/* <Box sx={{display:"flex", flexDirection:"column", alignItems:"left", mt: 3}}>

<CollapsableButton buttonText={"Compressor"}>

<Box ml={1}  >
<CollapsableButton1 buttonText={"Blisk"}>

<Box mt={1} mb={0.5} ml={5}  sx={{}}>
  
    <div className="structure">
      <ul style={{textAlign:"left", cursor:"pointer" , marginLeft:"20px"}}>
        <li style={{paddingTop:"2px"}}>
        Rotor Disc 
        </li>
        <li style={{paddingTop:"2px" , }}>
       Blade
        </li>
        <li style={{paddingTop:"2px"}}>
        Ring Damper
        </li>
      </ul>
    </div>
    </Box>
</CollapsableButton1>
<Box  sx={{display:"flex" , flexDirection:"column", justifyContent:"center", alignItems:"center" ,}}>

   <CollapsableButton1 buttonText={"Stator Vane"} >
   
   </CollapsableButton1>
   <CollapsableButton1 buttonText={"Casing"}>
  
   </CollapsableButton1>
    </Box>

</Box>
    </CollapsableButton>
    <CollapsableButton buttonText={"Cumbustor"}></CollapsableButton>
    <CollapsableButton buttonText={"Turbine"}></CollapsableButton>
    
</Box> */}
        </>
    )
}
export default ReusableCollapsButton;