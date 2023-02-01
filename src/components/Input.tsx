import React from "react";
import { CiLocationOn, CiShoppingCart, CiMoneyBill } from "react-icons/ci";
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
}



function Input({ label, inputType, placeholder, onChange, value, icon, min }: Props) {
    let Icon;
    if (icon === "location") {
        Icon = CiLocationOn;
    } else if (icon === "cart") {
        Icon = CiMoneyBill

    } else if (icon === "items") {
        Icon = CiShoppingCart
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
                />
                {Icon && <ICON><Icon /></ICON>}
            </DIV>
        </>
    );
}

export default Input;
