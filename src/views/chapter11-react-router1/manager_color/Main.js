import React from "react";
import {Route, Switch} from "react-router-dom";
import {Colors, Menu, NewColor, Color } from "../container_hoc/Container";

const Main =()=> {
    return <Switch>
                <Route exact path="/:id" component={Color}/>
                <Route path="/" component={
                    () => (
                            <div className="vessel">
                                <Menu/>
                                <NewColor/>
                                <Colors/>
                            </div>
                    )
                }/>
            </Switch>
}

export default Main;