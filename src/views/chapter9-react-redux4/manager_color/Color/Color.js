import React, {Component} from "react";
import './Color.css';
import StarRating from "../StarRating/StarRating";
import PropTypes from 'prop-types';

class Color extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        rating: PropTypes.number,
        color: PropTypes.string,
        onRate: PropTypes.func,
        onRemove: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.style = { backgroundColor: '#CCC' }
    }

    componentDidMount() {
        this.style = null
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {rating} = this.props;
        return rating !== nextProps.rating
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {title, rating} = this.props
        const status = (rating > prevProps.rating) ? 'better' : 'worse'
        console.log(`${title} is getting ${status}`)
    }

    render() {
        const { id,title, rating, color, onRemove, onRate } = this.props;
        return <section className={'color'} style={this.style}>
            <h1>{title}</h1>
            <button className={'remove-btn'} onClick={()=>onRemove(id)}>X</button>
            <div className={'color'} style={{backgroundColor: color}}>&nbsp;</div>
            <div>
                <StarRating starsSelected={rating} onRate={(rating)=>onRate(id,rating)}/>
            </div>
        </section>
    }
}

export default Color;