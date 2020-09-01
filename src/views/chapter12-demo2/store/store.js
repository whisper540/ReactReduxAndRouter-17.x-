import { createStore, combineReducers, applyMiddleware } from "redux";
import { colors } from "./redux/reducer";
import initData from "../data/initState";

//定义一个中间件，具备记录action的日志功能
const clientLogger = store => next => action =>{
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state: ',store.getState())
    console.log('action: ', action)
    result = next(action)
    console.log('next state: ', store.getState())
    console.groupEnd()
    return result
}

const serverLogger = store => next => action =>{
    console.log('\n dispatching server action \n')
    console.log(action)
    console.log('\n')
    return next(action)
}

const middleware = server => (server) ? serverLogger : clientLogger

const storeFactory = ( server=false, initState=initData )=>
    applyMiddleware(middleware(server))(createStore)(
        combineReducers({ colors }),
        initData
    )



export default storeFactory