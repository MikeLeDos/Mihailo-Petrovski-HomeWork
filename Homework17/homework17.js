let getXMLFile=function(file){
    fetch("Mihailo-Petrovski-HomeWork\Homework17\text.xml")
    .then(response=>response.text())
    .then(str=>new window.DOMParser().parseFromString(str,"text/xml"))
    .then(xml=>SetXMLData(xml));
    let request=new XMLHttpRequest();
    request.open("GET",file);
    request.setRequestHeader("Content-Type", "text/xml");
    request.onreadystatechange=function(){
        SetXMLData(request.responseXML);
    };
    request.send();
}
function SetXMLData(xml) {
    console.log(xml);
    const x=xml.getElementsByTagName("CD");
    for (let i =0; i<x.length; i++) {
        table += "<tr><td>"+ x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue+"</td><td>"+ x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue+"</td><<tr>";
        
    } 
    document.getElementById("demo").innerHTML=table;
    }
    