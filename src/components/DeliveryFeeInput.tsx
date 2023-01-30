import React, { useContext } from 'react';
import { DeliveryFeeContext } from 'src/contexts/DeliveryFee';
import Button from './Button';
import Form from './Form';
import Input from './Input';

export const DeliveryFeeCalculator: React.FC = () => {
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

    const calculateFee = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        let fee = 0;
        // Small order surcharge
        if (cartValue < 10) {
            fee += 10 - cartValue;
        }
        // Delivery distance fee
        if (distance <= 1000) {
            fee += 2;
        } else {
            fee += 2 + Math.ceil((distance - 1000) / 500);
        }
        // Number of items fee
        if (numItems >= 5) {
            let surcharge = (numItems - 4) * 0.5;
            if (numItems > 12) {
                surcharge += 1.2;
            }
            fee += surcharge;
        }
        // Friday rush fee
        if (orderTime.getUTCDay() === 5 && orderTime.getUTCHours() >= 15 && orderTime.getUTCHours() < 19) {
            fee *= 1.2;
        }
        // Max fee
        fee = Math.min(fee, 15);
        // Free delivery
        if (cartValue >= 100) {
            fee = 0;
        }
        setFee(Math.round(fee * 100) / 100);
    };
    return (
        <Form>
            <Input
                label="Cart value:"
                inputType='number'
                placeholder='in €'
                onChange={(e) => setCartValue(Number(e.target.value))}
            />
            <Input
                label="Delivery distance:"
                inputType='number'
                placeholder='in meter'
                onChange={(e) => setDistance(Number(e.target.value))}
            />
            <Input
                label="Number of Items:"
                inputType='number'
                placeholder='e.g. 3'
                onChange={(e) => setNumItems(Number(e.target.value))}
            />
            <Input
                label="Order Time:"
                inputType='datetime-local'
                placeholder=''
                value={orderTime.toISOString().slice(0, -5)}
                onChange={(e) => setOrderTime(new Date(e.target.value))}
            />

            <Button onClick={calculateFee} buttonText="Calculate delivery price" />
            <h3 data-testid="fee">Delivery fee: {fee} €</h3>

        </Form>
    );
};

export default DeliveryFeeCalculator;
