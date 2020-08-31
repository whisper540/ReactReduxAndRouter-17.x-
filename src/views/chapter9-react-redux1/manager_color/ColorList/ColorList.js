import React from "react";
import PropTypes from 'prop-types';
import Color from "../Color/Color";
import { rateColor, removeColor } from "../../store/redux/action_generator";
import {sortFunction} from "../lib/Tools";

const ColorList = ({store}) => {
    const { colors, sort } = store.getState()
    const sortedColors = [...colors].sort(sortFunction(sort))

    return <div className={'color-list'}>
        {(colors.length === 0) ?
            <p>No Color Listed.(Add a Color)</p> :
                sortedColors.map(color=>{
                return <Color
                    key={color.id}
                    {...color}
                    onRate={(rating) => store.dispatch(rateColor(color.id, rating))}
                    onRemove={() => store.dispatch(removeColor(color.id))}
                />
            })
        }
    </div>
}

ColorList.propTypes = {
    store: PropTypes.object
}

export default ColorList;