import React, {Component} from "react";
import './Color.css';
import StarRating from "../StarRating/StarRating";
import PropTypes from 'prop-types';
import {rateColor, removeColor} from "../../store/redux/action_generator";

class Color extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        rating: PropTypes.number,
        color: PropTypes.string,
        onRate: PropTypes.func
    }

    static contextTypes = {
        store: PropTypes.object
    }

    constructor(props) {
        super(props);
        this.style = { backgroundColor: '#CCC' }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {rating} = this.props;
        return rating !== nextProps.rating
    }

    UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
        this.style = null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {title, rating} = this.props
        const status = (rating > prevProps.rating) ? 'better' : 'worse'
        console.log(`${title} is getting ${status}`)
    }

    render() {
        const { id,title, rating, color } = this.props;
        const { store } = this.context;
        return <section className={'color'} style={this.style}>
            <h1>{title}</h1>
            <button className={'remove-btn'} onClick={()=>store.dispatch(removeColor(id))}>X</button>
            <div className={'color'} style={{backgroundColor: color}}>&nbsp;</div>
            <div>
                <StarRating starsSelected={rating} onRate={(rating)=>store.dispatch(rateColor(id,rating))}/>
            </div>
        </section>
    }
}

export default Color;