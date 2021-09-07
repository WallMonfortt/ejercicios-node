function mcm (a, b) {
  return (a * b) / maximoComunDivisor(a, b); 
};

const maximoComunDivisor = (a, b) => {
  let temp; //Para no perder b
  while (b !== 0) {
      temp = b;
      b = a % b;
      a = temp;
  }
  return a;
};

module.exports = mcm;