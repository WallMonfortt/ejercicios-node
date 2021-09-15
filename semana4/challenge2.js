function isEqual(objInput1, objInput2) {
    //Implementación
    let aKeys = Object.keys(objInput1).sort();
    let bKeys = Object.keys(objInput2).sort();
    if (aKeys.length !== bKeys.length) {
        return false;
    }
    if (aKeys.join('') !== bKeys.join('')) {
        return false;
    }
    for (var i = 0; i < aKeys.length; i++) {
        if ( objInput1[aKeys[i]]  !== objInput2[bKeys[i]]) {
            return false;
        }
    }
    return true;
}

module.exports = isEqual;