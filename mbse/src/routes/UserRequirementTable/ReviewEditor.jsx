import { Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import ModeIcon from "@mui/icons-material/Mode";

const ReviewEditor = () => {
  const [mode, setMode] = useState("view");
  const [text, setText] = useState(
    `Review User Requirments`
  );

  const handleEditButtonClick = () => {
    setMode("edit");
  };

  const handleTextInput = (e) => {
    console.log(e);
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      setMode("view");
    }
  };

  if (mode === "edit") {
    return (
      <TextField
        value={text}
        onChange={handleTextInput}
        onKeyDown={handleKeyDown}
        multiline
        fullWidth
        rows={4}
        variant="outlined"
      />
    );
  } else {
    return (
      <Grid container flexDirection={"row"} alignItems={"center"} sx={{ p: 2 }}>
        <Grid item md={10}>
          <Typography>{text}</Typography>
        </Grid>
        <Grid item md={2}>
          <IconButton onClick={handleEditButtonClick} color="primary">
            <ModeIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
};

export default ReviewEditor;
