// create a calss based component named calculater
// it will take input from user informs of buttons
//prepare a button grid ads per windows calculator
//layout and impliment evalutoion logic to show result
//4-> operator 
//implemnt basci operation +,-,*,/


import { Component } from "react";
// import "./Calculater.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    };
  }

  handleClick = (value) => {
    if (value === "C") {
      this.setState({ display: "" });
    } else if (value === "=") {
      try {
        const result = eval(this.state.display);
        this.setState({ display: result.toString() });
      } catch {
        this.setState({ display: "Error" });
      }
    } else {
      this.setState({
        display: this.state.display + value
      });
    }
  };

  renderButton = (value) => {
    return (
      <button
        onClick={() => this.handleClick(value)}
        style={{ width: "60px", height: "40px", fontSize: "18px" }}
      >
        {value}
      </button>
    );
  };

  render() {
    return (
      <>
        <h1 align="center">Calculator</h1>

        <div align="center">
          <table>
            <tbody>
              <tr>
                <td colSpan="4">
                  <input
                    type="text"
                    value={this.state.display}
                    readOnly
                    style={{
                      width: "245px",
                      height: "40px",
                      fontSize: "20px",
                      textAlign: "right"
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td>{this.renderButton("7")}</td>
                <td>{this.renderButton("8")}</td>
                <td>{this.renderButton("9")}</td>
                <td>{this.renderButton("/")}</td>
              </tr>

              <tr>
                <td>{this.renderButton("4")}</td>
                <td>{this.renderButton("5")}</td>
                <td>{this.renderButton("6")}</td>
                <td>{this.renderButton("*")}</td>
              </tr>

              <tr>
                <td>{this.renderButton("1")}</td>
                <td>{this.renderButton("2")}</td>
                <td>{this.renderButton("3")}</td>
                <td>{this.renderButton("-")}</td>
              </tr>

              <tr>
                <td>{this.renderButton("C")}</td>
                <td>{this.renderButton("0")}</td>
                <td>{this.renderButton("=")}</td>
                <td>{this.renderButton("+")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Calculator;
