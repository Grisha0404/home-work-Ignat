import React from 'react'
import Nouislider from "nouislider-react";
import style from '../c7-SuperRange/SuperRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleOnChange = (value: number | number[]) => {
        console.log(value)
    }

    return (
        <>
            DoubleRange
        </>
    )
}

export default SuperDoubleRange
