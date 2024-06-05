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