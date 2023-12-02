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


export function isValidIsbn(str) {
    return isValidIsbn13(str) || isValidIsbn10(str);
}

console.log(isValidIsbn("ahs"))
console.log(isValidIsbn("0-7754-2153-7"))
console.log(isValidIsbn("978-5-0583-5600-2"))

