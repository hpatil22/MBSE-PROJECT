import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import ReviewEditor from "./UserRequirementTable/ReviewEditor";

function generateRandomId(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
}

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  // transition: theme.transitions.create('transform', {
  //   duration: theme.transitions.duration.shortest,
  // }),
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    //   backgroundColor: theme.palette.common.black,
    //   color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    //   backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const Dashboard = (props) => {
  const [expanded, setExpanded] = useState(true);
  // const [dataArray, setDataArray] = useState([]);
  // const [previousRequirements, setPreviousRequirements] = useState([]);
// console.log(props.previous)
  
  const [formData, setFormData] = useState({
    id:`Req - ${makeid(5)}`,
    business_Requirements: "",
    business_Needs: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //  const fetchData = async () => {
  //   const result = await axios.get("http://localhost:8080/find-all");
  //   console.log(result.data);
  //   setPreviousRequirements(result.data);
  //   // res.json(result.data);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await axios.post("http://localhost:8080/create", formData);
    console.log(result.data);
    if (
      formData.business_Needs === "" ||
      formData.business_Requirements === "" 
    ) {
      
    props.setDataArray(props.previous)
    } else {
      props.setDataArray((prevArray) => {
        const newData = [
          ...prevArray,
          { ...formData, id: generateRandomId(4) },
        ];
        console.log(newData);
        console.log(props.dataArray)

        return newData;
      });
    }
    setFormData({
      business_Requirements: "",
      business_Needs: "",
    });

    // fetchData()
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "3px 3px 13px gray",
          border: "1px solid gray",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        <CardActions
          disableSpacing
          sx={{
            justifyContent: "space-between",
            backgroundColor: "navyblue",
            color: "white",
            borderBottom: "1px solid gray",
          }}
        >
          <span
            style={{
              backgroundColor: "#0193F5",
              padding: "8px",
              borderRadius: "5px",
            }}
            expand={expanded}
            onClick={handleExpandClick}
          >
            Requirement
          </span>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "10px",
                  }}
                >
                  <label> Name of Requirement </label>
                  <input
                    name="business_Requirements"
                    type="text"
                    style={{
                      width: "40%",
                      padding: "5px",
                      borderRadius: "5px",
                      border: "1px solid gray",
                    }}
                    value={formData.business_Requirements}
                    onChange={handleInputChange}
                  ></input>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "5px",
                  }}
                >
                  <label>Business Need</label>
                  <input
                    name="business_Needs"
                    type="text"
                    style={{
                      width: "90%",
                      padding: "30px",
                      borderRadius: "5px",
                      border: "1px solid gray",
                    }}
                    value={formData.business_Needs}
                    onChange={handleInputChange}
                  ></input>
                </div>
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: "#0193F5",
                  margin: "10px",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </form>
          </CardContent>
        </Collapse>
      </Card>

      {/* {table content } */}
      {/* {!props.dataArray && <p>no data found</p>} */}
      <h3 style={{ width: "80%", marginTop: "40px", color: "#0193F5" }}>
        Previous Requirements
      </h3>
      {props.dataArray && (
        <TableContainer component={Paper} sx={{ textAlign: "center" }}>
          <Table
            sx={{ minWidth: 700, textAlign: "center" }}
            aria-label="customized table"
          >
            <TableHead
              sx={{
                fontWeight: "10px",
                fontSize: "10px",
                backgroundColor: "lightgray",
              }}
            >
              <TableRow sx={{ backgroundcolor: "lightgray" }}>
                <StyledTableCell>Req ID</StyledTableCell>
                <StyledTableCell align="center">Business Need</StyledTableCell>
                <StyledTableCell align="center">
                  Business Requirements
                </StyledTableCell>
                <StyledTableCell align="center">comment</StyledTableCell>
                {/* <StyledTableCell align="center">Protein&nbsp;(g)</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody sx={{ textAlign: "center" }}>
              { props.previous.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.business_Needs}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.business_Requirements}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <ReviewEditor></ReviewEditor>
                  </StyledTableCell>
                </StyledTableRow>
              )
              )
              }
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default Dashboard;
