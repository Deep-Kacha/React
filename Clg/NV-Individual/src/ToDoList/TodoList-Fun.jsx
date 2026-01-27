import React, { useState } from "react";

const ToDoListFun = () => {
    const [todo, setTodo] = useState([]);
    const [inputVal, setInputVal] = useState("");

    const handleInput = (e) => {
        setInputVal(e.target.value);
    };

    const addTodo = () => {
        if (inputVal.trim() === "") return;

    const newTodo = {
        id: Date.now(),
        title: inputVal,
        completed: false,
    };

        setTodo(prev => [...prev, newTodo]);
        setInputVal("");
    };

    const deleteTodo = (id) => {
        setTodo(prev => prev.filter(item => item.id !== id));
    };

    const toggleTodo = (id) => {
        setTodo(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, completed: !item.completed }
                    : item
            )
        );
    };

    return (
        <>
            <div align="center">
                <h2>To-Do List</h2>
            <input type="text" value={inputVal} onChange={handleInput}/>
            <br /><br />

            <button onClick={addTodo}>Add</button>
            <br /><br />

            <ul>
                {todo.map(x => (
                    <li key={x.id}>
                        <input type="checkbox" checked={x.completed} onChange={() => toggleTodo(x.id)}/>

                        <span style={{marginLeft: "8px",color: x.completed ? "green" : "red"}}>{x.title}</span>

                        <button style={{ marginLeft: "10px" }} onClick={() => deleteTodo(x.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            </div>
        </>
    );
};

export default ToDoListFun;