import React from "react";
import './cardstyle.css';

function film(props) {
    return (
        <div className='card'>
                <img className='card-img-top' src={props.img} alt='#'/>
                <div className="card-body">
                    <h4 className='card-title'>{props.name}</h4>
                    <p className='card-text'>{props.date}</p>
                </div>
        </div>
    )
}

export default film;