// print fibonacci sequence up to the given number 
// 0 - nothing to do
// negative number - throw an exception

function fibonacci(number) {
  if(number === 0) {
    return;
  }
  if(number < 0) {
    throw new Error('Negative number!');
  }
  const fibonacciSequence = [];
  const previousNumbers = [0, 0];

  for(let i = 1; i < number; i = previous.reduce((prev, curr) => prev + curr, 0)) {
    previousNumbers[0] = previousNumbers[1];
    previousNumbers[1] = i;

    fibonacciSequence.push(i);
  }
  console.log(fibonacciSequence.join());
}

fibonacci(225);