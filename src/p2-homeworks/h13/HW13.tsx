import React, {useEffect, useState} from 'react';
import {Request} from './Request/Request'
import {RequestsAPI} from "./Request/RequestsAPI";

export const HW13 = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    useEffect(() => {
            RequestsAPI.postRequests(checked)
                .then((res) => {
                    setError('')
                })
                .catch((error) => {
                    console.log({...error});
                    setError(error.response.data.errorText)
                    console.log(error.response ? error.response.data.errorText : error.message);
                })
        },
        [checked])

    const click = () => {
        setChecked(!checked)
    }

    return (
        <div>
            <Request checked={checked} click={click} error={error}/>
        </div>
    );
};
