import { connect } from "react-redux";
import AddColorForm from '../manager_color/AddColorForm/AddColorForm';
import ColorList from '../manager_color/ColorList/ColorList';
import ColorDetails from "../manager_color/ColorDetails/ColorDetails";
import { addColor, rateColor, removeColor } from "../store/redux/action_generator";
import { sortFunction, findById } from "../manager_color/lib/Tools";

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
const mapStateToProps = ( {colors}, {match} ) => ({
    colors: [...colors].sort(sortFunction(match.params.sort))
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

//颜色详情页(容器)
const Color = connect(
        (state, props) => findById(state.colors, props.match.params.id)
)(ColorDetails)

export {  NewColor, Colors, Color }