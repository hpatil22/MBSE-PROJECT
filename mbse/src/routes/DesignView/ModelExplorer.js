import {
    Box,
    Button,
    CardHeader,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { FaChevronDown } from "react-icons/fa6";
  import Dropdown from "./index 1";
  // import BasicTable from "../../Components/BasicTable";
  import { useNavigate } from "react-router-dom";
  // import { ParaviewContext } from "../../Components/Paraview/ParaviewContext";
  // import Paraview from "../../Components/Paraview";
  import { LuExpand } from "react-icons/lu";
  
  const columns = [
    {
      id: "projectContext",
      label: "Project Context​",
      minWidth: 170,
      sx: { color: "#5f3aff", textDecoration: "underline", cursor: "pointer" },
      to: "/simulation-module",
    },
    { id: "domain", label: "Domain​", minWidth: 100 },
    {
      id: "owner",
      label: "Owner​",
      minWidth: 170,
      align: "center",
    },
    {
      id: "date",
      label: "Date",
      minWidth: 170,
      align: "center",
    },
    {
      id: "version",
      label: "Version",
      minWidth: 170,
      align: "center",
      format: (value) => {
        if (value === -1)
          return (
            <Typography fontWeight={"bold"} sx={{ color: "#E55265" }}>
              Deprecated
            </Typography>
          );
        else if (value === 1)
          return (
            <Typography fontWeight={"bold"} sx={{ color: "#EB9B22" }}>
              Draft
            </Typography>
          );
        if (value === 0)
          return (
            <Typography fontWeight={"bold"} sx={{ color: "#3A9E3E" }}>
              Current
            </Typography>
          );
      },
    },
  ];
  
  function createData(projectContext, domain, owner, date, version) {
    return { projectContext, domain, owner, date, version };
  }
  
  const rows = [
    createData("STJE Aerothermal Workflow - V1​", "Aero-Thermal​", "", "", -1),
    createData("STJE Aerothermal Workflow - V1​.1", "Aero-Thermal​", "", "", 0),
    createData("STJE Aerothermal Workflow - V1.2​", "Aero-Thermal​", "", "", 1),
  ];
  
  const App = () => {
    const navigate = useNavigate();
  
    return (
      <Box
        sx={{
          m: 3,
          display: "flex",
          minHeight: "calc(100vh - 112px)",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 3,
              mt: 1,
            }}
          >
            <Typography
              variant="h5"
              component="div"
              fontWeight={"bold"}
              sx={{ flexGrow: 1, color: "#46B1E1" }}
            >
              Design Review Pane
            </Typography>
          </Box>
  
          <Grid container sx={{ mb: 5 }}>
            <Grid item md={2}>
              <CardHeader
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
              />
  
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
            <Grid item md={10} sx={{ pl: 2 }}>

{/*     ---------------------------------------------------------------------------- */}


              <Paper
              elevation={3}
                variant="outlined"
                sx={{
                  minHeight: "80vh",
                  mt: 3,
                  border:"none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Grid container>
                  <Grid item md={7} sx={{ pr: 3 , border:"1px solid gray"}}>
                    <Typography
                      fontWeight="bold"
                      variant="h5"
                      sx={{
                        px: 3,
                        pt: 2,
                        pb: 2,
                        bgcolor: "#1577a3",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      Model Viewer
                      <IconButton
                        href="http://localhost:1234/index.html"
                        target="_blank"
                      >
                        <LuExpand color="white" />
                      </IconButton>
                    </Typography>
                    {/* <ParaviewContext>
                      <Paraview
                        config={{
                          file: ["Blade.vtk"],
                          representation: "Surface",
                        }}
                      />
                    </ParaviewContext> */}
                  </Grid>
                  <Grid item md={5}>
                    <CardHeader
                      title="Model Based Validation"
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
                      }}
                    />
                    <Dropdown
                      title={"Requirements Matrix​"}
                      color="primary-light"
                    ></Dropdown>
                    <Dropdown title={"Analysis Matrix​"} color="primary-light">
                      <Box sx={{ ml: 3 }}>
                        <Dropdown
                          title={"Aero-Thermal Analysis​"}
                          color="secondary"
                        ></Dropdown>
                        <Dropdown
                          title={"Structural Analysis​"}
                          color="secondary"
                        ></Dropdown>
                        <Dropdown
                          title={"Material & Process Analysis​"}
                          color="secondary"
                        ></Dropdown>
                        <Dropdown
                          title={"Reliability Analysis​"}
                          color="secondary"
                        ></Dropdown>
                      </Box>
                    </Dropdown>
                    <Dropdown
                      title={"Test Case Matrix​"}
                      color="primary-light"
                    ></Dropdown>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 3,
                  }}
                >
                  <Button variant="contained" sx={{ m: 2, px: 3 }}>
                    View MBD
                  </Button>
                  <Box>
                    <Button variant="contained" sx={{ m: 2 }}>
                      Review Approval​
                    </Button>
                    <Button
                      onClick={() => navigate("/analysis-workflow-editor")}
                      variant="contained"
                      sx={{ m: 2 }}
                    >
                      Create Report​
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  };
  
  export default App;
  