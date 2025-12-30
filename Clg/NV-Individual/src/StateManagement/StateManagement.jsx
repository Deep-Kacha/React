import React,{Component} from "react";

class StateCounter extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }
    increment=()=>{
        this.setState({count:this.state.count+1});
    }
    decrement=()=>{
        this.setState({count:this.state.count-1});
    }
    clear=()=>{
        this.setState({count:0});
    }

    render() {
        return <>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>
        increment
        </button>
        <button onClick={this.decrement}>
        decrement
        </button>
        <button onClick={this.clear}>
        clear
        </button>

        </>
}
}

export default StateCounter;