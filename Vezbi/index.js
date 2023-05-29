
async function getText(file){
    let x=await fetch(file);
    let y=await x.text();
    document.getElementById("footer").innerHTML=y;
}
getText("text.txt");


async function getXML(file){
    let x=await fetch(file);
    let y=await x.text();
    document.getElementById("main").innerHTML=y;
}
getXML("example.xml");

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.text())
.then(data => document.getElementById("header").innerHTML = data);

// variable= new XMLHttpRequest();
// xhttp.onload=function(){
    
// }
// xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
//     xhttp.send();