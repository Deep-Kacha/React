const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const filepath = 'todos.json';
function readdata(){
    const todos = fs.readFileSync(filepath);
    if(!todos){
        return [];
    } else {
        return JSON.parse(todos);
    }
}
function savedata(){
    
}

let todos = ['Learn NodeJS','Learn ExpressJS'];
app.use(express.json());


// fetch all todos
app.get("/todo/", (req, res) => {
    const todos = readdata();
    res.json(todos)
})


// get todo with id
app.get("/todo/:id", (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex((todo) => todo.id == id)
    if (index == -1) {
        return res.status(401).json({ 'message': 'No todo with given id:' + id })
    }
    res.status(201).json(todos[index])
})


app.post('/todo/', (req, res) => {
    const todo = req.body.todo;
    const newtodo = {
        id:Date.now().toString(),
        title:req.body.title,
        iscompleted:false
    }
    todos.push(newtodo);
    res.status(201).json({
        'message': 'todo added successfully',
        'todo': newtodo
    })
})


app.put('/todo/:id', (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex((todo) => todo.id == id)
    if (index == -1) {
        return res.status(401).json({ 'message': 'No todo with given id:' + id })
    }
    todos[index] = {
        ...todos[index],
        title: req.body.title
    }
    res.send('update todo with id' + req.params.id)
        return res.status(201).json({ 'message': 'Data added : ', 'data' : todos[index] })
})


app.delete('/todo/:id', (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex((todo) => todo.id == id)
    if (index == -1) {
        return res.status(401).json({ 'message': 'No todo with given id:' + id })
    }
    todos = todos.filter((todo) => todo.id != id)
     return res.status(201).json({ 'message': 'todo deleted successfully' })
    res.send('delete todo with id' + req.params.id)
})
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))