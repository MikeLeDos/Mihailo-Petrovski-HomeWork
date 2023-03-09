//1viot del od domasnata
const myForm=document.getElementById('myForm');
const submitBtn=document.getElementById('submitBtn');

submitBtn.addEventListener('click', (event) =>{
    event.preventDefault();

    if(!myForm.name.value || !myForm.lastname.value || !myForm.email.value || !myForm.country.value || !myForm.city.value) {
        alert('Пополни ги сите полиња вол еден, кај се брзаш');
    } else{
            alert('OK');
        }
    });

    //2riot del od domasnata
    function vnesipodatoci(input) {
        if (!input.value) {
          input.nextElementSibling.textContent = 'Vnesi nesto be vol eden';
        } else {
          input.nextElementSibling.textContent = '';
        }
      }

      //tret del od domasnata Hristijan :)

      let count=0;
      const button=document.getElementById('click-me')
      const resetButton=document.getElementById('reset');
      button.addEventListener('click',() =>{
        count++;
        console.log('Button clicked {count} times.');
      });
      resetButton.addEventListener('click',() =>{
        count=0;
        console.log('Counter reset. Count is now {count}');
      });


    