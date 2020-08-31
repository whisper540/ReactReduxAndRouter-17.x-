import React from "react";
import './Color.css';
import StarRating from "../StarRating/StarRating";

const Color = ({ title, color, rating=0, onRemove = f => f, onRate = f => f }) =>{
    return <section className={'color'}>
        <h1>{title}</h1>
        <button className={'remove-btn'} onClick={onRemove}>X</button>
        <div className={'color'} style={{backgroundColor: color}}></div>
        <div>
            <StarRating starsSelected={rating} onRate={onRate}/>
        </div>
    </section>
}

export default Color;