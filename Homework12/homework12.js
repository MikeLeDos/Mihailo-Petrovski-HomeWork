//Prviot del od domasnata:
const books=[
    {author:"Bill Gates", title:"The Road Ahead",libraryID: 1254 },
    {author:"Steve Jobs", title:"Walter Isaascon",libraryID: 4624},
    {author:"Suzanne Collins",title:"Mockingjay",libraryID: 3245},
    {author:"Mihailo Petrovski",title:"Programer",libraryID: 1254},
]
function sortByTitle(arr){
    return arr.sort((a,b)=>{
        const titleA=a.title.toUpperCase();
        const titleB=b.title.toUpperCase();
        if (titleA<titleB){
            return -1;
        }
        if(titleA>titleB){
            return 1;
        }
        return 0;
    })
}
const sortedBooks = sortByTitle(books);
console.log(sortedBooks);

//1.1  od domasnata
const authors = books.map(book => book.author);
console.log(authors);

//1.2 od domasnata
function findBooksByLibraryId(libraryID,books){
    return books.filter(book => book.libraryID ===libraryID)
}
const result =findBooksByLibraryId(1254,books);
console.log(result);

//Vtoriot del od domasnata:
class Car{
    constructor(brand, year, horsepower){
        this.brand = brand;
        this.year = year;
        this.horsepower = horsepower;
    }
    calculateAge(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
    canDrive(userAge){
        if (userAge >=25){
            return true;
        }
        else{
            return this.horsepower <=105;
        }
    }
}
const users =[
    {fullName: 'Mihailo Petrovski', age:33},
    {fullName: 'Lionel Messi', age:22},
    {fullName: 'Robert Lewandovski', age:15},
];
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const car = new Car('Toyota', 2010, 120);
    const canDrive = car.canDrive(user.age);
    console.log(`${user.fullName} can drive ${canDrive ? 'any' : 'some'} cars.`);
  }
  //da prasam za navodnicite pred $???
// for (let i=0; i< users.length; i++){
//     const user = users[i];
//     const car = new Car('Toyota', 2010, 120);
//     const canDrive - car.canDrive(user.age);
//     console.log(${user.fullName} can drive ${canDrive ? 'any' : 'some'} cars.);
// }