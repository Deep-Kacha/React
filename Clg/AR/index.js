// console.log('Testing');

// const x = (a, b) => {return a+b};

const express = require ('express')
const app = express()
const port = 3000
const fname = "Deep"
const lname = "Kacha"

app.get ('/',(req,res) => res.send("Backend Api is Running On this port"))
app.get ('/name',(req,res) => res.send("Welcome Raju !!"))
app.get ('/student',(req,res) => res.send("My Name is Deep, I studiesd in RK University"))
app.get ('/university',(req,res) => res.send("RK University"))
//app.get ('/infromation',(req,res) => res.send(`My First name is ${fname}, My Last name is ${lname}, My fullname is ${fname} ${lname}`))
// app.get('/fullname', (req, res) => {const { fname, lname } = req.query; res.send(My full name is ${fname} ${lname});});

app.listen (port, () => console.log (`Example app listening on port ${port}!`))



// create n point 
// 1. student which we print student information
// 2. UNI. (RKU)
// 3. which is accept fname and lname and display full name
// take two inputs and perform all the artithmatic operations

//GET, POST,  PUT, DELETE, PATCH, OPTIONS, HEADER
