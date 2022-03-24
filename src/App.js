import logo from './logo.svg';
import './App.css';
import Card from './Card';
import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faMoon as solidMoon} from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Detail from "./Detail";
import Main from "./Main";


function App() {

let [ countryData, setCountryData ] = useState([]);
let [ darkMode, setDarkMode ] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    .then(data => setCountryData(data))
  }, [])
  let { id } = useParams();
  // console.log(id)
function handleClick() {
  setDarkMode(
    !darkMode
  )
}


  return (
    <React.Fragment>
    <Router>
      <div className={darkMode === true ? `App dark-mode` : `App light-mode`}>
        <header className="header">
          <h1>Where in the world?</h1>
          <button className={darkMode ===true ? `dark-mode` : `light-mode`} onClick={handleClick} mode={darkMode}><FontAwesomeIcon icon={solidMoon} />  {darkMode === true ? `Light` : `Dark`} Mode</button>
        </header>
        <Routes>
          <Route exact path="/" element={<Main countryData={countryData} mode={darkMode} />} />
          <Route exact path="/:id" element={<Detail id={id} countryData={countryData} mode={darkMode} />} />
          <Route />

        </Routes>
       
      </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
