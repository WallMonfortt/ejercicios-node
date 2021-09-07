function toArray(obj) {
    //Implementación
    return Object.keys(obj).map((key) => [key, obj[key]]);
}

module.exports = toArray;