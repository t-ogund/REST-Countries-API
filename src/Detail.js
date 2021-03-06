import React from 'react';
import {
    Link,
    useParams
  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong as arrow} from '@fortawesome/free-solid-svg-icons'

function Detail(props) {
    let { id } = useParams();
    let currentCountry;
    currentCountry = props.countryData.filter(country => id === country.name);
    let currencies
    if (currentCountry[0].currencies) {
        currencies = currentCountry[0].currencies.map(currency => currency.name)
    }
    let languages = currentCountry[0].languages.map(language => language.name)
    let countriesWithBorders = props.countryData.filter(country => country.borders)
    let borderCountries

    if (currentCountry[0].borders) {
    borderCountries = currentCountry[0].borders.map(borderingCountry => borderingCountry)
    .map(borderingCountry => {
        for (let i = 0; i < countriesWithBorders.length; i++) {
            if (countriesWithBorders[i].alpha3Code.includes(borderingCountry)) {
                console.log(countriesWithBorders[i].name, borderingCountry)
                return <div className='border-countries'>{countriesWithBorders[i].name}</div>
            }
        }
    })
    }

    

    return(
        <div className='Detail'>
            <aside>
                <Link className={props.mode === true ? `select-dark-mode` : `light-mode`} to='/'><FontAwesomeIcon icon={arrow} /></Link>
            </aside>
            <main className='main-detail'>
                {/* <picture> */}
                    <img className='detail-flag-img' src={currentCountry[0].flag} alt='country flag'/>
                {/* </picture> */}
                <section className='section-detail'>
                    <h2 className='section-detail-text'>{currentCountry[0].name}</h2>
                    <aside>
                        <ul>
                            <li className='section-detail-text'><b>Native Name:</b> {currentCountry[0].nativeName}</li>
                            <li className='section-detail-text'><b>Population: </b> {currentCountry[0].population}</li>
                            <li className='section-detail-text'><b>Region: </b> {currentCountry[0].region}</li>
                            <li className='section-detail-text'><b>Sub Region: </b> {currentCountry[0].subregion}</li>
                            <li className='section-detail-text'><b>Capital: </b> {currentCountry[0].capital ? currentCountry[0].capital : 'N/A'}</li>
                        </ul>
                        <ul>
                            <li className='section-detail-text'><b>Top Level Domain: </b> {currentCountry[0].topLevelDomain[0]}</li>
                            <li className='section-detail-text'><b>Currencies: </b> {currencies ? currencies : 'N/A'}</li>
                            <li className='section-detail-text'><b>Languages: </b> {languages.join(', ')}</li>
                        </ul>
                    </aside>
                    <aside className='border-aside'>
                        <h3 className='borders-h3'>Border Countries: </h3>
                        {borderCountries ? borderCountries : 'None'}
                    </aside>
                </section>
            </main>
        </div>
    )
}

export default Detail