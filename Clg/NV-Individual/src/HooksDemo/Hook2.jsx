import React, {useState} from "react";

export default function HookEx2() {
    const [user, setUser] = useState({
        name: "Guest",
        age: 30,
        ce: true,
        city: "Rajkot"
    });

    const handleNameChange = (e) => {
        setUser({...user, name: e.target.value});
    }
    return (
        <>
        <div align="center">
            <label>Name : </label>
            <input type="text"
            placeholder="Enter Name"
            value={user.name}
            onChange={handleNameChange}
            />
            <br/>
            <label>Age : </label>
            <input type="number"
            placeholder="Enter Age"
            value={user.age}
            onChange={(e) => setUser({...user, age: e.target.value})}
            />
            <br/>
            <label>City : </label>
            <input type="text"
            placeholder="Enter City"
            value={user.city}
            onChange={(e) => setUser({...user, city: e.target.value})}
            />
            <br/>
            <input type="checkbox"
            checked={user.ce}
            onChange={(e) => setUser({...user, ce: e.target.checked})}
            /> College Educated
            <br/>
            <h2>User Information</h2>
            <p>Name : {user.name}</p>
            <p>Age : {user.age}</p>
            <p>City : {user.city}</p>
            <p>College Educated : {user.ce ? "Yes" : "No"}</p>
        </div>
        </>
    );
}