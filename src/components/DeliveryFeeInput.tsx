import React, { useContext, useState } from 'react';
import { DeliveryFeeContext } from '../contexts/DeliveryFee';
import { calculateFee } from '../functions/calculateFee';
import Button from './Button';
import Form from './Form';
import Input from './Input';

export const DeliveryFeeInput: React.FC = (): JSX.Element => {
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
    const [errorMessage, setErrorMessage] = useState('');

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setErrorMessage('');
        e.preventDefault();
        if (cartValue < 1 || distance < 1 || numItems < 1 || isNaN(cartValue) || isNaN(distance) || isNaN(numItems)) {
            setErrorMessage('Please enter valid input');
            return;
        }

        calculateFee(
            e,
            cartValue,
            distance,
            numItems,
            orderTime,
            setFee
        );
    };

    return (
        <Form>
            <Input
                label="Cart value:"
                inputType='text'
                placeholder='in €'
                onChange={(e) => setCartValue(Number(e.target.value))}
                icon="money"
            />
            <Input
                label="Delivery distance:"
                inputType='text'
                placeholder='in meter'
                onChange={(e) => setDistance(Number(e.target.value))}
                icon="location"
            />
            <Input
                label="Number of Items:"
                inputType='text'
                placeholder='e.g. 3'
                onChange={(e) => setNumItems(Number(e.target.value))}
                icon="items"
            />
            <Input
                label='Order Time:'
                inputType='datetime-local'
                value={orderTime.toISOString().slice(0, -5)}
                min={new Date().toISOString().slice(0, -5)}
                onChange={(e) => setOrderTime(new Date(e.target.value))}
            />
            <Button
                onClick={handleClick}
                buttonText='Calculate delivery price'
            />
            {errorMessage ? <span style={{ color: 'red' }}>{errorMessage}</span> : null}
            <h3 data-testid='fee'>Delivery fee: {fee} €</h3>
        </Form>
    );
};
