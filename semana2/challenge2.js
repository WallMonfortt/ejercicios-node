function divisibleByLeft(n) {
    //Implementación
    
    let sNumber = n.toString();
    let result = [false];

    if (sNumber.length === 1) {
        return result;
    }

    for (let index = 1; index < sNumber.length; index++) {
        const element = sNumber[index];
        if (element%sNumber[index-1] === 0) {
            result.push(true)
        }else{
            result.push(false)
        }
    }
    return result
}

module.exports = divisibleByLeft;