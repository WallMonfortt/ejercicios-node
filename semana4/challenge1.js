function keysAndValues(objInput) {
    //Implementación
    let arr1 = [];
    let arr2 = [];
    let obj = Object.fromEntries(Object.entries(objInput).sort())
    Object.keys(obj).map((key) => arr1.push(key));
    Object.keys(obj).map((key) => arr2.push(obj[key]));
    return [arr1,arr2];
}

module.exports = keysAndValues;