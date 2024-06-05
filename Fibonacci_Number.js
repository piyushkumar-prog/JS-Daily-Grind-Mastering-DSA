//Using loop
let prev1=0;
let prev2=1;
let newprev=0;
console.log(prev1);
console.log(prev2);

while (newprev <= 100) {
    newprev = prev1 + prev2;
    if (newprev <= 100) {
       console.log(newprev);
    }
    prev1 = prev2;
    prev2 = newprev;
}

//Fibonacci Numbers using RECURSION
let fibo=(prev1, prev2, n) => {
let newprev = prev1 + prev2;
if (newprev <= n) {
    console.log(newprev);
    fibo(prev2,newprev,n);
  }
}

fibo(0,1,100);