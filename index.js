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
