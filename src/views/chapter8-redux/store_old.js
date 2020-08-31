import { createStore, combineReducers } from "redux";
import { colors, sort } from "./redux/reducer";
import initState from "./data/initState";
import C from './redux/constants';
import { addColor } from './redux/action_generator'

const store = createStore(
    combineReducers({ colors, sort }),
    initState
)

const logState = ()=>console.log('color count: ',store.getState())
const unSubscribe = store.subscribe(logState)

//第一种方式
store.dispatch({
    type: C.ADD_COLOR,
    id: '199001185400',
    title: 'dkal dark',
    color: '#000',
    timestamp: '199001185400000'
})

//第二种方式通过Action生成器
store.dispatch(addColor("EColor", "#eeeeee"))