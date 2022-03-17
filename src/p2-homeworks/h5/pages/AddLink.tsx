import React from 'react';
import {Link} from "react-router-dom";
import s from './hw5.module.css'

export const AddLink = () => {
    return (

        <div className={s.link}>
            <Link to='/pre-junior'>pre-junior</Link>
            <Link to='/junior'>junior</Link>
            <Link to='/junior-plus'>junior-plus</Link>
        </div>
    );
};
