function countPrimes(number) {
    //Implementación
    if (number < 0){
        return 0;
    }else{
        let primes = [];
      
    function isPrime(number) {
        let i = 2;
        let raiz = Math.floor(Math.sqrt(number));

        for(i ; i <= raiz; i++)
        if(number % i === 0) return false;
        return number > 1; 
    }
      
      for (let index = 0; index <= number; index++) {
        if (isPrime(index)) primes.push(index)
      }
        
      let result = primes.length;
      return result;
    }
    
}

module.exports = countPrimes;