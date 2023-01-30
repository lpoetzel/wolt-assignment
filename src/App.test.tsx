import { fireEvent, render, screen } from '@testing-library/react';
import DeliveryFeeCalculator from './components/DeliveryFeeInput';

describe('DeliveryFeeCalculator', () => {
    it('calculates the delivery fee', () => {
        render(<DeliveryFeeCalculator />);

        const cartValueInput = screen.getByLabelText('Cart value:');
        const distanceInput = screen.getByLabelText('Delivery distance:');
        const numItemsInput = screen.getByLabelText('Number of Items:');
        const orderTimeInput = screen.getByLabelText('Order Time:');
        const calculateButton = screen.getByText('Calculate delivery price');
        const feeDisplay = screen.getByTestId("fee");

        expect(feeDisplay).toHaveTextContent('Delivery fee: 0 €');

        // Enter some values into the inputs
        fireEvent.change(cartValueInput, { target: { value: '12' } });
        fireEvent.change(distanceInput, { target: { value: '2000' } });
        fireEvent.change(numItemsInput, { target: { value: '6' } });
        fireEvent.change(orderTimeInput, { target: { value: '2023-01-30T12:00' } });

        // Click the button to calculate the fee
        fireEvent.click(calculateButton);

        // Check that the fee was calculated correctly
        expect(feeDisplay).toHaveTextContent('Delivery fee: 5 €');
    });
});