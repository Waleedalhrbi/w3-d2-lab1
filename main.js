
/* even number */
for(let i=1; i<=25; i++){
    if(i % 2 ===0){
        console.log(i);
    }
}

/* por 2 */

for(let i=1; i<=10; i++){
    console.log(i*i);
}

/* odd number */
for(let i=1; i<=20; i++){
    if(i % 2 !==0){
        console.log(i);
    }
}

/* Fibonacci sequence */

let fib = [0, 1]; 
for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

console.log(fib);

/* Multiplication table */
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + ' * ' + j + ' = ' + (i * j));
    }
    console.log('-----------------'); 
}
