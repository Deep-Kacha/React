import React,{Component} from "react";

class StringStateManagement extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            age:""
        };
    }
    handleChangeName = (e) => {
        this.setState({name : e.target.value});
    };
    handleChangeEmail = (e) => {
        this.setState({email : e.target.value});
    };
    handleChangeAge = (e) => {
        this.setState({age : e.target.value});
    };

    consolelog = () => {
        console.log("Name: ", this.state.name);
        console.log("Email: ", this.state.email);
        console.log("Age: ", this.state.age);
    };

    render() {
        const {name, email, age} = this.state;
        return (
                    <>
                        <input type  = "text" 
                        value={name}
                        onChange={this.handleChangeName}/>&nbsp;&nbsp;
                        <input type  = "text" 
                        value={email}
                        onChange={this.handleChangeEmail}/>&nbsp;&nbsp;
                        <input type  = "text" 
                        value={age}
                        onChange={this.handleChangeAge}/>&nbsp;&nbsp;
                        
                        <button onClick={this.consolelog}>Click Me</button>

                        <h2>Name : {name}</h2>
                        <h2>Email : {email}</h2>
                        <h2>Age : {age}</h2>
                    </>
                );
    }
}

export default StringStateManagement;