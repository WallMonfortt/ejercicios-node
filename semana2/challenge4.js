function landMass(str, mass) {
    //Implementación
    let eartMass = 148940000;
    let prom = ((100*mass)/eartMass).toFixed(2);
    let output = {
        percent: parseFloat(prom),
        message: `${str} representa el ${prom}% de la masa de la tierra`
    }

    return output;
}
console.log(landMass("Rusia", 17098242));
module.exports = landMass;