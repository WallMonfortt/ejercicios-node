const capitalizeLetters = (str) => {
    //Implementación
   return str.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}

module.exports = {
    capitalizeLetters
}