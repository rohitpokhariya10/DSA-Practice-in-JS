// Automorphic number check
// Automorphic number: jiska square ke last digits original number ke equal ho

let prompt = require('prompt-sync')();

// User se number input liya
let n = Number(prompt("Enter Number: "));

// Number ka square nikala
let sq = n * n;

// Digits count karne ke liye variable
let count = 0;

// Original number ko safe rakhne ke liye copy bana li
// kyunki digits count karte waqt n 0 ho jayega
let copy = n;

// Step 1: Number me kitne digits hain, wo count karna
while (n > 0) {
    count++;                    // har loop me digit count badhao
    n = Math.floor(n / 10);     // last digit remove karo
}

// Step 2: Square ke last 'count' digits nikalna
// Math.pow(10, count) => 10^count
// sq % 10^count => square ke last count digits

if (sq % Math.pow(10, count) === copy) {
    console.log("Automorphic Number");
} else {
    console.log("Not an Automorphic Number");
}
