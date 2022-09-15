const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
require('dotenv').config({path:'./config/.dotenv'})
const app = express();

const connectionString = process.env.DB_STRING

  
MongoClient.connect(connectionString, { useUnifiedTopology: true }).then(
  (client) => {
    console.log("Connected to Database");
    const db = client.db("ecomm");
    

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json());

    app.listen(8080, (req, res) => {
      console.log("listening at 8080"); 
    });

    app.get("/user", (req,res)=>{
      db.collection("users").find().toArray()
      .then(result=>{
        res.json(result)
      })
      .catch(err=> console.log(err))
    })

    app.post("/profile", (req,res)=>{
      const myObj = {
        name:req.body.name,
        password: req.body.password
      }

      db.collection("users").insertOne(myObj)
      .then(result=>{
        console.log("user added");
        // res.redirect("/profile")
      }).catch(err=>console.log(err))
    })

    // here 
  }
);
