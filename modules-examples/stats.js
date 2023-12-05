
/**
 * In statistics, infinity is set to 30.
 */
export const INFINITY = 30;

/**
 * Computes the average of the list.  If the list is empty, the
 * function returns NaN
 * @param {number[]} lst 
 * @returns the average of the list.
 */
export function average(lst){
    if(lst.length < 1){
        return NaN;
    }
    let sum = 0;
    let n = 0;
    for(const e of lst){
        sum += e;
        n += 1;
    }
    return sum / n;
}


/**
 * Computes the standard deviation of the list.  If the list is empty, the
 * function returns NaN
 * @param {number[]} lst 
 * @returns the standard deviation of the list.
 */
export function std(lst){
    if(lst.length < 1){
        return NaN;
    }
    let sum = 0;
    let sum2 = 0;
    let n = 0;
    for(const e of lst){
        sum += e;
        sum2 += e * e;
        n += 1;
    }
    return Math.sqrt( sum2 / n - Math.pow(sum / n, 2));
}