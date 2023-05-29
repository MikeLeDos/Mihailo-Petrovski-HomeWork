const family = ["Miki","Maksim","Mina","Mirjana"];
family.push("MAX");
window.alert(family);


let txt="I can eat bananas all day";//da go prikaze samo brojot od 10-17 karakter
let x=txt.slice(10,22);
console.log(x);

const d=new Date();
month = d.getMonth();
console.log(month);
d.setFullYear(2022)
console.log(d);

let r=Math.random();//da izvadi random broj
console.log(r);

let t=Math.max(10,34);//da go izvadi najgolemiot broj(vo slucajov 34)
console.log(t);

let l=Math.round(3.4); //da se zaokruzi broj (vo slucajov da prikaze samo 3ka)
console.log(l);

let o=Math.sqrt(16); //square-kvadrat od 16
console.log(o);

class Karakter{
    constructor(ime,pozicija,health,damage,level){
        this.ime = ime;
        this.pozicija = pozicija;
        this.health = health;
        this.damage = damage;
        this.level = level;
        this.rank;
    }
    
    calculateRank() {
        return (this.level<50) ? this.rank ==
    }


}