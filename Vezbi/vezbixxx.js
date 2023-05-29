// fetch("https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.nationsonline.org%2Fmaps%2Fcountries_europe_map.jpg&tbnid=2UE42unkhg6PcM&vet=12ahUKEwjJxP7do_79AhXErycCHcjQAroQMygBegUIARDJAQ..i&imgrefurl=https%3A%2F%2Fwww.nationsonline.org%2Foneworld%2Feurope_map.htm&docid=MIAZZP2W4ss3uM&w=1944&h=1882&q=maps%20of%20countries&ved=2ahUKEwjJxP7do_79AhXErycCHcjQAroQMygBegUIARDJAQ")
//   .then(response => response.json())
//   .then(data => {
//     const countries = data.map(country => country.name);
//     console.log(countries);
//   })
//   .catch(error => console.error(error));


  let petrovski= new Object();
  petrovski.firstName='Miki';
  petrovski.deteName='Maksim';
  petrovski.womenName='Mirjana';
  petrovski.deteName2='Mina';

  console.log(petrovski.womenName,petrovski.firstName,petrovski.deteName,petrovski.deteName2);

  let user={
    firstName:'Mihailo',
    lastName:'Petrovski',
    dateOfBirth: 1984,
  };
  console.log(user.dateOfBirth,user.lastName,user.firstName);


  

  let user1={
    age:39,
    name:{
      firstName:'Mihailo',
      lastName:'Petrovski',
    },
    city:'Barcelona',
    country:'Spain',
    fullName:function(){
      return this.name.firstName + " " +this.name.lastName;
    }
  };
  let user2=user1.fullName();
  console.log(user2);
  
  let car={
    type:'Peugeot',
    model: 308,
    color:"red"
  };
  // document.getElementById("miki").innerHTML="Na MIKI kolata e" + " "+ car.type,car.model,car.color;



  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => console.log(data.value));

  
