import React from "react";
import './headerstyle.css';

function header(props) {
    return (
        <header className="header container">
            <a href="#" className="logo">{props.name}</a>
            <nav className="main-nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">{props.secondItem}</a></li>
                    <li><a href="#">{props.thirdItem}</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Find Out More</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default header;