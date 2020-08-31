import { connect } from "react-redux";
import SortMenu from "../manager_color/SortMenu/SortMenu";
import AddColorForm from '../manager_color/AddColorForm/AddColorForm';
import ColorList from '../manager_color/ColorList/ColorList';
import { addColor, rateColor, removeColor, sortColors } from "../store/redux/action_generator";
import { sortFunction } from "../manager_color/lib/Tools";

//排序(容器)
const Menu = connect(
    state=>({
            sort: state.sort
        }),
    dispatch=>({
            onSelect(sortBy){
                dispatch(sortColors(sortBy))
            }
        })
)(SortMenu)

//添加新颜色(容器)
const NewColor = connect(
    null,
    dispatch => ({
        onNewColor(title, color) {
            dispatch(addColor(title, color))
        }
    })
)(AddColorForm)

//颜色列表(容器)
const mapStateToProps = state => ({
    colors: [...state.colors].sort(sortFunction(state.sort))
})
const mapDispatchToProps = dispatch => ({
    onRemove(id){
        dispatch( removeColor(id) )
    },
    onRate(id, rating){
        dispatch( rateColor(id, rating) )
    }
})
const Colors = connect(
    mapStateToProps,
    mapDispatchToProps
)(ColorList)

export { Menu, NewColor, Colors }