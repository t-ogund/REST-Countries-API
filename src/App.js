import logo from './logo.svg';
import './App.css';
import Card from './Card';
import React, {useState, useEffect} from "react";


function App() {
 let [countryData, setCountryData] = useState([]);
 let [searchQuery, setSearchQuery] = useState("");
 let [filteredCards, setFilteredCards] = useState([]);
 let [specifiedRegion, setSpecifiedRegion] = useState([]);
 let [filteredSpecifiedRegion, setFilteredSpecifiedRegion] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    .then(data => setCountryData(data))
  }, [])

  let cards = countryData.map(card => {
    return <Card flag={card.flag} country={card.name} population={card.population} region={card.region} capital={card.capital} />
  })

function handleChange(e) {

    setSearchQuery(
      searchQuery = e.target.value,
      console.log("Search Query: ", searchQuery),
      setFilteredCards(
        filteredCards = cards.filter(card => {
          if (card.props.country.toLowerCase().includes(searchQuery.toLowerCase())) {
           return <Card flag={card.flag} country={card.name} population={card.population} region={card.region} capital={card.capital} />
          }
        })
      ),
      setFilteredSpecifiedRegion(
        filteredSpecifiedRegion = specifiedRegion.filter(card => {
          if (card.props.country.toLowerCase().includes(searchQuery)) {
            return <Card flag={card.flag} country={card.name} population={card.population} region={card.region} capital={card.capital} />
          }
        })
      )
    )
  }

  function handleRegionChange(e) {
    console.log("region: ", e.target.value);
    setSpecifiedRegion(
      specifiedRegion = cards.filter(card => {
        if (e.target.value === card.props.region.toLowerCase()) {
          return <Card flag={card.flag} country={card.name} population={card.population} region={card.region} capital={card.capital} />
        }
      })
    )
    console.log(specifiedRegion)
  }
 
  return (
    <div className="App">
      <header className="header">
        <h1>Where in the world?</h1>
        <p>Dark Mode</p>
      </header>
      <aside className="aside">
        <input onChange={handleChange} className="search-box" type="text" placeholder="Search"/>

        <select onChange={handleRegionChange} className="dropdown">
          <option value="filter by region">Filter By Region</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </aside>

        {specifiedRegion.length === 0 ?
          <main className="main">
            {searchQuery.length === 0 ? cards : filteredCards}
          </main>
          :
          <main className="main">
            {searchQuery.length === 0 ? specifiedRegion : filteredSpecifiedRegion}
          </main>
        }
            
    </div>
  );
}

export default App;
