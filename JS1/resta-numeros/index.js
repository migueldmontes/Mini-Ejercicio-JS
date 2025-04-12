const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Introduce el primer número: ', (num1) => {
    readline.question('Introduce el segundo número: ', (num2) => {
      const resultado = Number(num1) - Number(num2);
      console.log(`El resultado de la resta es: ${resultado}`);
      readline.close();
    });
  });
  