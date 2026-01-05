import React, { Component } from "react";

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [],
            inputVal: '',
        };
    }

    handleInput = (e) => {
        this.setState({
            inputVal: e.target.value
        });
    };

    AddTodo = () => {
        if (this.state.inputVal.trim() === '') return;

        const newTodo = {
            id: Date.now(),
            title: this.state.inputVal,
            completed: false,
        };

        this.setState(prevState => ({
            todo: [...prevState.todo, newTodo],
            inputVal: '',
        }));
    };

    deleteTodo = (id) => {
        this.setState(prevState => ({
            todo: prevState.todo.filter(item => item.id !== id)
        }));
    };

    toggleTodo = (id) => {
        this.setState(prevState => ({
            todo: prevState.todo.map(item =>
                item.id === id
                    ? { ...item, completed: !item.completed }
                    : item
            )
        }));
    };

    render() {
        const { todo, inputVal } = this.state;

        return (
            <>
                <input
                    type="text"
                    value={inputVal}
                    onChange={this.handleInput}
                />
                <br /><br />

                <button onClick={this.AddTodo}>Add</button>
                <br /><br />

                <ul>
                    {todo.map(x => (
                        <li key={x.id}>
                            <input type="checkbox" checked={x.completed} onChange={() => this.toggleTodo(x.id)}/>

                            <span style={{ marginLeft: "8px", color: x.completed ? "green" : "red"}}> {x.title} </span>

                            <button style={{ marginLeft: "10px" }} onClick={() => this.deleteTodo(x.id)}> Delete </button>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default ToDoList;
