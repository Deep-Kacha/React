import React, { Component } from "react";

class ContactBook extends Component {
    constructor(props) {
        super(props);
        this.state = { contacts: [], fname: "", lname: "", phone: "" };
    }

    handleFnameChange = (e) => {
        this.setState({ fname: e.target.value });
    };

    handlelnameChange = (e) => {
        this.setState({ lname: e.target.value });
    };

    handlePhoneChange = (e) => {
        this.setState({ phone: e.target.value });
    };
    
    additionContacts = () => {
        if (
            this.state.fname.trim() === "" ||
            this.state.lname.trim() === "" ||
            this.state.phone.trim() === ""
        ) {
            return;
        }
        

        const newContact = {
            id: Date.now(),
            fname: this.state.fname,
            lname: this.state.lname,
            phone: this.state.phone,
            visible: false,
        };

        this.setState((prevState) => ({
            contacts: [newContact, ...prevState.contacts],
            fname: "",
            lname: "",
            phone: "",
        }));
    };

    viewContact = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.map((y) =>
                y.id === id ? { ...y, visible: !y.visible } : y
            ),
        }));
    };


    deleteContact = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter((y) => y.id !== id)
        }));
    };


    render() {
        const { contacts, fname, lname, phone } = this.state;
        return (
            <>
                <input
                    type="text"
                    value={fname}
                    placeholder="First Name"
                    onChange={this.handleFnameChange}
                />
                <br />
                <input
                    type="text"
                    value={lname}
                    placeholder="Last Name"
                    onChange={this.handlelnameChange}
                />
                <br />
                <input
                    type="text"
                    value={phone}
                    placeholder="Mobile Number"
                    onChange={this.handlePhoneChange}
                />
                <br />
                <button onClick={this.additionContacts}>Add Contact</button>
                <br />
                <ul>
                    {contacts.map((y) => (
                        <li key={y.id}>
                            {y.fname}{" "}
                            <button onClick={() => this.viewContact(y.id)}>View</button>{" "}{" "}
                            <button onClick={() => this.deleteContact(y.id)}>Delete</button>
                            <div style={{ display: y.visible ? "" : "none" }}>
                                {y.lname} {y.phone}
                            </div>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default ContactBook;
