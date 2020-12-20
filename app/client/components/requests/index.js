import axios from 'axios';
import { API_ENDPOINT } from '../constants'

/**
 * @param input input integer from client
 * @returns {Int} result from axios
 */
export const getRomanNumeralEquivalent = async (input) => {
    let result = [];
    try {
        result = await axios.post(API_ENDPOINT, { payload: input }).catch(err => {
            throw err;
          });
    } catch (err) {
        result = err.response;
    }
    return result;
}