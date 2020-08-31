import React,{ Children } from "react";

const findChild = (children, child) => {
    return Children.toArray(children).
        filter(c=>c.type === child)[0]
}

const WhenTruthy = ({children})=>Children.only(children)

const WhenFalsy = ({children})=> Children.only(children)

const Display = ({ ifTruthy=true, children }) =>
        (ifTruthy) ?
            findChild(children, WhenTruthy) :
            findChild(children, WhenFalsy)

const age = 19

const Demo = ()=>{
    return <Display ifTruthy={age>21}>
        <WhenTruthy>
            <h1>You can Enter.</h1>
        </WhenTruthy>
        <WhenFalsy>
            <h1>Beat it Kid.</h1>
        </WhenFalsy>
    </Display>
}

export default Demo;