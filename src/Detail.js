import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
  } from "react-router-dom";

function Detail(props) {
    console.log("PROPS: ", props)
let { id } = useParams();
    let currentCountry;
    currentCountry = props.countryData.filter(country => id === country.name);
    let topLevelDomain = currentCountry[0].topLevelDomain.map(tld => tld)
    let currencies = currentCountry[0].currencies.map(currency => currency.name)
    let languages = currentCountry[0].languages.map(language => language.name)
    let borderCountries
    

    if (currentCountry[0].borders) {
        borderCountries = currentCountry[0].borders.map(borderingCountry => {
            
        })
        console.log("BORDER COUNTRIES FULL: ", borderCountries)
       
    } else {
        borderCountries = "N/A"
    }

    

    return(
        <div className="Detail">
            <aside>
                Back
            </aside>
            <main className="main-detail">
                <picture>
                    <img className="flag-img" src={currentCountry[0].flag} alt="country flag"/>
                </picture>
                <section className="section-detail">
                    <h2>{currentCountry[0].name}</h2>
                    <aside>
                        <ul>
                            <li><b>Native Name:</b> {currentCountry[0].nativeName}</li>
                            <li><b>Population: </b> {currentCountry[0].population}</li>
                            <li><b>Region: </b> {currentCountry[0].region}</li>
                            <li><b>Sub Region: </b> {currentCountry[0].subregion}</li>
                            <li><b>Capital: </b> {currentCountry[0].capital}</li>
                        </ul>
                        <ul>
                            <li><b>Top Level Domain: </b> {currentCountry[0].topLevelDomain[0]}</li>
                            <li><b>Currencies: </b> {currencies}</li>
                            <li><b>Languages: </b> {languages.join(", ")}</li>
                        </ul>
                    </aside>
                    <aside>
                        <h3>Border Countries: </h3>
                        {borderCountries}
                    </aside>
                </section>
            </main>
        </div>
    )
}

export default Detail