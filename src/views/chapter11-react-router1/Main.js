import React from "react";
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import ManagerColor from './manager_color/Main'
import storeFactory from "./store/store";

const store = storeFactory()

const Main = ()=>{
    return <Provider store={store}>
        <HashRouter>
            <ManagerColor/>
        </HashRouter>
    </Provider>
}

export default Main