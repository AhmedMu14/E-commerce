import React from 'react';
import Navbar from './Component/navbar/index.jsx';
import Home from './Component/Home/index.jsx';
import CurrencyConverter from './Component/CurrencyConverter/index.jsx';
import Foodlover from './Component/FoodLover/Foodlover.jsx';

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      {/* <CurrencyConverter/> */}
      <Foodlover/> 
    </div>
  )
}

export default App
