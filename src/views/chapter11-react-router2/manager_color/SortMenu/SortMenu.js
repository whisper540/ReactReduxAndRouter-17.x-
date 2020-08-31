import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const selectedStyle = { color: 'red' }

const SortMenu = ({ match })=>{
    return <div>
        <h2>排序方式：</h2>
        <NavLink to='/' style={match.isExact ? selectedStyle : null}>时间</NavLink>/
        <NavLink to='/sort/title' activeStyle={selectedStyle}>名称</NavLink>/
        <NavLink to='/sort/rating' activeStyle={selectedStyle}>评分</NavLink>
        <hr/>
    </div>
}

SortMenu.propTypes = {
    sort: PropTypes.string,
    onSelect: PropTypes.func
}

export default SortMenu;