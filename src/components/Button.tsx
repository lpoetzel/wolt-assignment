import { BUTTON } from "../styles/BUTTON";
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