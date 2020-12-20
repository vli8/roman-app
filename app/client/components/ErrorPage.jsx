/**
 * Error page react component. This component renders the error page when the input is incorrect or if the backend fails
 */
import React from "react";

const Results = (props) => {
    return (
        <div>
            <h1>Status: {props.error.status}</h1>
            <h1> Sorry, can't convert it - {props.error.data.message}</h1>
        </div>
    )
}

export default Results;