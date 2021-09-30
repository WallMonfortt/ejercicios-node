function plantTrees(w, l, g) {
    //Implementación
    let p = w+(l-1)+(w-1)+(l-2)
    let s = p%(g+1)

    if (s > 0) {
        return 0
    }else{
        return p/(g+1)
    }
}
console.log(plantTrees(3,3,1));
console.log(plantTrees(3,3,2));
console.log(plantTrees(4,4,3));
// console.log(plantTrees(4,4,0));
// console.log(plantTrees(6,3,0));
module.exports = plantTrees;