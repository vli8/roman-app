// controllers for roman numerals
const NodeCache = require( "node-cache" );

// initiating cache
const Cache = new NodeCache()

// constants
const MAX_INTEGER = 715799999999;

/**
 * @param {Int} input
 * @returns {String} Roman numeral equivalent
 */
const romanNumeralsAction = (input) => {
    const integerInput = parseInt(input); // the request we get can be a string.

    // exceptions and edge cases
    if (isNaN(input) || !integerInput) {
        throw new Error('No valid input found, please type in a valid number');
    }

    if (input > MAX_INTEGER) {
        throw new Error('this input is too big, please try a smaller number sorry!');
    }

    const cacheValue = Cache.get(integerInput.toString());
    // return cache if found
    if (cacheValue) {
        return cacheValue;
    } else {
        var digits = String(+input).split(''),
            key = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
                '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
                '','I','II','III','IV','V','VI','VII','VIII','IX'],
            roman = '',
            i = 3;
    
        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || '') + roman;
    
        const romanOutput = Array(+digits.join('') + 1).join('M') + roman; 
    
        // caching the output so we don't have to go through this process every time!
        Cache.set(integerInput.toString(), romanOutput);
    
        return romanOutput
    }
}

module.exports = romanNumeralsAction
