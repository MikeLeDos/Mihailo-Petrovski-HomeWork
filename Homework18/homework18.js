// 1del od domasnata
const person={
    name: 'Miki',
    surname: 'Petrovski',
    profession: 'Developer',
    sayHello(){
        console.log('Hello!');
    },
    introduce(){
        console.log('My name is {this.name and I"m a {this.profession},');
    }
};
function objectToArray(obj){
    const arr= [];
    for (const [key,value] of Object.entries(obj)){
        arr.push('${key}: ${value}');
    }
    return arr;
}
const arr1=objectToArray(person);
console.log(arr1);

// 2 del od domasnata
function arrayToObject(arr){
    const obj={};
    for (let i=0; i<arr.length; i++){
        const [key,value]= arr[i];
        obj[key]=value;
    }
    return obj;
}
const arr=[['name', 'Miki'],['surname','Petrovski'],['profession','Developer']];
const obj=arrayToObject(arr);
console.log(obj);

// 3 del od domasnata
function isEqual(object1,object2){
    const props1=Object.getOwnPropertyNames(object1);
    const props2=Object.getOwnPropertyNames(object2);

    if (props1.length !== props2.length) {
        return false;
    }
    for (let i=0; i < props1.length; i++) {
        const propName=props1[i];

        if (object1[propName] !==object2[propName]) {
            return false;
        }
    }
    return true;
}
