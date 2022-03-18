import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: JSX.Element[]= options ? options.map((el, i) => ( // map options with key
        <option key={el + '-' + i} value={el}>
            {el}
        </option>
    )) : [] // map options with key

    const onChangeCallback = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
        onChange && onChange(e)

        // onChange, onChangeOption
    }

    return (
        <select onChange={onChangeCallback} {...restProps} >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
