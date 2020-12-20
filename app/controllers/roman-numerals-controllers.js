// controllers for roman numerals

const MAX_INTEGER = 715799999999;

/**
 * @param {Int} input
 * @returns {String} Roman numeral equivalent
 */
const romanNumeralsAction = (input) => {
    const integerInput = parseInt(input); // the request we get can be a string.
    if (isNaN(input) || !integerInput) {
        throw new Error('No valid input found, please type in a valid number');
    }

    if (input > MAX_INTEGER) {
        throw new Error('this input is too big, please try a smaller number sorry!');
    }

    var digits = String(+input).split(''),
        key = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
            '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
            '','I','II','III','IV','V','VI','VII','VIII','IX'],
        roman = '',
        i = 3;

    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || '') + roman;
    return Array(+digits.join('') + 1).join('M') + roman;
}

module.exports = romanNumeralsAction
