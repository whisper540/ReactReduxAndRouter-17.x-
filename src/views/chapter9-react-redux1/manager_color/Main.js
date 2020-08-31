import React from "react";
import AddColorForm from './AddColorForm/AddColorForm';
import ColorList from './ColorList/ColorList';
import SortMenu from "./SortMenu/SortMenu";

const Main = ({store}) =>{
    return <div className={'manager-color'}>
        <SortMenu store={store} />
        <AddColorForm store={store}/>
        <ColorList store={store}/>
    </div>
}

export default Main;