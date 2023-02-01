import React, { useContext } from 'react'
import { calculateFee } from '../functions/DeliveryFeeCalculator'
import Button from './Button'
import Form from './Form'
import Input from './Input'
import { DeliveryFeeContext } from '../contexts/DeliveryFee'

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
    } = useContext(DeliveryFeeContext)
    return (
        <Form>
            <Input
                label='Cart value:'
                inputType='number'
                placeholder='in €'
                onChange={e => setCartValue(Number(e.target.value))}
            />
            <Input
                label='Delivery distance:'
                inputType='number'
                placeholder='in meter'
                onChange={e => setDistance(Number(e.target.value))}
            />
            <Input
                label='Number of Items:'
                inputType='number'
                placeholder='e.g. 3'
                onChange={e => setNumItems(Number(e.target.value))}
            />
            <Input
                label='Order Time:'
                inputType='datetime-local'
                placeholder=''
                value={orderTime.toISOString().slice(0, -5)}
                onChange={e => setOrderTime(new Date(e.target.value))}
            />

            <Button
                onClick={e =>
                    calculateFee(
                        e,
                        cartValue,
                        distance,
                        numItems,
                        orderTime,
                        setFee
                    )
                }
                buttonText='Calculate delivery price'
            />
            <h3 data-testid='fee'>Delivery fee: {fee} €</h3>
        </Form>
    )
}

export default DeliveryFeeCalculator
