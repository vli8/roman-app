/**
 * Home page react component. This component displays the title
 * and the input where the user can enter its integer.
 */
import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useHistory } from "react-router";

// api requests
import { getRomanNumeralEquivalent } from './requests'

// constants
import { NUMBER_QUERY, RESULTS_PARAMS } from './constants'

// components
import ResultsPage from './ResultsPage';
import ErrorPage from './ErrorPage';


const Home = () => {
    // hooks
    const history = useHistory();
    const [numInput, setNumInput] = useState('');
    const [output, setOutput] = useState(null);
    const query = new URLSearchParams(useLocation().search);

    // on mount, if there is already an input in the url
    // we are making the call to the backend or cache. 
    // Note: this useEffect will also be called when the url changes thanks to the dependency array
    useEffect(() => {
        const numInputInUrl = query.get(NUMBER_QUERY); // getting the query for number specifically
        if (numInputInUrl) {
            async function getRomanNumber() { // immediately invoke this async inside the useEffect
                setNumInput(numInputInUrl.toString());
                const result = await getRomanNumeralEquivalent(numInputInUrl);
                setOutput(result);
                console.log(result.status)
            }
            getRomanNumber();
        } else {
            history.push( {
                pathname: '/',
            });
        }
    }, [history.location.search]);

    // submitting form and calling the backend api to have the output
    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        history.push( {
            pathname: `/${RESULTS_PARAMS}`,
            search: `?${NUMBER_QUERY}=${numInput}`,
            state: numInput
        });
    })

    // setting the input to numInput onChange
    const handleChange= useCallback((e) => {
        setNumInput(e.currentTarget.value);
    })

    return (
        <div>
            <h1> Welcome to the roman numeral app</h1>
                <form onSubmit={handleSubmit}>
                Enter your integer to translate into roman numerals
                <br />
                <br />
                <hr />
                <label name="integer-input">integer: </label>
                <input type="text" name="integer-input" onChange={handleChange} defaultValue={numInput}/>
                <input type="submit" value="Submit" />
            </form>
            {output && output.status === 200 && (
                <div>
                    <ResultsPage className="response-pages" romanLetters={output.data}/>
                </div>
            )}
            {output && output.status !== 200 && (
                <div>
                    <ErrorPage className="response-pages" error={output}/>
                </div>
            )}
        </div>
    )
}

export default Home;