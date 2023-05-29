// const niza = [1, 2, 3, 4, 5];
//   const povtoruvanja = 3;

// function povtoruvanjaX(array, times) {
//     let miki = 0;
//     let iterations = 0;
    
//     const intervalId = setInterval(() => {
//       console.log(array[miki]);
//       miki++;
      
//       if (miki >= array.length) {
//         miki = 0;
//         iterations++;
//       }
      
//       if (iterations >= times) {
//         clearInterval(intervalId);
//       }
//     }, 1000); 
//   }
  
  
//   console.log(povtoruvanja);
//   povtoruvanjaX(niza, povtoruvanja);
// const array=[2,4,6,8,10];
// const iterations=4;
//   function maksim(array,times) {
//     let mina=0;
//     let iterations=0;
//     const intervalId=setInterval
// console.log(array(mina));
//     mina++;

//     if (mina >=array.length) {
//       mina=0;
//       iterations++
//     }
//     if (iterations >=times) {
//       clearInterval(intervalId);
//     }
    
//     }1000
  

//     let maksimmina=mnozenje(4,3);

//     function mnozenje(a,b) {
//       return a*b;
      
//     }
//     console.log(maksimmina);

//     document.getElementById(1).onmouseover=function(){mouseOver()};
//     document.getElementById(1).onmouseout=function(){mouseOut()};
//     function mouseOver() {
//       document.getElementById(1).style.color="red";
//     }
//     function mouseOut(){
//       document.getElementById(1).style.color="black";
//     }

    // let arr_1=[3,5,22,5,7,2,45,75,89,21,2];
    // let arr_2=[9,2,42,55,71,22,4,5,90,25,26];

    // let sum=0;
    // let i=arr_1;

    // for (let i = 0; i < arr_1.length; i++) {
    //   sum +=arr_1[i];
    // }
    
  // console.log(i);

//   let arr1=[3,5,22,5,7,2,45,75,89,21,2];
// let arr2=[9,2,42,55,71,22,4,5,90,25,26];

// let sum = 0;
// for (let i = 0; i < arr1.length; i++) {
//   sum += arr1[i];
// }

// for (let i = 0; i < arr2.length; i++) {
//   sum += arr2[i];
// }

// console.log(sum); 



// let str2 = "don't know why";
// if (str2.includes("y")) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// let text="don't know why";
// let includes=text.search(/y/);

// console.log(includes);

// let str = "racecar";
// if (isPalindrome(str)) {
//   console.log(`${str} is a palindrome`);
// } else {
//   console.log(`${str} is not a palindrome`);
// }

function isPalindrome(str) {
  str=str.toLowerCase().replace(/[^a-z0-9]/g, ""); //so ovaa postapka ja pretvarame nizata vo mali bukvi i gi ostranuvame ne alfanumerickite znaci 
  let reversedStr=str.split("").reverse().join(""); //obratno za nizata
return str===reversedStr; //proveruvame dali originalniot i obratniot string se ednakvi
}

function arePalindromes(str1,str2) {
  return isPalindrome(str1) && isPalindrome(str2);
  
}
let str1="racecar";
let str2="level";
if (arePalindromes(str1,str2)) {
  console.log(` racecar i level se palindromi`);
} else{
  console.log(` racecar i level ne se palindromi`);
}
//zadaca-2
//Using a for loop print all even numbers up to and including n. Don’t include 0.
function printEvenNumber(n) {    //kreirame funkcija narecena printEveneNumber
  for (let i = 2; i <=n; i+=2) {  //zapocnuvame so 2, bidejki 0 ne e vklucena i se zgolemuva za 2 za da se pecatat samo parni broevi
    console.log(i);
  }
}
printEvenNumber(22); //ja povikuvame funkcijata so n=22 za da gi ispecatime site parni broevi vklucuvajki go i brojot 22

//zadaca-3

let arr=[43, "what",9,true,"cannot",false,"be",3,true]; //kreirame niza narecena arr
for (let i = arr.length -1; i>=0; i--) {   //zapocnuva na posledniot indeks na nizata i se namaluva za 1 vo sekoe povtoruvanje dodeka ne dojde do 0 sto e prviot indeks na nizata
  console.log(arr[i]);
}

//zadaca-4
let niza1=[4,6,7];
let niza2=[8,1,9];

function zbirnaNiza(niza1,niza2) {   //definirame funkcija (zbirnaNiza) koj zema 2 nizi: niza1 i niza2
  let sumArr=[];  //potoa kreirame prazna niza sumArr vo koja ke se zemat elementite od niza 1 i niza 2 
  for(let i=0; i< niza1.length; i++){    //odi niz sekoj element od nizite i go sobira sekoj element vo istata pozicija
    sumArr.push(niza1[i] + niza2[i]);  //zbirot potoa se dodava vo nizata koristejki go metotodot push
  } return sumArr;  //funkcijata ja vraka nizata sumArr
}
let sumArr=zbirnaNiza(niza1,niza2); 
console.log(sumArr);

// let text="tEsT123ZaZadaca";
// let result="";

//   for(i=0; i<text.length; i++){
//     let karakter=text[i];
//     if(karakter ===karakter.toUpperCase()){
//       result += karakter.toLowerCase();
//     } else{
//       result +=karakter.toUpperCase();
//     }
//   }

// console.log(result);


// let str = "tEsT123ZaZadaca";

// let result = "";

// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   if (char === char.toUpperCase()) {
//     result += char.toLowerCase();
//   } else {
//     result += char.toUpperCase();
//   }
// }

// console.log(result); // "tHiS iS a StRiNg"

let bla1 = "javascript";
let result = "";

for (let i = 0; i < bla1.length; i++) {
  if ((i + 1) % 2 == 0) {
    result += "Z";
  } else {
    result += bla1[i];
  }
}

console.log(result);



let niza5=["test2134", "basfsadagsdg","ee"];
let maxStr="";


for( let i=0; i<niza5.length; i++){
  if(niza5[i].length > maxStr.length){
    maxStr=niza5[i];
   
  }
}
console.log(maxStr);

function factorial(n){
  if(n===0){
    return 1;
  } else{
    return n*factorial(n-1);
  }
}
let n2=4;
console.log(factorial(n2));

//Write a program that will allow someone to guess a four digit pin exactly 4
//times. If the user guesses the number correctly. It prints “That was
//correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.

let pin="0803";
let guessCount=0;

while (guessCount<4) {
  let guess=prompt("Pogodi go brojot");
  guessCount++;

if (guess===pin) {
  console.log("Tocno prijatele");
  break;
} else {
  console.log("Netocno prijatele-Izvini");
}
}
if(guessCount===4){
  console.log("poveke sreka sledniot pat prijatele");
}


function summation(num){
  let sum=0;
  for (i=1; i<=num; i++){
    sum += i;
  }
  return sum;
}
let num1=2;
let num2=8;
console.log(summation(num1));
console.log(summation(num2));

// const apiKey = "your_api_key_here";
// const city = "Skopje";

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data.weather[0].description);
//   })
//   .catch(error => console.error(error));
