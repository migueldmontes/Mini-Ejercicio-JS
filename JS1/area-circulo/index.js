const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const PI = 3.1416;
  
  readline.question('Introduce el radio del círculo: ', (radioInput) => {
    const radio = Number(radioInput);
    const area = PI * radio * radio;
    console.log(`El área de un círculo con radio ${radio} es: ${area.toFixed(2)}`);
    readline.close();
  });
  