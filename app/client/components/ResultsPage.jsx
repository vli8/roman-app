/**
 * Results page react component. This component renders the roman numericals translation
 */
import React from "react";

const Results = (props) => {
    return (
        <div>
            <pre>Output: </pre>
            <textarea value={props.romanLetters} readOnly style={{width: 400 + 'px', height: 400 + 'px'}} />
        </div>
    )
}

export default Results;