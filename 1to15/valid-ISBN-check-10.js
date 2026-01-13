let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a ISBN Number " + " "));
let count = 0;
let copy = n;
let ans = 0;
//number of digit kitne hai uska logic
while(n>0){
    count++;
    n=Math.floor(n/10);
}
//console.log(copy);
//console.log(n);
if(count!= 10) {
console.log("Not a valid ISBN-10");
return;
}
//check valid ISBN or not
else{
    while(copy>0){
        let digit = copy%10;//merko last digit mil jayegi ISBN number ki
    ans = ans + (digit*count);
    copy = Math.floor(copy/10);//ISB number se last digit remove
    count--;
    }
}
console.log(ans%11==0?"Valid ISBN":"Invalid ISBN");




