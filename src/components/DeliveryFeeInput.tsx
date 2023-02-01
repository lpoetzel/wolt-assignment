import React, { useContext } from 'react';
import { DeliveryFeeContext } from 'src/contexts/DeliveryFee';
import { calculateFee } from 'src/functions/calculateFee';
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
    return (
        <Form>
            <Input
                label="Cart value:"
                inputType='text'
                placeholder='in €'
                onChange={(e) => setCartValue(Number(e.target.value))}
                icon="cart"
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
                label="Order Time:"
                inputType='datetime-local'
                placeholder=''
                value={orderTime.toISOString().slice(0, -5)}
                onChange={(e) => setOrderTime(new Date(e.target.value))}
            />

            <Button onClick={(e) => calculateFee(e, cartValue, distance, numItems, orderTime, setFee)} buttonText="Calculate delivery price" />
            <h3>Delivery fee: {fee} €</h3>
        </Form>
    );
};

export default DeliveryFeeCalculator;
