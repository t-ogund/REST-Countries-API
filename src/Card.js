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
            <Link className="link" to={`/${props.country}`}>
                <article className="Card">
                    <header className="flag">
                        <img className="flag-img" src={props.flag} alt="country's flag" />
                    </header>
                    <article className="card-info">
                        <h3>{props.country}</h3>
                        <ul>
                            <li><span className="card-bold">Population:</span> {props.population}</li>
                            <li><span className="card-bold">Region:</span> {props.region}</li>
                            <li><span className="card-bold">Capital:</span> {props.capital}</li>
                        </ul>
                    </article>
                </article>
            </Link>
        )
}
export default Card