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

function Main(props) {
    console.log("MAIN PROPS: ", props)

 let [searchQuery, setSearchQuery] = useState("");
 let [filteredCards, setFilteredCards] = useState([]);
 let [specifiedRegion, setSpecifiedRegion] = useState([]);
 let [filteredSpecifiedRegion, setFilteredSpecifiedRegion] = useState([]);

    let cards = props.countryData.map(card => {
        return <Card flag={card.flag} country={card.name} population={card.population} region={card.region} capital={card.capital} allCards={card} />
      })
      console.log("NEW CARDS: ", cards[0])


      function handleChange(e) {

        setSearchQuery(
          searchQuery = e.target.value,
          console.log("Search Query: ", searchQuery),
          setFilteredCards(
            filteredCards = cards.filter(card => {
              if (card.props.country.toLowerCase().includes(searchQuery.toLowerCase())) {
               return <Card flag={card.flag} country={card.name} population={card.population} region={card.region} capital={card.capital} />
              }
              console.log("FILTERED: ", filteredCards)
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

  

    return(
        <React.Fragment>
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
            </React.Fragment>
    )
}

export default Main