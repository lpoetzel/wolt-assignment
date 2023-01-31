import React, { PropsWithChildren } from "react";
import { FORM } from "../styles/FORM";

type Props = {
    children: React.ReactNode;
}

const Form: React.FC<PropsWithChildren<Props>> = (props: any) => {
    const { children } = props;
    return <FORM > {children} </FORM>;
};

export default Form;