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