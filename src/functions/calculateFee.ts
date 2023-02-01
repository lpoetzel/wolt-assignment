export const calculateFee = (e:any, cartValue:number, distance:number, numItems:number, orderTime:Date, setFee:React.Dispatch<React.SetStateAction<number>>) => {
        e.preventDefault();
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
        // Friday rush fee between 15 and 19 UTC
        if (orderTime.getUTCDay() === 5 && orderTime.getUTCHours() >= 15 && orderTime.getUTCHours() < 19) {
            fee *= 1.2;
        }
        // Max fee
        fee = Math.min(fee, 15);
        // Free delivery starting at 100€
        if (cartValue >= 100) {
            fee = 0;
        }
        setFee(Math.round(fee * 100) / 100);
    };