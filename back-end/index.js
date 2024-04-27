// const express = require('express');
import express from 'express';
// const bodyParser = require('body-parser');
import bodyParser from 'body-parser';
// const cors = require('cors');
import cors from 'cors';
import axios from 'axios';
import mysql from 'mysql';
// const axios = require("axios")

const app = express();
app.use(cors());
const port = 8080;

app.use(bodyParser.json());

// function makeid(length) {
//   let result = '';
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   const charactersLength = characters.length;
//   let counter = 0;
//   while (counter < length) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     counter += 1;
//   }
//   return result;
// }

// app.get('/find-all', async (req, res) => {
//   const result =  await axios.get(" https://2342-14-97-223-90.ngrok.io/UserRequirementModule-0.0.1-SNAPSHOT/api/users/findAll")
//   console.log(result.data);
//   res.json(result.data);
// });
// app.post('/create', async (req, res) => {
//   const data = req.body;
//   // data["ID"] = makeid(5)
//   console.log(data);
//   const result =  await axios.post(" https://2342-14-97-223-90.ngrok.io/UserRequirementModule-0.0.1-SNAPSHOT/api/users/create", data)
//   console.log(result.data);
//   res.json(result.data);
// });
// // app.post('https://6756-14-97-223-90.ngrok.io/UserRequirementModule-0.0.1-SNAPSHOT/api/users/create', (req, res) => {
// //   const data = req.body;
// //   // Process the received data as needed
// //   console.log(data);
// //   res.json({ message: 'Data received successfully' });
// // });

const db = mysql.createConnection({
  name: 'localhost',
  user: 'root',
  password:'',
  database: 'login'

})

app.post('/login', (req, res) => {
const sql = "INSERT INTO users (`username`, `email`,`password`) VALUES (?)";
const values =[

  req.body.name,
  req.body.email,
  req.body.password
]

db.query(sql, [values], (err, result) => {
  if (err) return res.json({Message: "error creating"});
  return res.json(result)
})
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});