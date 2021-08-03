function getFormvalue(){
    var name = document.getElementById("fname").value
    var lastName = document.getElementById("lname").value
 var p = document.getElementById("display")
   p.innerHTML = ("Welcome " + name  +" "+  lastName + " this is")
   p.style.fontSize = "40px"
    
}
var audio = new Audio("super-saiyan.mp3");

audio.oncanplaythrough = function(){
audio.play();
}

audio.loop = true;

audio.onended = function(){
audio.play();
}
