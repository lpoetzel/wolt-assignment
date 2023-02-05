## Delivery Fee Calculator (Frontend)

For Wolt Summer 2023 Engineering Internships
Introduction

### Problem 

This project is a frontend delivery fee calculator that calculates the fee for a delivery order based on several factors such as cart value, distance, number of items, and order time.

### Rules for Calculating Delivery Fee

The rules for calculating the delivery fee are as follows:

  - If the cart value is less than 10€, a small order surcharge is added to the delivery price. The surcharge is the difference between the cart value and 10€. For example, if the cart value is 8.90€, the surcharge will be 1.10€.
  
  - A delivery fee for the first 1000 meters (=1km) is 2€. If the delivery distance is longer than that, 1€ is added for every additional 500 meters that the courier needs to travel before reaching the destination. The minimum fee is always 1€.
       - Example 1: If the delivery distance is 1499 meters, the delivery fee is: 2€ base fee + 1€ for the additional 500 m => 3€
       - Example 2: If the delivery distance is 1500 meters, the delivery fee is: 2€ base fee + 1€ for the additional 500 m => 3€
       - Example 3: If the delivery distance is 1501 meters, the delivery fee is: 2€ base fee + 1€ for the first 500 m + 1€ for the second 500 m => 4€

 - If the number of items is five or more, an additional 50 cent surcharge is added for each item above and including the fifth item. An extra "bulk" fee applies for more than 12 items of 1,20€
      - Example 1: If the number of items is 4, no      extra surcharge
      - Example 2: If the number of items is 5, 50 cents surcharge is added
       - Example 3: If the number of items is 10, 3€ surcharge (6 x 50 cents) is added
       - Example 4: If the number of items is 13, 5,70€ surcharge is added ((9 * 50 cents) + 1,20€)
  - The delivery fee can never be more than 15€, including possible surcharges.
    The delivery is free (0€) when the cart value is equal or more than 100€.
  - During the Friday rush (3 - 7 PM UTC), the delivery fee (the total fee including possible surcharges) will be multiplied by 1.2x. However, the fee still cannot be more than the max (15€).


### Getting Started

Install the dependencies by running the following command: `npm install`
Start the application by running `npm start`

### Running Tests

Run the command `npm run test` to run a few tests for the calculateFee function, including edge cases and one for the component.
Dependencies

The following dependencies are used in this project:


```
"dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/node": "^16.18.11",
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.7.1",
    "react-scripts": "5.0.1",
    "styled-components": "^5.3.6",
    "typescript": "^4.9.4"
  }
```

### Compatibility

This project was tested on Firefox Version 108.0.2 (64-bit) for Ubuntu 22.04.1 LTS with Visual Studio Code 1.74.3.

### Limitations 


### Improvements 

