function arrayOfMultiples (num, length) {
let arr = [];

for (let index = 1; index <= length; index++) {
  const element = index;
  arr.push(num * element)
}
console.log(arr);
return arr;
}
arrayOfMultiples(7,5)
module.exports = arrayOfMultiples;