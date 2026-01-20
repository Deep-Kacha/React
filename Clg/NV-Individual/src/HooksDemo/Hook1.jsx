import React, {useState} from "react";

export default function HookEx1() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Mister X");
    const [checked, setChecked] = useState(true);
    return (
        <div align="center">
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
            {checked ? <h1>Welcome, {name}!</h1> : null}
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            &nbsp;
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <h1>Name : {name}</h1>
            <input type="text" value = {name} onChange={(e) => setName(e.target.value)}/>
        </div>
    );
}