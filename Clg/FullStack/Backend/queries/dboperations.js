const pool = require('../db/connectiondb');

const getusers = (request, response) => {
    pool.query("SELECT * from userTB", (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

const saveuser = (request, response) => {
    const { name, run, country } = request.body;
    console.log("Received data:", { name, run, country });
    pool.query("INSERT INTO userTB (name, run, country) "+
        "VALUES ($1, $2, $3)", [name, run, country], (error, results) => {
        if (error) {
            console.error("Database Error:", error.message);
            return response.status(500).json({ error: error.message });
        }
        response.status(201).send("User added successfully");
    });
}

const updateuser = (request, response) => {
    const { name, run, country, id } = request.body;
    pool.query("UPDATE userTB SET name=$1, run=$2, country=$3 WHERE id=$4", 
        [name, run, country, id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send("User updated successfully");
    });
}
const deleteuser = (request, response) => {
    const { id } = request.body;
    pool.query("DELETE FROM userTB WHERE id=$1", [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send("User deleted successfully");
    });
}
module.exports = {
    getusers,
    saveuser,
    updateuser,
    deleteuser
}