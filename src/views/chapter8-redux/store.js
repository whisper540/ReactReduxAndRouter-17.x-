import { createStore, combineReducers, applyMiddleware } from "redux";
import { colors, sort } from "./redux/reducer";
import initData from "./data/initState";

//定义一个中间件，具备记录action的日志功能
const logger = store => next => action =>{
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state: ',store.getState())
    console.log('action: ', action)
    result = next(action)
    console.log('next state: ', store.getState())
    console.groupEnd()
    return result
}

const storeFactory = (initState=initData)=>
    applyMiddleware(logger)(createStore)(
        combineReducers({ colors, sort }),
        initData
    )



export default storeFactory