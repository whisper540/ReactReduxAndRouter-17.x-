import React from "react";
import PropTypes from 'prop-types';

const SortMenu = ({ sort, onSelect })=>{
    return <div>
        <h2>排序方式：</h2>
        <button onClick={()=>onSelect('rating')}>评分</button>
        <button onClick={()=>onSelect('title')}>名称</button>
        <button onClick={()=>onSelect('timestamp')}>时间</button>
        <hr/>
    </div>
}

SortMenu.propTypes = {
    sort: PropTypes.string,
    onSelect: PropTypes.func
}

export default SortMenu;