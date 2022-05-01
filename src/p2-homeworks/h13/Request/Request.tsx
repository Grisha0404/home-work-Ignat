import React from 'react';

type RequestType = {
    checked:boolean,
    click:()=>void,
    error: string,
}

export const Request = (props:RequestType) => {
    return (
        <div>
            <button>button</button>
            <div>
            <input type='checkbox' checked={props.checked} onClick={props.click}/>
                {props.error}
            </div>
        </div>
    );
};
