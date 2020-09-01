import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import ManagerColor from './manager_color/Main'
import storeFactory from "./store/store";

const store = storeFactory()

const Main = ()=>{
    return <Provider store={store}>
        <BrowserRouter>
            <ManagerColor/>
        </BrowserRouter>
    </Provider>
}

export default Main