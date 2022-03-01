import { render } from "@testing-library/react";
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
  } from "react-router-dom";

function Card(props) {
    
    return (
            <Link to={`/${props.country}`}>
                <article className="Card">
                    <header className="flag">
                        <img className="flag-img" src={props.flag} alt="country's flag" />
                    </header>
                    <article className="card-info">
                        <h3>{props.country}</h3>
                        <ul>
                            <li><b>Population:</b> {props.population}</li>
                            <li><b>Region:</b> {props.region}</li>
                            <li><b>Capital:</b> {props.capital}</li>
                        </ul>
                    </article>
                </article>
            </Link>
        )
}
export default Card