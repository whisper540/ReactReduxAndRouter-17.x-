import React from "react";
import Star from "../Star/Star";
import PropTypes from 'prop-types';

const StarRating = ({ starsSelected=0, totalStars=5, onRate=f=>f }) => {
    return <div className={'star-rating'}>
        {[...Array(totalStars)].map((n,i)=>{
            return <Star key={i}
                selected={i<starsSelected}
                onClick={()=>onRate(i+1)}
            />
        })}
    </div>
}

StarRating.propTypes = {
    totalStars: PropTypes.number,
    onRate: PropTypes.func
}

export default StarRating;