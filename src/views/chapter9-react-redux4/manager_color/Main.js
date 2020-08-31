import React from "react";
import {Colors, Menu, NewColor} from "../container_hoc/Container";

const Main =()=> {
    return (
        <div className={'manager-color'}>
            <Menu />
            <NewColor />
            <Colors />
        </div>
    )
}

export default Main;