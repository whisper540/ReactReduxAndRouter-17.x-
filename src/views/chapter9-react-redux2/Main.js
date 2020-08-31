import React from "react";
import ManagerColor from './manager_color/Main'
import storeFactory from "./store/store";

const store = storeFactory()

const Main = ()=>{
    return <ManagerColor store={store}/>
}

export default Main