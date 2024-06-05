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