const reverseString = (str) => {
    //Implementación
    if (typeof(str) !== "string" || str.length > 15|| str.length <= 1 ) {
        throw new Error("Tipo de dato o longitud no admitidos")
    }else{
        return str.split("").reverse().join("")
    }
}

reverseString("Academlo")

module.exports = {
    reverseString
}