import React, {SetStateAction, useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<SetStateAction<string>>()
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date().toLocaleTimeString())
        }, 1000)
        setTimerId(id)
    }
    const stop = () => {
        clearInterval(timerId)
        setDate(stringTime)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = new Date().toLocaleTimeString()// fix with date
    const stringDate = new Date().toDateString() // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                Time: {date}
            </div>

            {show ? (
                <div>
                    {stringDate}
                </div>
            ) : (
                <br/>
            )}
            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
