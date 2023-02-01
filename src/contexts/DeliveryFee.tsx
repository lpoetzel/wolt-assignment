import React, { createContext, useState } from "react";

interface ContextProps {
  cartValue: number;
  setCartValue: React.Dispatch<React.SetStateAction<number>>;
  distance: number;
  setDistance: React.Dispatch<React.SetStateAction<number>>;
  numItems: number;
  setNumItems: React.Dispatch<React.SetStateAction<number>>;
  fee: number;
  setFee: React.Dispatch<React.SetStateAction<number>>;
  orderTime: Date,
  setOrderTime: React.Dispatch<React.SetStateAction<Date>>,
}

export const DeliveryFeeContext = createContext<ContextProps>({
  cartValue: 0,
  setCartValue: () => { },
  distance: 0,
  setDistance: () => { },
  numItems: 0,
  setNumItems: () => { },
  fee: 0,
  setFee: () => { },
  orderTime: new Date(),
  setOrderTime: () => { },
});

interface Props {
  children: React.ReactNode
}

export const DeliveryFeeContextProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [cartValue, setCartValue] = useState(0);
  const [distance, setDistance] = useState(0);
  const [numItems, setNumItems] = useState(0);
  const [orderTime, setOrderTime] = useState(new Date());
  const [fee, setFee] = useState(0);

  return (
    <DeliveryFeeContext.Provider value={{
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
    }}>
      {children}
    </DeliveryFeeContext.Provider>
  );
};
