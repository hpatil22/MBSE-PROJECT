import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = ({sx}) => {
  return (
    <Box sx={{display:"flex", flexDirection:"column",justifyContent:"space-between", p:2, borderTop:"1px solid #d4d4d4", color:"#717070",width:"83%", position:"absolute",zIndex:"100000" ,...sx}}>
    <Box  bottom={0}>

      <Typography variant="p" sx={{mt:2}}>
        Copyright @2023 All Rights Reserved, Paninian India Private Ltd.
      </Typography  >
      <Typography component={"u"}>Terms of Service & Privacy Policy</Typography>
      <Typography  sx={{mb:2}}>
        Contact: support@entropyhub.com Ph: +91-8069499986
      </Typography>
    </Box>
    </Box>
  );
};

export default Footer;
