import express from 'express';
import path from 'path';
import fs from 'fs';
import { Provider } from 'react-redux';
import { compose } from 'redux';
import {StaticRouter} from 'react-router-dom';
import { renderToString} from "react-dom/server";
import ManagerColor from '../views/chapter12-demo2/manager_color/Main';
import storeFactory from "../views/chapter12-demo2/store/store";
import initState from '../views/chapter12-demo2/data/initState.json';
import React from "react";

const serverStore = storeFactory(true, initState)
serverStore.subscribe( ()=>
    fs.writeFile(
        path.join( __dirname, '../views/chapter12-demo2/data/initState.json' ),
        JSON.stringify( serverStore.getState() ),
        error => (error) ? console.log("Error saving state!", error) : null
    )
)
const addStoreToRequestPipeline = ( req, res, next )=>{
    req.store = serverStore
    next()
}

const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`)
    next()
}

const fileAssets = express.static(
    path.join( __dirname, '../../dist/assets' )
)

const makeClientStoreFrom = store => url =>({
    store: storeFactory(false, store.getState()),
    url
})

const renderComponentsToHTML = ( { url, store } ) => ({
    state: store.getState(),
    css: defaultStyles,
    html: renderToString(
        <Provider store={store}>
            <StaticRouter location={url} context={}>
                <ManagerColor/>
            </StaticRouter>
        </Provider>
    )
})

const buildHTMLPage = ({html, state}) =>`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Universal Color Organizer</title>
    </head>
    <body>
        <div id="react-container">${html}</div>
        <script>
            window.__INITAL_STATE__ = ${JSON.stringify(state)}
        </script>
        <script src="/bundle.js"></script>
    </body>
</html>
`

const htmlResponse = compose(
    buildHTMLPage,
    renderComponentsToHTML,
    makeClientStoreFrom
)

const respond = (req, res) => res.status(200).send(htmlResponse(req.url))

export default express()
        .use(logger)
        .use(fileAssets)
        .use(addStoreToRequestPipeline)
        .use(respond)

