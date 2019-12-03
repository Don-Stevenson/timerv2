const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log('\nThanks for using me, ciao!')
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('\nBeep!!!');
  } else if (Number(key) >= 1 && Number(key) <= 9) {
    process.stdout.write(`\nsetting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`\nThe alarm rang after ${key} seconds`);
    }, key * 1000);
  }
});
console.log("Welcome to the alarm. Please use 1-9 to set the timer. press b to immediately sound alarm. Use <ctrl>c to exit");