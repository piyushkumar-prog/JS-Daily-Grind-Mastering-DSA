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


------------------------------------------------------------------------------------------
## DSA DAY 4 : Selection sort

#### Algorithm:
1. Define an array named `array` with random values.

2. Let `n` be the length of array.

3. For `i` from `0 to n - 1`:
    - Set `minIndex` to `i`.
    - For `j` from `i + 1` to `n` :
        - If `array[j]` is less than `array[minIndex]`, update `minIndex` to `j`.
   - Swap `array[i]` with `array[minIndex]`.

4. Output the sorted array `array`.

#### Implementation:

```js
array= [10,8,13,30,4,12,2,9,1];
n= array.length;
for(let i=0;i<n-1;i++){
    let minIndex=i;
    for(let j=i+1;j<n;j++){
        if (array[j]<array[minIndex]){
            minIndex=j;
        }
    }
    let temp_array = array[i];
    array[i]=array[minIndex];
    array[minIndex]=temp_array;

}

console.log(array);
```

----------------------------------------------------------------------------

## DSA DAY 5 : Insertion Sort

#### Algorithm:
1. Define an array named `myarray` with random values.

2. Let `n` be the length of array.

3. For each element in the array starting from the second element (index 1):
   - Set `currentValue` to the element at index `i`.
   - Set `insertIndex` to `i`.
     
4. Compare `currentValue` with each element in the sorted portion of the array (elements before index `i`):
  - If `myArray[j]` is greater than `currentValue`:
     - Shift `myArray[j]` to the right (to index `j+1`).
     - Update insertIndex to `j`.
  - If `myArray[j]` is not greater than `currentValue`:
     - Break out of the inner loop (as the correct position for `currentValue` is found).

5. Place `currentValue` at the position indicated by `insertIndex`.
   
6. Repeat Steps 3-5 until the entire array is sorted.

7. Output the sorted array `myarray`.

#### Implementation:

```js
let myArray = [77, 15, 25, 18, 21, 12, 95, 5];

let n = myArray.length;
for (let i = 1; i < n; i++) {
    let insertIndex = i;
    let currentValue = myArray[i];
    for (let j = i - 1; j >= 0; j--) {
        if (myArray[j] > currentValue) {
            myArray[j + 1] = myArray[j];
            insertIndex = j;
        } else {
            break;
        }
    }
    myArray[insertIndex] = currentValue;
}

console.log("Sorted array:", myArray);
```

----------------------------------------------------------------------------

## DSA DAY 6 : Quick Sort

#### Algorithm:
1.Partition Function:

  - Input: An array `array`, and two indices `low` and `high` indicating the segment of the array to partition.
  - Output: The index of the pivot element after partitioning.
  - Steps:
   - Select the last element in the segment (`array[high]`) as the pivot.
   - Initialize `i` to `low - 1` (to keep track of the position for the smaller element).
   - Iterate over the segment from `low` to `high - 1`:
      - If `array[j]` (current element) is less than or equal to the pivot:
        - Increment `i`.
        - Swap `array[i]` with `array[j]`.
  - Swap `array[i + 1]` with the pivot element `array[high]` to place the pivot in its correct position.
  - Return the index `i + 1`.

2. QuickSort Function:

 - Input: An array `array`, and optionally the starting index `low` and ending index `high` of the segment to be sorted.
 - Output: None (the array is sorted in place).
 - Steps:
     - If `low` is less than `high`:
       - Call `Partition` to partition the array and get the pivot index.
       - Recursively call `QuickSort` on the two sub-arrays:
         - From `low` to `pivotIndex - 1`.
         - From `pivotIndex + 1` to `high`.
           
3. Initial Call:

- The initial call to `QuickSort` sorts the entire array, starting from index 0 to `length(array) - 1`.
- After sorting, the array is printed to show the sorted result.


#### Implementation:

```js
let partition = (array, low, high) => {
    let pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
}

let quicksort = (array, low = 0, high = array.length - 1) => {
    if (low < high) {
        let pivotIndex = partition(array, low, high);
        quicksort(array, low, pivotIndex - 1);
        quicksort(array, pivotIndex + 1, high);
    }
}

let myArray = [64, 34, 25, 12, 22, 11, 90, 5];
quicksort(myArray);
console.log("Sorted array:", myArray);
```

