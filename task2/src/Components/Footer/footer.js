import React from "react";
import './footer.css';

function footer(props) {
    return (
        <footer className="footer">
            <div className="container">
                <p>{props.text}</p>
            </div>
        </footer>
    )
}

export default footer;