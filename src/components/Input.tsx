import React from 'react'

type Props = {
    label: string,
    inputType: string,
    inputId: string,
    placeholder: string,
    onChange: () => void,
}

function Input({ label, inputType, inputId, placeholder, onChange }: Props) {
    return (
        <>
            <label>{label}</label>
            <input
                type={inputType}
                id={inputId}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    )
}

export default Input