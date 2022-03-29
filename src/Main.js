import Card from './Card';
import React, { useState } from 'react';
import NotFound from './NotFound';

function Main(props) {
 let [searchQuery, setSearchQuery] = useState('');
 let [filteredCards, setFilteredCards] = useState([]);
 let [specifiedRegion, setSpecifiedRegion] = useState([]);
 let [filteredSpecifiedRegion, setFilteredSpecifiedRegion] = useState([]);
 let [selectedRegion, setSelectedRegion] = useState('');


    let cards = props.countryData.map(card => {
        return <Card flag={card.flag} country={card.name} population={card.population} region={card.region} capital={card.capital} allCards={card} />
      })

      function handleChange(e) {
        setSearchQuery(
          searchQuery = e.target.value,
          setFilteredCards(
            filteredCards = cards.filter(card => {
              if (card.props.country.toLowerCase().includes(searchQuery.toLowerCase())) {
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
            ),
        )
      }

      function handleRegionChange(e) {
          setSpecifiedRegion(
            specifiedRegion = cards.filter(card => {
              if (e.target.value === card.props.region.toLowerCase()) {
                return <Card flag={card.flag} country={card.name} population={card.population} region={card.region} capital={card.capital} />
              }
            }),
          )
        setSelectedRegion(
          selectedRegion = e.target.value
        )
      }

    if (filteredCards.length === 0) {
      filteredCards = <NotFound unsuccessfulQuery={searchQuery} region={specifiedRegion} />
    }

    if (filteredSpecifiedRegion.length === 0) {
      filteredSpecifiedRegion = <NotFound unsuccessfulQuery={searchQuery} region={selectedRegion} />
    }

    if (searchQuery) {
      filteredSpecifiedRegion = []
      for (let i = 0; i < specifiedRegion.length; i++) {
        if (specifiedRegion[i].props.country.toLowerCase().includes(searchQuery)) {
          filteredSpecifiedRegion.push(<Card flag={specifiedRegion[i].props.flag} country={specifiedRegion[i].props.country} population={specifiedRegion[i].props.population} region={specifiedRegion[i].props.region} capital={specifiedRegion[i].props.capital} mode={7} />)
        }   
      }
      
      if (filteredSpecifiedRegion.length === 0) {
        filteredSpecifiedRegion = <NotFound unsuccessfulQuery={searchQuery} region={specifiedRegion} />
      }

    }
    return(
        <React.Fragment>
            <aside className='aside'>
              <input onChange={handleChange} className={'search-box'} type='text' placeholder='Search'/>

              <select onChange={handleRegionChange}>
                  <option value='filter by region'>Filter By Region</option>
                  <option value='africa'>Africa</option>
                  <option value='americas'>America</option>
                  <option value='asia'>Asia</option>
                  <option value='europe'>Europe</option>
                  <option value='oceania'>Oceania</option>
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