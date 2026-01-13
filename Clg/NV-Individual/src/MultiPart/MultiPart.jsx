import React, { Component } from "react";
class MultiPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t1: "",
      t2: "",
      t3: "",
      t4: "",
      t5: "",
      t6: "",
      t7: "",
      t8: "",
      t9: "",
      index: 0,
    };
  }
  onclicknext = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
  };
  onclickprevious = () => {
    this.setState((prevState) => ({
      index: prevState.index - 1,
    }));
  };
  render() {
    const { t1, t2, t3, t4, t5, t6, t7, t8, t9, index } = this.state;
    return (
      <div align = "center">
        <h1>User Infromation</h1>
        <div style={{ display: index === 0 ? "" : "none" }}>
          <h1>Part1</h1>
          <input
            type="text"
            value={t1}
            placeholder="First Name"
            onChange={(e) => this.setState({ t1: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={t2}
            placeholder="Last Name"
            onChange={(e) => this.setState({ t2: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={t3}
            placeholder="Mobile Number"
            onChange={(e) => this.setState({ t3: e.target.value })}
          />
          <br />
        </div>
        <div style={{ display: index === 1 ? "" : "none" }}>
          <h1>Part2</h1>
          <input
            type="text"
            value={t4}
            placeholder="First Name"
            onChange={(e) => this.setState({ t4: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={t5}
            placeholder="Last Name"
            onChange={(e) => this.setState({ t5: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={t6}
            placeholder="Mobile Number"
            onChange={(e) => this.setState({ t6: e.target.value })}
          />
          <br />
        </div>
        <div style={{ display: index === 2 ? "" : "none" }}>
          <h1>Part3</h1>
          <input
            type="text"
            value={t7}
            placeholder="First Name"
            onChange={(e) => this.setState({ t7: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={t8}
            placeholder="Last Name"
            onChange={(e) => this.setState({ t8: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={t9}
            placeholder="Mobile Number"
            onChange={(e) => this.setState({ t9: e.target.value })}
          />
          <br />
        </div>
        <div>
          <button disabled={index === 2} onClick={this.onclicknext}>
            Next
          </button>
          &nbsp;&nbsp;
          <button disabled={index === 0} onClick={this.onclickprevious}>
            Previous
          </button>
        </div>
        <div>
          <h3>First Name : {t1}</h3>
          <h3>Last Name : {t2}</h3>
          <h3>Roll No : {t3}</h3>
        </div>
        <div>
          <h3>First Name : {t4}</h3>
          <h3>Last Name : {t5}</h3>
          <h3>Roll No : {t6}</h3>
        </div>
        <div>
          <h3>First Name : {t7}</h3>
          <h3>Last Name : {t8}</h3>
          <h3>Roll No : {t9}</h3>
        </div>
      </div>
    );
  }
}
export default MultiPart;
