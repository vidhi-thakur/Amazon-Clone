import React from 'react'
import "./Headercomponent.css"

function Headercomponent({inputLine1, inputLine2}) {
    return (
        <div className="headerComponent">
            <span>{inputLine1}</span>
            <span>{inputLine2}</span>
        </div>
    )
}

export default Headercomponent