----------------------------------------------------------------------------

## DSA DAY 7 : Counting Sort

#### Algorithm:
1. Find the Maximum Value:
  - Identify the largest number in the input array.
    
2. Initialize Count Array:
  - Create a new array, `count`, with a length equal to the maximum value plus one. Initialize all elements in `count` to zero.
    
3. Count Occurrences:
  - Iterate over each element in the input array.
  - For each element, increment the corresponding count in `count` by one.

4. Sort Array:
  - Initialize a variable `sortedIndex` to zero, which will keep track of the current index in the output array.
  - Iterate over each element in `count`.
  - For each element in `count`, while its count is greater than zero:
     - Place the current element at the current index in the output array.
     - Decrement the count by one.

5. Return Sorted Array:
  - Return the sorted array.

Example Usage:
  - Define an input array, `unsortedArr`, containing the numbers .
  - Call the `countingSort` function with `unsortedArr` as the input.
  - Print the sorted array to the console.
Output:
  - The sorted array will be .

#### Implementation:

```js
countingSort = (arr) => {
    const maxVal = Math.max(...arr);
    const count = new Array(maxVal + 1).fill(0);
  
    for (let i = 0; i < arr.length; i++) {
      count[arr[i]]++;
    }
  
    let sortedIndex = 0;
    for (let i = 0; i < count.length; i++) {
      while (count[i] > 0) {
        arr[sortedIndex++] = i;
        count[i]--;
      }
    }
  
    return arr;
  }
  
  const unsortedArr = [4, 2, 2, 6, 3, 3, 1, 6, 5, 2, 3];
  const sortedArr = countingSort(unsortedArr);
  console.log("Sorted array:", sortedArr);
```

----------------------------------------------------------------------------

## DSA DAY 8 : Radix Sort

#### Algorithm:
Initialization:
  - Create an array radixArray filled with 10 empty arrays.
  - Find the maximum value in the input array myArray and store it in maxVal.
  - Initialize exp to 1.

Radix Loop:
  - While maxVal / exp is greater than 0, perform the following steps:
    - Distribution:
      - While myArray is not empty, pop the last element from myArray and store it in val.
      - Calculate the radix index by dividing val by exp and taking the remainder when divided by 10.
      - Push val into the corresponding bucket in radixArray based on the calculated radix index.

Collection:
  - For each bucket in radixArray, while the bucket is not empty, pop the last element from the bucket and push it back into myArray.

Increment Exponent:
  - Multiply exp by 10.

Repeat Radix Loop:
  - Repeat steps 2-4 until maxVal / exp is no longer greater than 0.

Final Output:
  - Print the original array and the sorted array.


#### Implementation:

```js
let myArray = [170, 45, 75, 90, 802, 24, 2, 66];
let radixArray = new Array(10).fill(0).map(() => []);
let maxVal = Math.max(...myArray);
let exp = 1;

while (maxVal / exp > 0) {
    while (myArray.length > 0) {
        let val = myArray.pop();
        let radixIndex = Math.floor((val / exp) % 10);
        radixArray[radixIndex].push(val);
    }

    for (let bucket of radixArray) {
        while (bucket.length > 0) {
            let val = bucket.pop();
            myArray.push(val);
        }
    }
    exp *= 10;
}
console.log("Original array:", myArray);
console.log("Sorted array:", myArray);
```

----------------------------------------------------------------------------

### Follow my DSA journey on:
[![LinkedIn](https://github.com/piyushkumar-prog/JS-Daily-Grind-Mastering-DSA/blob/main/linkedin.png)](https://www.linkedin.com/in/piyush-kumar-prog)
[![Instagram](https://github.com/piyushkumar-prog/JS-Daily-Grind-Mastering-DSA/blob/main/instagram.png)](https://www.instagram.com/piyushkumar_dev)
[![X](https://github.com/piyushkumar-prog/JS-Daily-Grind-Mastering-DSA/blob/main/twitterx.png)](https://www.x.com/Piyushkr_prog)
