import React from "react";
import PropTypes from 'prop-types';
import Color from "../Color/Color";

const ColorList = ({ colors, onRemove, onRate }) => {

    return <div className={'color-list'}>
        {(colors.length === 0) ?
                <p>No Color Listed.(Add a Color)</p> :
                colors.map(color=>{
                    return <Color
                            key={color.id}
                            {...color}
                            onRemove={onRemove}
                            onRate={onRate}
                    />
                })
        }
    </div>
}

ColorList.propTypes = {
    colors: PropTypes.array,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
}

export default ColorList;