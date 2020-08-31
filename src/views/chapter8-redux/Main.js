import React from "react";
import storeFactory from "./store";
import {addColor} from "./redux/action_generator";

const store = storeFactory()
const logState = ()=>console.log('color count: ',store.getState())
const unSubscribe = store.subscribe(logState)
//通过Action生成器
store.dispatch(addColor("EColor", "#eeeeee"))
//取消订阅
unSubscribe()
store.dispatch(addColor("SColor", "#333"))

const Main = ()=>{
    return <h1>Redux</h1>
}

export default Main;