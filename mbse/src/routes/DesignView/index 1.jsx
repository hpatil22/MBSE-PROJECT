import { Box, Collapse, IconButton, Typography } from "@mui/material";
import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const Dropdown = ({title,color = "primary", children, sx, ...props}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const dropColor = (color)=>{
    if(color === "primary")
      return "#1577A3"
    if(color === "secondary")
      return "#46B1E1"
    if(color === "primary-light")
      return "#2e9cb8"
    if(color === "secondary-light")
      return "#79c9dd"
  }

  return (
    <>
    <Box
        sx={{
          mt: 2,
          p:2,
          backgroundColor: dropColor(color),
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          ...sx
        }}
        {...props}
      >
        <Typography variant="h6" fontWeight={"400"} sx={{ color: "white" }}>
          {title}
        </Typography>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit"
        >
          { open? <FaChevronUp size="20" color="white" />:<FaChevronDown size="20" color="white" />}
        </IconButton>
      </Box>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
        </>
  )
}

export default Dropdown