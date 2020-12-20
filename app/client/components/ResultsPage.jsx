/**
 * Results page react component. This component renders the roman numericals translation
 */
import React from "react";

const Results = (props) => {
    return (
        <div>
            <h1> Output: {props.romanLetters}</h1>
        </div>
    )
}

export default Results;