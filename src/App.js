import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';
export const detailContext = createContext();

function App() {
  const [cart , setCart] = useState(0);
  return (
    <detailContext.Provider value={[cart , setCart]}>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </detailContext.Provider>
  );
}

export default App;
