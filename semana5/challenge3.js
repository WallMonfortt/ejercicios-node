function findLetters (str) {
  let arr = str.split("");
  const uniq = [...new Set(arr)];
  let dup = [...arr];
  let result = [...arr];

  uniq.forEach((letter) => {
    const i = dup.indexOf(letter);
    dup = dup.slice(0,i).concat(dup.slice(i +1, dup.length));
  });
  
  for (let index = 0; index < dup.length; index++) {
    const element = dup[index];
    result = result.filter(letter => letter !== element);
  }

  return result;
}

module.exports = findLetters;