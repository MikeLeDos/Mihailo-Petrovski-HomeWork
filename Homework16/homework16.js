//1 del od domasnata

const form=document.getElementById('myForm');
const errorMessages=document.getElementById('errorMessages');

form.addEventListener('submit', function(event){
    event.preventDefault();

    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let phone=document.getElementById('password').value;
    let age=document.getElementById('age').value;

    errorMessages.innerHTML='';

    if(!name){
        errorMessages.innerHTML +='<p> Полето е задолжително</p>';
    }
    if(!email){
        errorMessages.innerHTML +='<p> Полето е задолжително</p>';
    }
    if(!password){
        errorMessages.innerHTML +='<p> Полето е задолжително</p>';
    }
    if(!phone){
        errorMessages.innerHTML +='<p> Полето е задолжително</p>';
    }
    if(!age){
        errorMessages.innerHTML +='<p> Полето е задолжително</p>';
    }
    if(errorMessages.innerHTML ===''){
        alert('Формата е успешно пополнета');
        form.reset();
    }
});

// 2 del od domasnata

let age=prompt("Vnesete gi godinite");
localStorage.setItem("userAge", age);

let name=prompt("Vnesete go vaseto celo ime");
document.cookie="userName"+ name +"; expires=Session; Path=/";

// 3 del od domasnata


// Define the file URLs
const file1Url = 'Mihailo-Petrovski-HomeWork\Homework16\text1.txt';
const file2Url = 'Mihailo-Petrovski-HomeWork\Homework16\text2.txt';

// Define a function to fetch the text from a URL
async function fetchTextFromUrl(url) {
  const response = await fetch(url);
  const text = await response.text();
  return text;
}

// Define the main function to fetch the text from both files
async function fetchTextFromFiles() {
  try {
    // Fetch the text from both files
    const file1Content = await fetchTextFromUrl(file1Url);
    const file2Content = await fetchTextFromUrl(file2Url);

    // Compare the length of the files
    if (file1Content.length > file2Content.length) {
      console.log('The text from file1 is bigger:');
      console.log(file1Content);
    } else {
      console.log('The text from file2 is bigger:');
      console.log(file2Content);
    }
  } catch (error) {
    console.error(error);
  }
}

// Call the main function
fetchTextFromFiles();
