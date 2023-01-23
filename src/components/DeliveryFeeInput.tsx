import React, { useState } from 'react';

const DeliveryFeeCalculator: React.FC = () => {
    const [cartValue, setCartValue] = useState(0);
    const [distance, setDistance] = useState(0);
    const [numItems, setNumItems] = useState(0);
    const [orderTime, setOrderTime] = useState(new Date());
    const [fee, setFee] = useState(0);

    const calculateFee = () => {
        let fee = 0;
        // Small order surcharge
        if (cartValue < 10) {
            fee += 10 - cartValue;
        }
        // Delivery distance fee
        if (distance <= 1000) {
            fee += 2;
        } else {
            fee += 2 + Math.floor((distance - 1000) / 500);
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
        if (orderTime.getUTCHours() >= 15 && orderTime.getUTCHours() < 19) {
            fee *= 1.2;
        }
        // Max fee
        fee = Math.min(fee, 15);
        // Free delivery
        if (cartValue >= 100) {
            fee = 0;
        }
        setFee(fee);
    };

    return (
        <div>
            <label htmlFor="cart-value">Cart value (€):</label>
            <input
                type="number"
                id="cart-value"
                placeholder="e.g. 12"
                onChange={(e) => setCartValue(Number(e.target.value))}
            />
            <br />
            <label htmlFor="distance">Delivery distance (m):</label>
            <input
                type="number"
                id="distance"
                placeholder='e.g. 1000'
                onChange={(e) => setDistance(Number(e.target.value))}
            />
            <br />
            <label htmlFor="num-items">Number of items:</label>
            <input
                type="number"
                id="num-items"
                placeholder='e.g. 3'
                onChange={(e) => setNumItems(Number(e.target.value))}
            />
            <br />
            <label htmlFor="order-time">Order time:</label>
            <input
                type="datetime-local"
                id="order-time"
                value={orderTime.toISOString().slice(0, -1)}
                onChange={(e) => setOrderTime(new Date(e.target.value))}
            />
            <br />
            <button onClick={calculateFee}>Calculate fee</button>
            <p>Delivery fee: {fee} €</p>
        </div>
    );
};

export default DeliveryFeeCalculator;
