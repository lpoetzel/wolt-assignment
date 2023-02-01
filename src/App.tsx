
// import './App.css';
import DeliveryFeeInput from './components/DeliveryFeeInput';
import { DeliveryFeeContextProvider } from './contexts/DeliveryFee';

function App() {
  return (
    <div className="App">
      <DeliveryFeeContextProvider>
        <DeliveryFeeInput />
      </DeliveryFeeContextProvider>
    </div>
  );
}

export default App;
