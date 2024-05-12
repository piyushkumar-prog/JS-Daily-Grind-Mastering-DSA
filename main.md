# DSA DAY 1 : Conquering Fibonacci

### Using loop:
#### Algorithm:
1) Initialize three variables:

   prev1 = 0

   prev2 = 1

   newprev = 0

2) Output prev1 and prev2 to the console.

3) Start a loop:

4) Check if newprev is less than or equal to 100.
If true:

    Calculate the newprev by adding prev1 and prev2.

6) Output newprev to the console if it's less than or equal to 100.

    Assign prev2 to prev1.

    Assign newprev to prev2.

7) Repeat step 3 until newprev exceeds 100.


#### Implementation:

```js
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
```

### Using Resursion:

#### Algorithm:
1. Define a function fibo(prev1, prev2, n):

- Input: prev1 (previous Fibonacci number), prev2 (current Fibonacci number), n (limit)
- Calculate the next Fibonacci number by adding prev1 and prev2.
- If the new Fibonacci number is less than or equal to n:
   - Output the new Fibonacci number to the console.
   - Recursively call the fibo function with prev2 as prev1, the new Fibonacci number as prev2, and n.
   - 
2. Call the fibo function with initial values prev1 = 0, prev2 = 1, and n = 100.


#### Implementation:

```js
let fibo=(prev1, prev2, n) => {
let newprev = prev1 + prev2;
if (newprev <= n) {
    console.log(newprev);
    fibo(prev2,newprev,n);
  }
}

fibo(0,1,100);
```
