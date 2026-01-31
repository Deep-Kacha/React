const fs = require('fs')
const filePath = '.../src/data/todos.json'
function readdata() {
    const todos = fs.readFileSync(filePath)
    if (!todos) {
        return [];
    } else {
        return JSON.parse(todos);
    }
}
function savedata(data) {
    fs.writeFileSync(filePath, JSON.stringify(data));
}
const getAll = () => {
    const todos = readdata();
    return todos;
}
const getById = (id) => {

}
const create = (title) => {

}
const update = (id, title) => {

}
const del = (id) => {

}
module.exports = {
    getAll,
    getById,
    create,
    update,
    del
}