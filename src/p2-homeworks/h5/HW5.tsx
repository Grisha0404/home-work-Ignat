import React from 'react'
import Routes from './Routes'
import {Header} from "./Header";
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header/>

                <Routes/>

            </HashRouter>
        </div>
    )
}

export default HW5
