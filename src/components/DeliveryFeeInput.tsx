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
    //import states from context
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

    //disable button when there are no values
    const isButtonDisabled = cartValue === 0 || distance === 0 || numItems === 0;

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        calculateFee(
            e,
            cartValue,
            distance,
            numItems,
            orderTime,
            setFee
        );
    }
    const handleInputChange = (field: string, value: string | number) => {
        setErrorMessage("");
        setInputError({ ...inputError, [field]: false });
        //throw new Error when the input is invalid and set the state to the input if its valid
        switch (field) {
            case "cartValue":
                if (!value) {
                    setInputError({ ...inputError, cartValue: true });
                    setErrorMessage("Please insert cart value number");
                    break;
                }
                setCartValue(Number(value));
                break;
            case "distance":
                if (!value) {
                    setInputError({ ...inputError, distance: true });
                    setErrorMessage("Please insert a delivery distance number");
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
                onChange={(e) => handleInputChange("cartValue", e.target.value)}
                icon="money"
                borderColor={
                    inputError.cartValue ? "red" : cartValue ? "green" : "black"
                }
                min="0"
                step="0,01"
            />
            <Input
                label="Delivery distance:"
                inputType="number"
                placeholder="in meter"
                onChange={(e) => handleInputChange("distance", e.target.value)}
                icon="location"
                borderColor={inputError.distance ? "red" : distance ? "green" : "black"}
                min="0"
                step="1"

            />
            <Input
                label="Number of Items:"
                inputType="number"
                placeholder="e.g. 3"
                onChange={(e) => handleInputChange("numItems", e.target.value)}
                icon="items"
                borderColor={inputError.numItems ? "red" : numItems ? "green" : "black"}
                min="0"
                step="1"
            />

            <Input
                label="Order Time:"
                inputType="datetime-local"
                value={orderTime.toISOString().slice(0, -5)}
                min={new Date().toISOString().slice(0, -5)}
                onChange={(e) => setOrderTime(new Date(e.target.value))}
                borderColor="inherit"
            />
            <Button onClick={(e) => handleButtonClick(e)} buttonText="Calculate delivery price"
                opacity={isButtonDisabled ? "0.5" : "1"}
                pointer={isButtonDisabled ? "none" : "auto"}
            />
            {errorMessage && (
                <span data-testid="error" style={{ color: "red" }}>{errorMessage}</span>
            )}

            <h3 data-testid="fee">Delivery fee: {fee} € </h3>
        </Form>
    );
};
