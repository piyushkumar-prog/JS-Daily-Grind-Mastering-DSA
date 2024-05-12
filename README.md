# JS-Daily-Grind-Mastering-DSA
This repository chronicles my exploration of various data structures (arrays, linked lists, trees, etc.) and algorithms (sorting, searching, graph traversal, etc.). I'll be delving into problem-solving, practicing code implementation, and gradually venturing into more advanced topics. Feel free to contribute or join the discussion!


-----------------------------------------------------------------------------------------
## DSA DAY 1 : Conquering Fibonacci

### Using loop:
#### Algorithm:
1) Initialize three variables:

   `prev1 = 0`

   `prev2 = 1`

   `newprev = 0`

2) Output `prev1` and `prev2` to the console.

3) Start a loop:

4) Check if `newprev` is less than or equal to `100`.
If true:

    Calculate the `newprev` by adding `prev1` and `prev2`.

6) Output `newprev` to the console if it's less than or equal to `100`.

    Assign `prev2` to `prev1`.

    Assign `newprev` to `prev2`.

7) Repeat step 3 until `newprev` exceeds `100`.


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

### Using Recursion:

#### Algorithm:
1. Define a function `fibo(prev1, prev2, n)`:

- Input: `prev1` (previous Fibonacci number), `prev2` (current Fibonacci number), `n` (limit)
- Calculate the next Fibonacci number by adding `prev1` and `prev2`.
- If the new Fibonacci number is less than or equal to `n`:
   - Output the new Fibonacci number to the console.
   - Recursively call the fibo function with `prev2` as `prev1`, the new Fibonacci number as `prev2`, and `n`.

2. Call the `fibo` function with initial values `prev1 = 0`, `prev2 = 1`, and `n = 100`.


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

-----------------------------------------------------------------------------------------
# Array

## DSA DAY 2 : Smallest number in an array

#### Algorithm:

1. Initialize an array named `array` with random values.

2. Set the variable snum to the first element of the array `array[0]`.

3. Start a loop from index `1` to the length of the array `array.length`:
     - Compare each element of the array with `snum`.
     - If the current element `array[i]` is less than `snum`.
          - Update snum to be equal to the current element `array[i]`.
         
4. Output `snum `to the console.


#### Implementation:

```js
var array=[4,5,12,90,9,300,2];
var snum=array[0];
for (var i = 1; i < array.length; i++) {
    if (array[i]<snum){
    snum=array[i];
    }
}
console.log(snum);
```

------------------------------------------------------------------------------------------
## DSA DAY 3 : Bubble sort

#### Algorithm:
1. Define a function named `bubbleSort` that takes an array `arr` as input:
   - Let `n` be the length of the array `arr`.
   - For `i` from `0 to n - 2`:
      - For `j` from `0 to n - i - 2`:
        - If `arr[j]` is greater than `arr[j + 1]`:
          - Swap `arr[j]` and `arr[j + 1]`.
   - Return the sorted array `arr`.

2. Create an array named `array` with random values.

3. Call the `bubbleSort` function with the `array` as input and output the `sorted array`.

#### Implementation:

```js
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const array = [44, 34, 13, 12, 21, 16, 99];
console.log("Sorted array:", bubbleSort(array));
```

----------------------------------------------------------------------------

### Follow my DSA journey on:
[![LinkedIn](https://github.com/piyushkumar-prog/JS-Daily-Grind-Mastering-DSA/blob/main/linkedin.png)](https://www.linkedin.com/in/piyush-kumar-prog)
[![Instagram](https://github.com/piyushkumar-prog/JS-Daily-Grind-Mastering-DSA/blob/main/instagram.png)](https://www.instagram.com/piyushkumar_dev)
[![X](https://github.com/piyushkumar-prog/JS-Daily-Grind-Mastering-DSA/blob/main/twitterx.png)](https://www.x.com/Piyushkr_prog)
