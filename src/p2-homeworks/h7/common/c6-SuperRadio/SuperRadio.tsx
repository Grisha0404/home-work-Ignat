import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (options:string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
        onChange && onChange(e)
        // onChange, onChangeOption
    }


    const mappedOptions: JSX.Element[]= options ? options.map((o, i) => ( // map options with key
        <label key={name + '-' + i}>
            <input
                type={'radio'}
                value={o}
                name={name}
                checked={value === o}
                onChange={onChangeCallback}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
