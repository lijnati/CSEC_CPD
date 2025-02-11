const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', (line) => {
    input.push(line);
    if (input.length === 2) {
        rl.close();
    }
}).on('close', () => {
    const [n, h] = input[0].split(' ').map(Number);
    const heights = input[1].split(' ').map(Number);
    
    let totalWidth = 0;
    for (const height of heights) {
        totalWidth += height > h ? 2 : 1;
    }
    
    console.log(totalWidth);
});