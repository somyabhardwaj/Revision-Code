


// document.getElementById("myBtn").addEventListener("click", function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
//   });
  
  // function myFunction (){

  // const hello = document.createElement("h1");

  // const textnode = document.createTextNode("water");

  // hello.appendChild(textnode);

  // document.getElementById("myList").appendChild(hello);

  // }

//   const  nodeMap = document.getElementById("myImg").attributes;

//   let text ="";

//   for (let i=0;i<nodeMap.length;i++)
// {

//   text += nodeMap[i].name + " = " + nodeMap[i].value + "<br>"

//   document.getElementById("demo").innerHTML = text;
// }
  
  
// function losefocus() {
//   document.getElementById("myList").focus();
// }


// function myFunction() {
//   const element = document.getElementById("myDIV");
//   if (element.className == "myStyle") {
//     element.className = "newStyle";
//   } else {
//     element.className = "myStyle";
//   }
// }

function myFunction() {
  const h2 = document.getElementById("myH2");
  let html = "<p>My new paragraph.</p>";
  h2.insertAdjacentHTML("afterend", html);
}