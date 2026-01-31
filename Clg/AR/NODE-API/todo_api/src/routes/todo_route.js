const express = require('express')
const router = express.Router();
const todoController = require('../controllers/todo.controller')

// fetch all todos
router.get("/", todoController.getAll)
// get todo with id
router.get("/:id", todoController.getById)
router.post('/', todoController.createTodo)
router.put('/:id', todoController.updateTodo)
router.delete('/:id', todoController.deleteTodo)
module.exports = router;