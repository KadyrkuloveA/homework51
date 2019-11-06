import React from "react";
import './showcasestyle.css';

function showcase(props) {
    return (
        <section className="main-showcase">
            <img src={props.img} alt="#"/>
            <div className="headline container">
                <h1>{props.title}</h1>
                <button className="btn">{props.btn}</button>
            </div>
        </section>
    )
}

export default showcase;