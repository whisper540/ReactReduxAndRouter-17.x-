import React,{ Component } from "react";
import AddColorForm from './AddColorForm/AddColorForm';
import ColorList from './ColorList/ColorList';
import initData from "./data/initData";

class Main extends Component {
    state = {
        ...initData
    }

    constructor(props) {
        super(props);
        this.addColor = this.addColor.bind(this)
        this.rateColor = this.rateColor.bind(this)
        this.removeColor = this.removeColor.bind(this)
    }

    addColor(title, color) {
        const colors = [
            ...this.state.colors,
            {
                id: +new Date(),
                title,
                color,
                rating: 0
            }
        ]
        this.setState({colors})
    }

    rateColor(id, rating) {
        const colors = this.state.colors.map(color =>
                (color.id !== id) ?
                        color :
                        {
                            ...color,
                            rating
                        }
        )
        this.setState({colors})
    }

    removeColor(id) {
        const colors = this.state.colors.filter(
                color => color.id !== id
        )
        this.setState({colors})
    }

    render() {
        const { colors } = this.state;
        const {addColor, rateColor, removeColor} = this;
        return (
            <div className={'manager-color'}>
                <AddColorForm onNewColor={addColor}/>
                <ColorList colors={colors}  onRate={rateColor} onRemove={removeColor}/>
            </div>
        )
    }
}

export default Main;