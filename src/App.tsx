import React from 'react'
import s from './App.module.css'
import HW1 from "./p2-homeworks/h1/HW1"
import HW2 from "./p2-homeworks/h2/HW2";
import HW3 from "./p2-homeworks/h3/HW3";
import HW4 from "./p2-homeworks/h4/HW4";
import HW6 from "./p2-homeworks/h6/HW6";
import HW5 from "./p2-homeworks/h5/HW5";
import HW9 from "./p2-homeworks/h9/HW9";
import HW10 from "./p2-homeworks/h10/HW10";
import {Provider} from "react-redux";
import {store} from "./p2-homeworks/h10/bll/store";
import HW11 from "./p2-homeworks/h11/HW11";
import HW12 from "./p2-homeworks/h12/HW12";

function App() {
    return (
        <div className={s.App}>
            <div>react homeworks:</div>
            {/*<HW1/>
            <HW2/>*/}
            {/*<HW3/>*/}
            {/*<HW4/>*/}
            <HW5/>
            {/*<HW6/>*/}
            {/*<HW9/>*/}
            {/*<Provider store={store}>
            <HW10/>
            </Provider>*/}
            {/*<HW11/>*/}
            {/*<Provider store={store}>*/}
            {/*    <HW12/>*/}
            {/*</Provider>*/}
        </div>
    )
}

export default App
