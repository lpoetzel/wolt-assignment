import React from "react";
import { ShoppingCart, Navigation, DollarSign } from "react-feather";
import { DIV } from "../styles/DIV";
import { INPUT } from "../styles/INPUT";
import { ICON } from "../styles/ICON";

interface Props {
    label: string;
    inputType: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    icon?: string;
    min?: string;
    borderColor: string;
}



function Input({ label, inputType, placeholder, onChange, value, icon, min, borderColor }: Props): JSX.Element {
    let Icon;
    if (icon === "location") {
        Icon = Navigation;
    } else if (icon === "money") {
        Icon = DollarSign

    } else if (icon === "items") {
        Icon = ShoppingCart
    }

    return (
        <>

            <label htmlFor={label}>{label}</label>
            <DIV>
                <INPUT
                    id={label}
                    type={inputType}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    min={min}
                    borderColor={borderColor}
                />
                {Icon && <ICON><Icon size={15} /></ICON>}
            </DIV>
        </>
    );
}

export default Input;
