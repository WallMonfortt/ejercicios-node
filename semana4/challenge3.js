function isSpecialArray (specialArr) {
  let incorrect = 0;
  for (let index = 0; index < specialArr.length; index++) {
    const element = specialArr[index];
    if (element % 2 !== 0 && index % 2 === 0  || element % 2 === 0 && index % 2 !== 0 ) {
      incorrect += 1
    }
  }
  return ((incorrect) ? false : true);
}


module.exports = isSpecialArray;