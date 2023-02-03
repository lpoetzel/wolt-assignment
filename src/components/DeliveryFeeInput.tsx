import React, { useContext, useState } from "react";
import { DeliveryFeeContext } from "../contexts/DeliveryFee";
import { calculateFee } from "../functions/calculateFee";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";

export const DeliveryFeeInput: React.FC = (): JSX.Element => {
    const [errorMessage, setErrorMessage] = useState("");
    const [inputError, setInputError] = useState({
        cartValue: false,
        distance: false,
        numItems: false,
    });
    const {
        cartValue,
        setCartValue,
        distance,
        setDistance,
        numItems,
        setNumItems,
        fee,
        setFee,
        orderTime,
        setOrderTime,
    } = useContext(DeliveryFeeContext);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setErrorMessage('');
        e.preventDefault();

        if (!cartValue && !distance && !numItems) {
            setErrorMessage('Please enter values for all fields');
        } else {
            if (!cartValue) {
                setInputError(({ ...inputError, cartValue: true }))
                setErrorMessage('Please insert cart values');
            }
            if (!distance) {
                setInputError(({ ...inputError, distance: true }))
                setErrorMessage('Please insert a delivery distance');
            }
            if (!numItems) {
                setInputError(({ ...inputError, numItems: true }))
                setErrorMessage('Please insert a number of items');
            }
            calculateFee(
                e,
                cartValue,
                distance,
                numItems,
                orderTime,
                setFee
            );
        }
    };


    const handleChange = (field: string, value: string | number) => {
        setErrorMessage("");
        setInputError({ ...inputError, [field]: false });

        switch (field) {
            case "cartValue":
                if (!value) {
                    setInputError({ ...inputError, cartValue: true });
                    setErrorMessage("Please insert cart values");
                    break;
                }
                setCartValue(Number(value));
                break;
            case "distance":
                if (!value) {
                    setInputError({ ...inputError, distance: true });
                    setErrorMessage("Please insert a delivery distance");
                    break;
                }
                setDistance(Number(value));
                break;
            case "numItems":
                if (!value) {
                    setInputError({ ...inputError, numItems: true });
                    setErrorMessage("Please insert a number of items");
                    break;
                }
                setNumItems(Number(value));
                break;
            default:
                break;
        }
    };

    return (
        <Form>
            <Input
                label="Cart value:"
                inputType="number"
                placeholder="in €"
                onChange={(e) => handleChange("cartValue", e.target.value)}
                icon="money"
                borderColor={
                    inputError.cartValue ? "red" : cartValue ? "green" : "black"
                }
            />
            <Input
                label="Delivery distance:"
                inputType="number"
                placeholder="in meter"
                onChange={(e) => handleChange("distance", e.target.value)}
                icon="location"
                borderColor={inputError.distance ? "red" : distance ? "green" : "black"}
            />
            <Input
                label="Number of Items:"
                inputType="number"
                placeholder="e.g. 3"
                onChange={(e) => handleChange("numItems", e.target.value)}
                icon="items"
                borderColor={inputError.numItems ? "red" : numItems ? "green" : "black"}
            />

            <Input
                label="Order Time:"
                inputType="datetime-local"
                value={orderTime.toISOString().slice(0, -5)}
                min={new Date().toISOString().slice(0, -5)}
                onChange={(e) => setOrderTime(new Date(e.target.value))}
                borderColor="inherit"
            />
            <Button onClick={handleClick} buttonText="Calculate delivery price" />
            {errorMessage ? (
                <span style={{ color: "red" }}>{errorMessage}</span>
            ) : null}
            <h3 data-testid="fee">Delivery fee: {fee} €</h3>
        </Form>
    );
};
