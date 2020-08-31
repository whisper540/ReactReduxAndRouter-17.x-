import React from "react";
import PropTypes from 'prop-types';
import SortMenu from "../manager_color/SortMenu/SortMenu";
import AddColorForm from '../manager_color/AddColorForm/AddColorForm';
import ColorList from '../manager_color/ColorList/ColorList';
import { addColor, rateColor, removeColor, sortColors } from "../store/redux/action_generator";
import { sortFunction } from "../manager_color/lib/Tools";

//排序(容器)
const Menu = (props,{store})=>{
    return <SortMenu sort={store.getState().sort}
                     onSelect={ sortBy => store.dispatch( sortColors(sortBy) ) }
    />
}
Menu.contextTypes = {
    store: PropTypes.object
}

//添加新颜色(容器)
const NewColor = (props,{store})=>{
    return <AddColorForm onNewColor={(title, color)=>store.dispatch(addColor(title, color))}/>
}
NewColor.contextTypes = {
    store: PropTypes.object
}

//颜色列表(容器)
const Colors = (props,{store})=>{
    const { colors, sort } = store.getState()
    const sortedColors = [...colors].sort( sortFunction(sort) )
    return <ColorList colors={sortedColors}
                      onRemove={ id=>store.dispatch( removeColor(id) ) }
                      onRate={ (id,rating)=>store.dispatch( rateColor(id, rating) ) }
    />
}
Colors.contextTypes = {
    store: PropTypes.object
}

export { Menu, NewColor, Colors }