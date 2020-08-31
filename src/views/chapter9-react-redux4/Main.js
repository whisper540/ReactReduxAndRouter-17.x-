import React from "react";
import { Provider } from 'react-redux'
import ManagerColor from './manager_color/Main'
import storeFactory from "./store/store";

const store = storeFactory()

const Main = ()=>{
    return <Provider store={store}>
        <ManagerColor/>
    </Provider>
}

export default Main