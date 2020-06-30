let motion = '|/-\\|';
let x  = 0;
for (let char of motion) {
  setTimeout(() =>  process.stdout.write(`\r${(char)}   `), x);
  x += 200;
}
