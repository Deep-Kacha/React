import React, {Component} from "react";
// import PropTypes from 'prop-types';
import './ClassPropes.css';

const buttonClicked = () => {
    alert("Button Clicked! Give Me Money");
};

class ClassPropes extends Component {
    render() {
        const {name, email, button, imgsrc} = this.props;
        return (
            <>
                <div className="user-card">
                    <img src={imgsrc} alt="User Image"/>
                    <h2>{name}</h2>
                    <p>{email}</p>
                    <button onClick={buttonClicked}>{button}</button>
                    </div>
                </>
            );
    }
}

// ClassPropes.defaultProps = {
//     name: "Default Name",
//     email: "Default Email",
//     button: "Default Button",
//     imgsrc: "src/assets/marvels-spiderr-man-3840x2160-11990.jpeg"
// };

// ClassPropes.prototype = {
//     name: prototype.string.isRequired,
//     email: prototype.string.isRequired,
//     button: prototype.string.isRequired,
//     imgsrc: prototype.string.isRequired
// };

export default ClassPropes;