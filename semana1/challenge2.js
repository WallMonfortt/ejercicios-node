const reverseInt = (number) => {
    //Implementación
    if (typeof(number) !== "number" ) {
        throw new Error("Tipo de dato no admitido")
    }else{
        const reversed = number.toString().split('').reverse().join(''); 
        return Math.sign(number) * parseInt(reversed);
    }
}

module.exports = {
    reverseInt
}