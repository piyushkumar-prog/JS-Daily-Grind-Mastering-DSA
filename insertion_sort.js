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
