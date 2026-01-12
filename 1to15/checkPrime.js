let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a Number " + " "));
if(n<=1)console.log("Not Prime Number");
else if(n==2) console.log("Prime Number");
else if(n%2==0) console.log("Not Prime Number");
//ab sirf odd number bache prime check krne ko
else{
    let isPrime = true;
    for(let i = 3 ; i<=Math.floor(Math.sqrt(n)) ; i+=2){
        if(n%i==0) {
            isPrime = false ;
            break;
        };  
    }
    console.log(isPrime?"Prime Number":"Not Prime Number");
    
}

