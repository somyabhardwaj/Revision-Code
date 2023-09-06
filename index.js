// let b = "hello my name is somya";
// let c = 0;

// // setTimeout(() => {
// //   function displayNextCharacter() {
// //     if (c < b.length) {
// //       document.getElementById("a").innerHTML += b.charAt(c);
// //       c++;
      
// //       setTimeout(displayNextCharacter, 500); // Adjust the delay (in milliseconds) as needed
// //     }
// //   }

// //   displayNextCharacter();
// // }, 2000);

// // document.getElementById("a").innerHTML += b.split(" ",3);

// // document.getElementById("a").innerHTML +=b.slice(5,20);

// // it returns index value
// // document.getElementById("a").innerHTML += b.search("s");

// function greet (){
//     let hello = "Hello how Are You ??"
//     return hello;
// }
// let d= greet();
// let Arr= ["hello" ,32 , d]
// Arr.push("New");
// Arr.unshift("Somya");
// Arr.pop();
// Arr.shift();
// Arr[3]="My name is somya";
// document.getElementById("hello").innerHTML += Arr[3];
// document.getElementById("a").innerHTML += Arr.length;

// Array Operations

// let Arr1 = ["hello", "I", "Am", "Somya"];
// let Arr2 = ["I", "Am", "from", "Kanpur"];

// let Arr3 = Arr1.concat(Arr2);

// document.getElementById("hello").innerHTML += Arr3.indexOf("from");

// document.getElementById("hello").innerHTML += `${Arr3}`;

// let Arr1 =[20,30,25,26,10,15,14,19,13,12,12,15,14,10,56,5,44,20]
// function Adults(Arr1){
//     return Arr1 >=18;
// }

// document.getElementById("hello").innerHTML += Arr1.filter(Adults).length;


// let Arr1 =[20,30,25,26,10,15,14,19,13,12,12,15,14,10,56,5,44,20];

// function Finds (Arr1){

//     return Arr1 >= 18;

// }
// document.getElementById("hello").innerHTML += Arr1.find(Finds);



// function Value(index) {
    
//     return index; 
//   }

//   function Finds(item, index, arr) {
//     arr[index] = item + " This item is in index " + Value(index);
//   }
// Arr1.forEach(Finds);



// let Arr1 =[20,30,25,26,10,15,14,19,13,12,12,15,14,10,56,5,44,20];

// function checkAge(Arr1) {
//     return Arr1 > 18;
//   }

// document.getElementById("hello").innerHTML = Arr1.findIndex(checkAge);

// let Arr1 =[20,30,25,26,10,15,14,19,13,12,12,15,14,10,56,5,44,20];

// function Mapping(n){

//     return n *10 ;

// }

// document.getElementById("hello").innerHTML = Arr1.sort();

// document.getElementById("hello").innerHTML =Arr1.slice(2,10);

// Arr1.splice(5,8, "hello" , "Somya");
// document.getElementById("hello").innerHTML =Arr1;

// Multidimention Array



// let X= "Somya";
// document.getElementById("a").innerHTML += X;


// document.getElementById("hello").innerHTML += X === "Somya" ? "SB" : "Hero";

// let Arr1 =[[20,30,25,26,10,15,14,19,13],[12,12,15,14,10,56,5,44,20]];

// let x =Arr1.forEach((data)=>{
//     data.forEach((innerData)=>{

//         document.getElementById("hello").innerHTML += innerData;
//     });

// });

// for...of loop to iterate multi Array



// for (let i of Arr1){
//     for (let j of i){
//     document.getElementById("hello").innerHTML += j + "$ " +"<br>" ;
//     }
// }
// let Arr1 =[[20,30,25,26,10,15,14,19,13],[12,12,15,14,10,56,5,44,20]];
// for (let i = 0; i < Arr1.length; i++) {
//     for (let j = 0; j < Arr1[i].length; j++) {
//       document.getElementById("hello").innerHTML +=  Arr1[i][j] + "\r" ;
//     }

//     document.getElementById("hello").innerHTML += "\n";
//   }

// Objects adn its methods 

// let obj1= {

//     Name:"Somya",
//     Age : 22,

// }
// Dot Notation
// document.getElementById("hello").innerHTML += obj1.Name;

// Bracket Notation 
// document.getElementById("hello").innerHTML += obj1["Name"];

// Nested Object 
// let obj1= {

//     Name:"Somya",
//     Age : 22,
//     obj2:{

//         Name:"Hari",
//         Age : 20
//     }

// }

// Sets is a collection of unique Value

// let Letters = new Set([2, 3, 4, 5, 6, 6, 7, 6]);
// let text = " "; // Initialize an empty string

// Letters.forEach (function(value) {
//   text += value + " ";
// })


// // Assign the built string to the "hello" element's innerHTML


// const fruits = new Map([
    
//     ["bananas", 300],
//     ["apples", 300],
//     ["oranges", 200]
//   ]);

  

// document.getElementById("hello").innerHTML += fruits.get("apples");
// document.getElementById("hello").innerHTML += fruits.delete("apples");
// document.getElementById("hello").innerHTML += fruits.has("apples");
// let text = " ";

// fruits.forEach(function(key, value){

//     text += value + "= " + key + "<br>" ;
// });
// document.getElementById("hello").innerHTML += text;

// const txt = '{"name":"John", "age":30, "city":"New York"}'
// const obj = JSON.parse(txt);
// let out =" ";
// for (let i in obj){
// out +=  i + "= " +obj[i] + " <br>" ;
// document.getElementById("hello").innerHTML =out;
// }

// const fruits ={
    
//     bananas: 300,
//     apples: 300,
//     oranges:200
// };

// for (let i in fruits){

//     document.getElementById("hello").innerHTML += `${i} =>$${fruits[i]} <br> `;
// }


// let b = "Hello Somya";

// let b = new Set([1,2,3,5,4])
// for (let i of b){
// document.getElementById("hello").innerHTML += i;
// }

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu',
    getPokeName: function() {
      var fullname = this.firstname + ' ' + this.lastname;
      return fullname;
    }
  };
  
  var pokemonName = function() {
    return this.getPokeName() + ' I choose you!';
  };
  
  var logPokemon = pokemonName.bind(pokemon);
  
  var result = logPokemon();
  
  // Display the result in the "hello" element
  document.getElementById("hello").innerHTML += result;
  