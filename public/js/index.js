
var final="default"

document.getElementById("stone").addEventListener("click",function(){
 final="Stone";

    var image = document.getElementsByClassName("tool")[0];
    image.src = "/images/Stone.svg" ;




})
document.getElementById("paper").addEventListener("click",function(){
final="paper"

    var image = document.getElementsByClassName("tool")[0];
    image.src = "/images/paper.svg";

})
document.getElementById("scissor").addEventListener("click",function(){
final="scissor"

    var image = document.getElementsByClassName("tool")[0];
    image.src = "/images/scissor.svg";

})

// document.getElementsByClassName("btn")[0].addEventListener("click",function(){

//     alert("buttonworking")
// })


function hocl(){

    alert("buttonworking");
  

}


