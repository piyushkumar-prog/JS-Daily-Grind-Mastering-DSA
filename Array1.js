//To find SMALLEST number in an ARRAY
var array=[4,5,12,90,9,300,2];
var snum=array[0];
for (var i = 1; i < array.length; i++) {
    if (array[i]<snum){
    snum=array[i];
    }
}
console.log(snum);