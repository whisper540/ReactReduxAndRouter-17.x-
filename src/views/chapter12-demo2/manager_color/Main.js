import React from "react";
import {Route, Switch} from "react-router-dom";
import {Colors, NewColor, Color } from "../container_hoc/Container";
import Menu from './SortMenu/SortMenu'

const Main =()=> {
    return <Switch>
                <Route exact path="/:id" component={Color}/>
                <Route path="/" component={
                    () => (
                            <div className="manager-color">
                                <Route component={Menu}/>
                                <NewColor/>
                                <Switch>
                                    <Route exact path='/' component={Colors}/>
                                    <Route path='/sort/:sort' component={Colors}/>
                                </Switch>
                            </div>
                    )
                }/>
            </Switch>
}

export default Main;