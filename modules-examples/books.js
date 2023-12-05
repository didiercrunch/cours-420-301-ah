
/**
 * Validate is the input string is a valid 13 digits ISBN as defined
 * in https://en.wikipedia.org/wiki/ISBN
 * @param {String} str a text we want to test if it is a real isbn
 * @returns {boolean} true/false depending is str is a valid 13 digits ISBN
 */
export function isValidIsbn13(str) {
    let sum, digit, check, i;

    str = str.replace(/[^0-9X]/gi, '');

    if (str.length !== 13) {
        return false;
    }
    sum = 0;
    for (i = 0; i < 12; i++) {
        digit = parseInt(str[i]);
        if (i % 2 === 1) {
            sum += 3 * digit;
        } else {
            sum += digit;
        }
    }
    check = (10 - (sum % 10)) % 10;
    return (check.toString() === str[str.length - 1]);
}


/**
 * Validate is the input string is a valid 10 digits ISBN as defined
 * in https://en.wikipedia.org/wiki/ISBN
 * @param {String} str a text we want to test if it is a real isbn
 * @returns {boolean} true/false depending is str is a valid 10 digits ISBN
 */
export function isValidIsbn10(str) {
    let sum, digit, weight, check, i;

    str = str.replace(/[^0-9X]/gi, '');

    if (str.length !== 10) {
        return false;
    }
    weight = 10;
    sum = 0;
    for (i = 0; i < 9; i++) {
        digit = parseInt(str[i]);
        sum += weight * digit;
        weight--;
    }
    check = (11 - (sum % 11)) % 11
    if (check === 10) {
        check = 'X';
    }
    return (check.toString() === str[str.length - 1].toUpperCase());

}


/**
 * Validate is the input string is a valid ISBN https://en.wikipedia.org/wiki/ISBN
 * @param {String} str a text we want to test if it is a real isbn
 * @returns {boolean} true/false depending is str is a valid isbn
 */
export function isValidIsbn(str) {
    return isValidIsbn13(str) || isValidIsbn10(str);
}


