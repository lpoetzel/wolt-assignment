import { BUTTON } from "./Global.styled";
import React from 'react'

type Props = {
    buttonText: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ buttonText, onClick }: Props) => {
    return (
        <BUTTON onClick={onClick}>{buttonText}</BUTTON>
    )
}

export default Button