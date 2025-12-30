import React, { Component } from "react";

class ConditionalRender extends Component {
    constructor() {
        super();
        this.state = {
            txtColor: "black", // Initial text color
            bgColor: "white"   // Initial background color
        };
    }

    // Function to toggle text color
    toggleTextColor = (color) => {
        this.setState({
            txtColor: color
        });
    };

    // Function to toggle background color
    toggleBgColor = (color) => {
        this.setState({
            bgColor: color
        });
    };

    render() {
        return (
            <>
                {/* Text Color Buttons */}
                <h3>Select color for text color:</h3>
                <input
                    type="button"
                    value="Green"
                    onClick={() => this.toggleTextColor("green")}
                />
                <input
                    type="button"
                    value="Red"
                    onClick={() => this.toggleTextColor("red")}
                />
                <input
                    type="button"
                    value="Blue"
                    onClick={() => this.toggleTextColor("blue")}
                />
                <input
                    type="button"
                    value="Yellow"
                    onClick={() => this.toggleTextColor("yellow")}
                />

                {/* Background Color Buttons */}
                <h3>Select color for background color:</h3>
                <input
                    type="button"
                    value="White"
                    onClick={() => this.toggleBgColor("white")}
                />
                <input
                    type="button"
                    value="Black"
                    onClick={() => this.toggleBgColor("black")}
                />
                <input
                    type="button"
                    value="Gray"
                    onClick={() => this.toggleBgColor("gray")}
                />
                <input
                    type="button"
                    value="Pink"
                    onClick={() => this.toggleBgColor("pink")}
                />

                {/* Display the sample text */}
                <div
                    style={{
                        color: this.state.txtColor,
                        backgroundColor: this.state.bgColor,
                        padding: "20px",  // Added some padding to make the text easier to read
                        marginTop: "20px"
                    }}
                >
                    This is a sample text.
                </div>

                {/* Show the current color settings */}
                <h2>
                    Text Color: {this.state.txtColor}, Background Color: {this.state.bgColor}
                </h2>
            </>
        );
    }
}

export default ConditionalRender;
