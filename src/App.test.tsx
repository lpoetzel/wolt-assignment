import { fireEvent, render, screen } from '@testing-library/react'
// import DeliveryFeeCalculator from './components/DeliveryFeeInput'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

describe('DeliveryFeeCalculator', () => {
    it('calculates the delivery fee', () => {
        render(<App />)

        const cartValueInput: HTMLInputElement =
            screen.getByLabelText('Cart value:')
        const distanceInput: HTMLInputElement =
            screen.getByLabelText('Delivery distance:')
        const numItemsInput: HTMLInputElement =
            screen.getByLabelText('Number of Items:')
        // const orderTimeInput: HTMLInputElement =
        //     screen.getByLabelText('Order Time:')
        const calculateButton: HTMLButtonElement = screen.getByText(
            'Calculate delivery price'
        )

        const feeDisplay = screen.getByTestId('fee')

        expect(feeDisplay).toHaveTextContent('Delivery fee: 0 €')

        // Enter some values into the inputs
        fireEvent.change(cartValueInput, { target: { value: '12' } })
        fireEvent.change(distanceInput, { target: { value: '2000' } })
        fireEvent.change(numItemsInput, { target: { value: '6' } })
        // fireEvent.change(orderTimeInput, { target: { value: new Date() } })

        // Click the button to calculate the fee
        fireEvent.click(calculateButton)


        
        // Check that the fee was calculated correctly
        expect(feeDisplay).toHaveTextContent('Delivery fee: 5 €')
    })
})