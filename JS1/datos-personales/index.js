const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('¿Cómo te llamas? ', (nombre) => {
    readline.question('¿Dónde vives? ', (localidad) => {
      readline.question('¿Cuál es tu hobby? ', (hobby) => {
        console.log(`Te llamas ${nombre}, vives en ${localidad}, y te gusta ${hobby}.`);
        readline.close();
      });
    });
  });
  