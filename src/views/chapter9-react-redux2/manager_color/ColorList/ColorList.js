import React from "react";
import PropTypes from 'prop-types';
import Color from "../Color/Color";
import {sortFunction} from "../lib/Tools";

const ColorList = (props, {store}) => {
    const { colors, sort } = store.getState()
    const sortedColors = [...colors].sort(sortFunction(sort))

    return <div className={'color-list'}>
        {(colors.length === 0) ?
                <p>No Color Listed.(Add a Color)</p> :
                sortedColors.map(color=>{
                    return <Color
                            key={color.id}
                            {...color}
                    />
                })
        }
    </div>
}

ColorList.contextTypes = {
    store: PropTypes.object
}

export default ColorList;