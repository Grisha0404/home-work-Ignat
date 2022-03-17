import React from 'react'
import {AddLink} from "./pages/AddLink";
import s from '../../App.module.css'

export function Header() {
    return (

        <div className={s.poster}>
            <div className={s.block}>
                <AddLink/>
            </div>
        </div>
    )
}