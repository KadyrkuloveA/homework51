import React from "react";
import './infostyle.css';

function info(props) {
    return (
        <section className="our-work container">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <span>{props.secondText}</span>
        </section>
    )
}

export default info;