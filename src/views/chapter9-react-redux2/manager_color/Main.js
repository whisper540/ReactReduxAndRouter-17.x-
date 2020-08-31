import React,{ Component } from "react";
import PropTypes from 'prop-types';
import AddColorForm from './AddColorForm/AddColorForm';
import ColorList from './ColorList/ColorList';
import SortMenu from "./SortMenu/SortMenu";

class Main extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    }
    static childContextTypes = {
        store: PropTypes.object.isRequired
    }

    getChildContext(){
        return {
            store: this.props.store
        }
    }

    UNSAFE_componentWillMount() {
        this.unsubscribe = this.props.store.subscribe(()=>this.forceUpdate())
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div className={'manager-color'}>
                <SortMenu />
                <AddColorForm />
                <ColorList />
            </div>
        )
    }
}

export default Main;