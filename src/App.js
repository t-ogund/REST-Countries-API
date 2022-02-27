import logo from './logo.svg';
import './App.css';
import Card from './Card';
import React, {useState, useEffect} from "react";
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
  let { id } = useParams();
  console.log(id)
//  let [countryData, setCountryData] = useState([]);
//  let [searchQuery, setSearchQuery] = useState("");
//  let [filteredCards, setFilteredCards] = useState([]);
//  let [specifiedRegion, setSpecifiedRegion] = useState([]);
//  let [filteredSpecifiedRegion, setFilteredSpecifiedRegion] = useState([]);

//   useEffect(() => {
//     fetch("https://restcountries.com/v2/all")
//     .then(response => response.json())
//     .then(data => setCountryData(data))
//   }, [])


//   let cards = countryData.map(card => {
//     return <Card flag={card.flag} country={card.name} population={card.population} region={card.region} capital={card.capital} />
//   })

// function handleChange(e) {

//     setSearchQuery(
//       searchQuery = e.target.value,
//       console.log("Search Query: ", searchQuery),
//       setFilteredCards(
//         filteredCards = cards.filter(card => {
//           if (card.props.country.toLowerCase().includes(searchQuery.toLowerCase())) {
//            return <Card flag={card.flag} country={card.name} population={card.population} region={card.region} capital={card.capital} />
//           }
//           console.log("FILTERED: ", filteredCards)
//         })
//       ),
//       setFilteredSpecifiedRegion(
//         filteredSpecifiedRegion = specifiedRegion.filter(card => {
//           if (card.props.country.toLowerCase().includes(searchQuery)) {
//             return <Card flag={card.flag} country={card.name} population={card.population} region={card.region} capital={card.capital} />
//           }
//         })
//       )
//     )
//   }

//   function handleRegionChange(e) {
//     console.log("region: ", e.target.value);
//     setSpecifiedRegion(
//       specifiedRegion = cards.filter(card => {
//         if (e.target.value === card.props.region.toLowerCase()) {
//           return <Card flag={card.flag} country={card.name} population={card.population} region={card.region} capital={card.capital} />
//         }
//       })
//     )
//     console.log(specifiedRegion)
//   }
 
  return (
    <React.Fragment>
    <Router>
      <div className="App">
        <header className="header">
          <h1>Where in the world?</h1>
          <p>Dark Mode</p>
        </header>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/:id" element={<Detail id={id} />} />
          <Route />

        </Routes>
       
      </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
