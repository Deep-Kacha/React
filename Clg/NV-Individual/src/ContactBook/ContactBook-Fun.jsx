import React from "react";

const ContactBook = () => {
    const [contacts, setContacts] = React.useState([]);
    const [fname, setFname] = React.useState("");
    const [lname, setLname] = React.useState("");
    const [phone, setPhone] = React.useState("");

    const handleFnameChange = (e) => {
        setFname(e.target.value);
    };

    const handlelnameChange = (e) => {
        setLname(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const additionContacts = () => {
        if (
            fname.trim() === "" ||
            lname.trim() === "" ||
            phone.trim() === ""
        ) {
            return;
        }

        const newContact = {
            id: Date.now(),
            fname: fname,
            lname: lname,
            phone: phone,
            visible: false,
        };

        setContacts((prev) => [newContact, ...prev]);
        setFname("");
        setLname("");
        setPhone("");
    };

    const viewContact = (id) => {
        setContacts((prev) =>
            prev.map((y) =>
                y.id === id ? { ...y, visible: !y.visible } : y
            )
        );
    };

    const deleteContact = (id) => {
        setContacts((prev) => prev.filter((y) => y.id !== id));
    };

    return (
        <>
            <div align="center">
                <h1>Contact Book</h1>

                <input
                    type="text"
                    value={fname}
                    placeholder="First Name"
                    onChange={handleFnameChange}
                />
                <br />

                <input
                    type="text"
                    value={lname}
                    placeholder="Last Name"
                    onChange={handlelnameChange}
                />
                <br />

                <input
                    type="text"
                    value={phone}
                    placeholder="Mobile Number"
                    onChange={handlePhoneChange}
                />
                <br /><br />

                <button onClick={additionContacts}>Add Contact</button>
                <br />

                <ul>
                    {contacts.map((y) => (
                        <li key={y.id}>
                            {y.fname}{" "}
                            <button onClick={() => viewContact(y.id)}>View</button>{" "}
                            <button onClick={() => deleteContact(y.id)}>Delete</button>
                            <div style={{ display: y.visible ? "" : "none" }}>
                                {y.lname} {y.phone}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ContactBook;