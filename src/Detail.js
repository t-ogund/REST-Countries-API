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
    console.log("ID: ", id)
    return(
        <div className="Detail">
            <aside>
                Back
            </aside>
            <main className="main-detail">
                <picture>

                </picture>
                <section className="section-detail">
                    <h2>Belgium</h2>
                    <aside>
                        <ul>
                            <li>one</li>
                            <li>two</li>
                            <li>three</li>
                        </ul>
                        <ul>
                            <li>one</li>
                            <li>two</li>
                            <li>three</li>
                        </ul>
                    </aside>
                    <aside>
                        <h3>Border Countries: </h3>
                        <h5>One</h5>
                        <h5>One</h5>
                        <h5>One</h5>
                    </aside>
                </section>
            </main>
        </div>
    )
}

export default Detail