import React from 'react'
import { INPUT } from './Global.styled'

type Props = {
    label: string,
    inputType: string,
    placeholder: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value?: string;
}

function Input({ label, inputType, placeholder, onChange, value }: Props) {
    return (
        <>
            <label>{label}</label>
            <INPUT
                type={inputType}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </>
    )
}

export default Input