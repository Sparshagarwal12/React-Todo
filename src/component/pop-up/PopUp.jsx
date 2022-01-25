import React from "react";
import './pop-up.css';
const Popup = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <p className="pop-up-content">{props.content}</p>
            </div>
        </div>
    );
};

export default Popup;