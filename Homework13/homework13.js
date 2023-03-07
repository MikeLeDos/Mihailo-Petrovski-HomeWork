function addRowsToTable(){
    let table = document.getElementById("tabela");
    let newRow1=table.insertRow();//kreiranje nova redica i dodadeno 2 cell vo redicata
    let cell1=newRow1.insertCell();
    let cell2=newRow1.insertCell();

    //sega uste novata redica so isto 2 cell
    let newRow2=table.insertRow();
    let cell3=newRow2.insertCell();
    let cell4=newRow2.insertCell();

    //dodavanje text vo cells
    cell1.innerHTML="Redica 3,Kolona 1";
    cell2.innerHTML="Redica 3,Kolona 2";
    cell3.innerHTML="Redica 4,Kolona 1";
    cell4.innerHTML="Redica 4,Kolona 2";
}
addRowsToTable();

const listItems=document.querySelectorAll('#my-list li');

for(let i=0; i<listItems.length; i++){
    listItems[i].style.backgroundColor='yellow';
    listItems[i].style.color='blue';
}

//4 del od domasnata 
 const form=document.getElementById('my-form');
 const firstNameOutput=document.getElementById('first-name-output');
 const lastNameOutput=document.getElementById('last-name-output');
 const submitBtn=document.getElementById('submit-btn');

 submitBtn.addEventListener('click',function(){
    const firstName=document.getElementById('first-name').value;
    const lastName=document.getElementById('last-name').value;

    console.log('First Name: {firstName}');
    console.log('Last Name: {lastname}');

    firstNameOutput.innerHTML='First Name: {firstName}';
    lastNameOutput.innerHTML="Last Name: {lastName}";
 })