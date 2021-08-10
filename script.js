function getFormvalue(){
    var name = document.getElementById("fname").value
    var lastName = document.getElementById("lname").value
 var p = document.getElementById("display")
   p.innerHTML = ("Welcome " + name  +" "+  lastName + " this is")
   p.style.fontSize = "40px"
    
}
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
}