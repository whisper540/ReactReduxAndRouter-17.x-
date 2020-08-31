import React from "react";
import { sortColors } from "../../store/redux/action_generator";
import PropTypes from "prop-types";

const SortMenu = (props,{store})=>{
    return <div>
        <h2>排序方式：</h2>
        <button onClick={()=>store.dispatch(sortColors('rating'))}>评分</button>
        <button onClick={()=>store.dispatch(sortColors('title'))}>名称</button>
        <button onClick={()=>store.dispatch(sortColors('timestamp'))}>时间</button>
        <hr/>
    </div>
}

SortMenu.contextTypes = {
    store: PropTypes.object
}

export default SortMenu;