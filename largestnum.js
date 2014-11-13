var array = [2, 7, 7, 3, 9, 0, 1, 6, 8, 3, 8, 4, 7, 9];

var largest = 0;
function getBiggest(array) {
    for (i=0; i<array.length; i++) {
    if (array[i]>largest) {
        largest = array[i];
    }
}
return largest
}
console.log(getBiggest(array));
