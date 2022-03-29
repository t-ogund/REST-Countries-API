import React from 'react'

function NotFound(props) {
    return (
        <h1>{props.unsuccessfulQuery} is not found {props.region.length === 0 ? 'anywhere in the world' : 'in ' + props.region[0].props.region}</h1>
    )
}

export default NotFound