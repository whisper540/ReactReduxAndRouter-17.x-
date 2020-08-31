import React from "react";
import ReactDOM from 'react-dom';
import ManagerColor from './manager_color/Main'
import storeFactory from "./store/store";

const store = storeFactory()

const render = ()=>
    ReactDOM.render(<ManagerColor store={store}/>,document.getElementById('react-redux-demo1'))

store.subscribe(render)
render()