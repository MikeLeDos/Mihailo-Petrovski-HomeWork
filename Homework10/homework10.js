function chekForEquality(param1, param2, param3){
    if((param1===param2) || (param2===param3) || (param1===param3)){
        return true;
    }else if((typeof param1==='string' && typeof param2==='number' && parseInt(param1)===param2) ||
     (typeof param2==='string' && typeof param3==='number' && parseInt(param2)===param3) || 
     (typeof param1==='string' && typeof param3==='number' && parseInt(param1)===param3)) {
        return true;
     }
     
     else{
        return false;
    }
}
console.log(chekForEquality(9,4,'4'));//true
console.log(chekForEquality(1,'1',1));//true
console.log(chekForEquality('1', '2', '3'));//false



function getDaysInMonth(month, year){
    if(month < 1 || month > 12) { //check if month is valid
        return "Invalid month number";
    }
    if(month === 2 && year !== undefined){
        if(year % 4 === 0 && (year % 100 !==0 || year % 400 === 0)){
            return 29;
        } else{
            return 28;
        }
    }//ako imaat mesecite 31 den
    if( month ===1 || month === 3 || month === 5 || month ===7 || month ===8 || month === 10 || month === 12){
        return 31
    }//ako mesecite imaat po 30 dena
    if( month === 4 || month === 6 || month === 9 || month === 11){
        return 30
    }
}
console.log(getDaysInMonth(2,2020));//29dena
console.log(getDaysInMonth(2,2021));//28dena
console.log(getDaysInMonth(4));//30 dena
console.log(getDaysInMonth(13));//pogresen mesec
console.log();