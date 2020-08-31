import React from "react";
import ReactDOMServer from 'react-dom/server';


const Main = () => {
    return <div>同构</div>
}

console.log(ReactDOMServer.renderToString(<Main />))
export default Main;