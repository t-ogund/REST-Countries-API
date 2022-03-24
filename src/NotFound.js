import React from "react"

function NotFound(props) {
    console.log(props)
    return (
        <h1>{props.unsuccessfulQuery} is not found {props.region.length === 0 ? "anywhere in the world" : "in " + props.region.charAt(0).toUpperCase() + props.region.slice(1)}</h1>
    )
}

export default NotFound