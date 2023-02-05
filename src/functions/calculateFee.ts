const smallOrder = 10;

const minDistance = 1000;
const minDistanceFee = 2;

const itemFeeStart = 5;

const bulkFeePerItem = 0.5;
const bulkNumber = 12;
const bulkNumberSurcharge = 1.2;

const rushDay = 5; //for friday, 5th day of the week
const rushStart = 15;
const rushEnd = 19;
const rushFeeMultiplier = 1.2;

const maxFee = 15;
const freeDelivery = 100;
export const calculateFee = (
  e: any,
  cartValue: number,
  distance: number,
  numItems: number,
  orderTime: Date,
  setFee: React.Dispatch<React.SetStateAction<number>>
): void => {
  e.preventDefault();
  let fee = 0;
  // Small order surcharge for less than 10 € atm
  if (cartValue < smallOrder) {
    fee += smallOrder - cartValue;
  }
  // Delivery distance fee
  if (distance <= minDistance) {
    fee += minDistanceFee;
  } else {
    fee += minDistanceFee + Math.ceil((distance - minDistance) / 500);
  }
  // Number of items fee
  if (numItems >= itemFeeStart) {
    let surcharge = (numItems - (itemFeeStart - 1)) * bulkFeePerItem;
    if (numItems > bulkNumber) {
      surcharge += bulkNumberSurcharge;
    }
    fee += surcharge;
  }
  // Friday rush fee between 15 and 19 UTC
  if (
    orderTime.getUTCDay() === rushDay &&
    orderTime.getUTCHours() >= rushStart &&
    orderTime.getUTCHours() < rushEnd
  ) {
    fee *= rushFeeMultiplier;
  }
  // Max fee
  fee = Math.min(fee, maxFee);
  // Free delivery starting at 100€
  if (cartValue >= freeDelivery) {
    fee = 0;
  }
  //setting the fee to 0 in case parameters are missing
  if (cartValue === 0 || numItems === 0 || distance === 0) {
    fee = 0;
  }
  //rounding to two decimals
  setFee(Math.round(fee * 100) / 100);
};
