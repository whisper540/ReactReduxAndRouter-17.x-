import React from "react";
import ReactDOM from 'react-dom'
import CountdownDispatcher from "./CountdownDispatcher";
import countdownActions from "./countdownActions";
import CountdownStore from "./CountdownStore";
import Countdown from "./Countdown";

const appDispatcher = new CountdownDispatcher()
const actions = countdownActions(appDispatcher)
const store = new CountdownStore(10, appDispatcher)

const render = count => ReactDOM.render(
    <Countdown count={count} {...actions}/>,
    document.getElementById('count-demo')
)

store.on('TICK', ()=>render(store.count))
store.on('RESET', ()=>render(store.count))
render(store.count)