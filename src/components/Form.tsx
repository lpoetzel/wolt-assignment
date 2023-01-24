import React, { PropsWithChildren } from "react";
import { FORM } from "./Global.styled";

type Props = {
    children: any;
}

const Form: React.FC<PropsWithChildren<Props>> = (props: any) => {
    const { children } = props;
    return <FORM > {children} </FORM>;
};

export default Form;