import React from "react";
import PopUpButton from "./MenuButton";

const Main = ()=>{
    return <PopUpButton hidden={true} txt={'toggle popup'}>
        <h1>Hidden Content</h1>
        <p>This content will start off hidden</p>
    </PopUpButton>
}

export default Main;