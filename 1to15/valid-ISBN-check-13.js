let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a ISBN Number " + " "));
let count = 0;
let copy = n;
let ans = 0;
let weight = 1;
//check digit count
while(n>0){
    count++;
    n=Math.floor(n/10);//remove last digit in every iteration
}
//console.log(count);
if(count!= 13) {
console.log("Not a valid ISBN-13");
return;
}

else{
   while(copy>0){
     let digit = copy%10; //last digit milegi
     ans =ans + weight*digit;//star me 1 hoga weight
    weight = (weight===1)?3:1;//weight change in  every iteration
    copy = Math.floor(copy/10)////remove last digit in every iteration kyunki upar last digit use krli
   }
}
console.log(ans%10==0?"Valid ISBN-13":"Invalid ISBN-13");


