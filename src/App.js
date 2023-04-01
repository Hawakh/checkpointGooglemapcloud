import React from 'react';
import MapContainer from './components/MapContainer'
import './App.css';
import Navbar from'./components/Navbar'
import Cards from './components/Cards'

function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Cards/>
      <MapContainer/>

     
    </div>
  );
}

export default App;
