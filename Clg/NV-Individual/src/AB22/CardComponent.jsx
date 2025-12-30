import React, {Component} from "react";
import './CusCard.css';

class CardComponent extends Component {
    render() {
        return (
            <>
            <div className="user-card">
                <div>
                    <img src="src\assets\loop_universe.77-20250731-0001.jpg"/>
                    <div>
                        <button>Follow</button>
                    </div>
                    <div>
                    <p>This is Spidyyy</p>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
export default CardComponent;