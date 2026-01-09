const express = require('express')
const app = express()
const birds = require('./birds')
const Student = require('./Student')
const port = 3000

app.use(express.json())
app.use('/b',birds)
//student detail
//student university
//student branch
app.post('addstudent',(req, res) =>{
    const fname = req.body.Student;
    const lname = req.body.Student;
    res.send(`welcome $(fname) $(lanme)`)
})
app.all('/', (req, res) => res.send('From All'))

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/food{s}', (req, res) => res.send('food or foods'))
app.post('/', (req, res) => res.send('From Post'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//creat n point for food and foods
// n point uisng post which will accept students first name and last name and welcome message
// create n point of a DOB and print in DD-MM-YY format if the user is m kore than  18 the print messag eyou are eligible for addmission else ypu are npt eligible for addmisssion