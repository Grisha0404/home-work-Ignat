import React from 'react'
import s from './hw5.module.css'

function Error404() {
    return (
        <div className={s.error}>
            <div style={{fontSize: 50}}><b>404</b></div>
            <div style={{color: "red"}}>Page not found!</div>
            <div><b>—ฅ/ᐠ.̫ .ᐟ\ฅ—</b></div>
        </div>
    )
}

export default Error404
