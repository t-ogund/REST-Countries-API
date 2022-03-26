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
import NotFound from "./NotFound";

function Main(props) {
    console.log("MAIN PROPS: ", props)

 let [searchQuery, setSearchQuery] = useState("");
 let [filteredCards, setFilteredCards] = useState([]);
 let [specifiedRegion, setSpecifiedRegion] = useState([]);
 let [filteredSpecifiedRegion, setFilteredSpecifiedRegion] = useState([]);
 let [selectedRegion, setSelectedRegion] = useState("")

    let cards = props.countryData.map(card => {
        return <Card flag={card.flag} country={card.name} population={card.population} region={card.region} capital={card.capital} allCards={card} mode={props.mode} />
      })

      function handleChange(e) {
        setSearchQuery(
          searchQuery = e.target.value,
          console.log("Search Query: ", searchQuery),
          setFilteredCards(
            filteredCards = cards.filter(card => {
              if (card.props.country.toLowerCase().includes(searchQuery.toLowerCase())) {
                console.log('testing first if block', card.props.country.toLowerCase().includes(searchQuery.toLowerCase()))
               return <Card flag={card.flag} country={card.name} population={card.population} region={card.region} capital={card.capital} />
              } 
            }),
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
        setSpecifiedRegion(
          specifiedRegion = cards.filter(card => {
            if (e.target.value === card.props.region.toLowerCase()) {
              return <Card flag={card.flag} country={card.name} population={card.population} region={card.region} capital={card.capital} />
            }
          })
        )
        setSelectedRegion(
          selectedRegion = e.target.value
        )
      }
      console.log('filteredCards more than 0', filteredCards.props)
      console.log('filteredSpecifiedRegion', filteredSpecifiedRegion.props)

    if (filteredCards.length === 0) {
      filteredCards = <NotFound unsuccessfulQuery={searchQuery} region={specifiedRegion} />
      console.log('filteredCards NotFound', filteredCards)
    }

    if (filteredSpecifiedRegion.length === 0) {
      filteredSpecifiedRegion = <NotFound unsuccessfulQuery={searchQuery} region={selectedRegion} />
      console.log('filteredSpecifiedRegion NotFound', filteredSpecifiedRegion)
    } 
    console.log('specifiedRegion', specifiedRegion)

    if (searchQuery) {
      filteredSpecifiedRegion = []
      for (let i = 0; i < specifiedRegion.length; i++) {
        if (specifiedRegion[i].props.country.toLowerCase().includes(searchQuery)) {
          filteredSpecifiedRegion.push(<Card flag={specifiedRegion[i].props.flag} country={specifiedRegion[i].props.country} population={specifiedRegion[i].props.population} region={specifiedRegion[i].props.region} capital={specifiedRegion[i].props.capital} />)
        }   
      }
      
      if (filteredSpecifiedRegion.length === 0) {
        filteredSpecifiedRegion = <NotFound unsuccessfulQuery={searchQuery} region={specifiedRegion} />
      }

    }
    return(
        <React.Fragment>
            <aside className="aside">
            <input onChange={handleChange} className={props.mode === true ? `search-box dark-mode` : `search-box light-mode`} type="text" placeholder="Search"/>

            <select onChange={handleRegionChange} className={props.mode ===true ? `select-dark-mode` : `light-mode`}>
                <option className={props.mode === true ? `select-dark-mode` : `light-mode`} value="filter by region">Filter By Region</option>
                <option className={props.mode === true ? `select-dark-mode` : `light-mode`} value="africa">Africa</option>
                <option className={props.mode === true ? `select-dark-mode` : `light-mode`} value="americas">America</option>
                <option className={props.mode === true ? `select-dark-mode` : `light-mode`} value="asia">Asia</option>
                <option className={props.mode === true ? `select-dark-mode` : `light-mode`} value="europe">Europe</option>
                <option className={props.mode === true ? `select-dark-mode` : `light-mode`} value="oceania">Oceania</option>
            </select>
            </aside>

            {specifiedRegion.length === 0 ?
                <main className={searchQuery.length > 0 && filteredCards.props !== undefined ? 'main-not-found' : 'main'}>
                {searchQuery.length === 0 ? cards : filteredCards}
                </main>
                :
                <main className={searchQuery.length > 0 && filteredSpecifiedRegion.props ? 'main-not-found' : 'main'}>
                {searchQuery.length === 0 ? specifiedRegion : filteredSpecifiedRegion}
                </main>
            }
            
            </React.Fragment>
    )
}

export default Main