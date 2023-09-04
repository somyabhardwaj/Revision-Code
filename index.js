let b = "hello my name is somya";
let c = 0;

// setTimeout(() => {
//   function displayNextCharacter() {
//     if (c < b.length) {
//       document.getElementById("a").innerHTML += b.charAt(c);
//       c++;
      
//       setTimeout(displayNextCharacter, 500); // Adjust the delay (in milliseconds) as needed
//     }
//   }

//   displayNextCharacter();
// }, 2000);

// document.getElementById("a").innerHTML += b.split(" ",3);

// document.getElementById("a").innerHTML +=b.slice(5,20);

// it returns index value
// document.getElementById("a").innerHTML += b.search("s");

function greet (){
    let hello = "Hello how Are You ??"
    return hello;
}
let d= greet();
let Arr= ["hello" ,32 , d]
document.getElementById("hello").innerHTML += Arr[2];