


// document.getElementById("myBtn").addEventListener("click", function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
//   });
  
  // function myFunction (){

  // const hello = document.createElement("h1");

  // const textnode = document.createTextNode("water");

  // hello.appendChild(textnode);

  // document.getElementById("myList").appendChild(hello);

  // }

  const  nodeMap = document.getElementById("myImg").attributes;

  let text ="";

  for (let i=0;i<nodeMap.length;i++)
{

  text += nodeMap[i].name + " = " + nodeMap[i].value + "<br>"

  document.getElementById("demo").innerHTML = text;
}
  
  
  