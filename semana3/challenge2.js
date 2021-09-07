function minMax(aNumbs) {
    //Implementación
    if ( aNumbs.length <= 1 ) {
        return false
    }else{
        let min = Math.min(...aNumbs);
        let max = Math.max(...aNumbs);

        let result = {
            min: min,
            max: max
        }

        return result;
    }
}

module.exports = minMax;