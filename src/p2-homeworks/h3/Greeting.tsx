import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number// need to fix any
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass; // need to fix with (?:)
    return (
        <div className={s.greeting}>
            <input value={name} onChange={setNameCallback} className={inputClass} placeholder={'Name'}/>
            <span className={s.errorText}>{error}</span>
            <button onClick={addUser} className={s.button}>Add</button>
            <span className={s.total}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
