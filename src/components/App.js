import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CountryList from "./CountryList";
import CountryDetails from "./CountryDetails";
import Navbar from "./Navbar";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/" exact component = { CountryList } />
          <Route path="/country/:countryName" component = { CountryDetails } />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
