function twoSums(numbs, target) {
    //Implementación
    let finalResult = [];
    for (let index = 0; index < numbs.length; index++) {
        const element = numbs[index];
        let result = target - element;

        if (numbs.indexOf(result) >= 0 && (numbs.indexOf(element) !==  numbs.indexOf(result) )) {
            finalResult.push(numbs.indexOf(element));
            finalResult.push(numbs.indexOf(result));
            return (finalResult)
        }else if (numbs.indexOf(result) >= 0 && (numbs.indexOf(element) !==  numbs.lastIndexOf(element)) && result === element) {
            finalResult.push(numbs.indexOf(result));
            finalResult.push(numbs.lastIndexOf(element));
            return (finalResult)
        }
        
    }
}


module.exports = twoSums;