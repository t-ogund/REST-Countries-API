import './App.css';
import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Detail from "./Detail";
import Main from "./Main";


function App() {

let [ countryData, setCountryData ] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    .then(data => setCountryData(data))
  }, [])

  return (
    <React.Fragment>
    <Router>
      <div className={`App`}>
        <header className="header">
          <h1>Where in the world?</h1>
        </header>
        <Routes>
          <Route exact path="/" element={<Main countryData={countryData} />} />
          <Route exact path="/:id" element={<Detail countryData={countryData} />} />
          <Route />

        </Routes>
       
      </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
