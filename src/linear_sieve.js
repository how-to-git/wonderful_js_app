function linearSieve(N) {
  if (typeof N != "number") {
    throw new Error("Invalid Argument: Integer Expected");
  }

  N = Math.round(N);

  let primes = [];

  let lf = new Array(N + 1);

  for (let i = 2; i <= N; i++) {
    if (!lf[i]) {
      primes.push(i);
      lf[i] = i;
    }
    for (let j = 0; j < primes.length; j++) {
      if (primes[j] * i > N) {
        break;
      }
      lf[primes[j] * i] = primes[j];
      if (i % primes[j] == 0) {
        break;
      }
    }
  }

  return [primes, lf];
}

function getPrimes(N) {
  const [primes, lf] = linearSieve(N);
  return primes;
}

module.exports = getPrimes;
