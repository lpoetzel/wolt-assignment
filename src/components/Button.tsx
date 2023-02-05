import { BUTTON } from "../styles/BUTTON";
import React from 'react'

type Props = {
    buttonText: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    opacity: string,
    pointer: string
}

const Button = ({ buttonText, onClick, opacity, pointer }: Props): JSX.Element => {
    return (
        <BUTTON onClick={onClick} opacity={opacity} pointer={pointer}>{buttonText}</BUTTON>
    )
}

export default Button