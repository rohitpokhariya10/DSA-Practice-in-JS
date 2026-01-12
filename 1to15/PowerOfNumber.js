let prompt = require('prompt-sync')();
let a = Number(prompt("Enter a Number " + " "));
let b = Number(prompt("Enter b Number " + " "));
let ans = 1;
for(let i = 1 ; i<=b ; i++){
   ans = ans*a;
}
console.log(ans);


//a=2 , b= 5 ----> 2^5 = 32