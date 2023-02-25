function removeElementFromArray(arr, element){
    let index=arr.indexOf(element);
    if(index !== -1){
        arr.splice(index, 1);
    }
    return arr;
}
let numbers = [1,2,3,4,5];
let removeNumber = 3;
let newArray = removeElementFromArray(numbers,removeNumber);
console.log(newArray);
//ova pogore 1viot del od domasnata

//sega pod ova 2riot del od domasnata
function countDigits(num){
    let count = 0;
    while(num !==0){
        num = Math.floor(num/10);
        count++;
    }
    return count;
}
let number = 12345;
let digitCount = countDigits(number);
console.log(digitCount);

//sega 3tiot del od domasnata

let broevi = [10, 20 ,340, 250, 100];
let maxNumber = broevi[0];
for (let i=1; i<broevi.length; i++){
    if(broevi[i] > maxNumber){
        maxNumber = broevi[i];
    }
}
console.log("Najgolemiot broj e " + maxNumber);