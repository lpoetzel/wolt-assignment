import React, { createContext } from 'react';

type State ={
  value: number;
}

interface ContextProps {
  cartValue: State;
  setCartValue: React.Dispatch<React.SetStateAction<State>>;
  distance: State;
  setDistance: React.Dispatch<React.SetStateAction<State>>;
  numItems: State;
  setNumItems: React.Dispatch<React.SetStateAction<State>>;
  fee: State;
  setFee: React.Dispatch<React.SetStateAction<State>>;
}

export const DeliveryFeeContext = createContext<ContextProps>({
  cartValue: { value: 0 },
  setCartValue: () => {},
  distance: { value: 0 },
  setDistance: () => {},
  numItems: { value: 0 },
  setNumItems: () => {},
  fee: { value: 0 },
  setFee: () => {},
});
