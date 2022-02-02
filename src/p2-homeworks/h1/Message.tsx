import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: any;
    name: string,
    massage: string,
    time: string,
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.avatarBlock}>
                <img src={props.avatar}/>
            </div>
            <div className={s.messageBlock}>
                <div className={s.nameBlock}>
                    {props.name}
                </div>
                <div className={s.textMessage}>
                    {props.massage}
                </div>
                <div className={s.timeBlock}>
                    {props.time}
                </div>
            </div>

        </div>
    )
}

export default Message
