/**
 * Error page react component. This component renders the error page when the input is incorrect or if the backend fails
 */
import React from "react";

const Results = (props) => {
    return (
        <div id="error-component">
            <b>Status: {props.error.status}</b>
            <pre> Sorry, can't convert it - {props.error.data.message}</pre>
        </div>
    )
}

export default Results;