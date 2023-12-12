export function isBalanced(str){
    let counter = 0;
    for(const letter of str){
        if(letter === "("){
            counter += 1;
        }
        if(letter === ")"){
            counter -= 1;
        }
        if(counter < 0){
            return false;
        }
    }
    return counter === 0;
}