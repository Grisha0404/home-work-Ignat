import React from 'react'
import {AddLink} from "./pages/AddLink";
import s from '../../App.module.css'

function Header() {
    return (
        <div className={s.poster}>
            <div className={s.block}>
                <AddLink/>
            </div>
        </div>
    )
}

export default Header
