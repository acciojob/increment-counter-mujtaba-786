//your JS code here. If required.

let btn = document.getElementById("incrementBtn")
let p = document.querySelector("#counter")
let counter = 0
btn.addEventListener('click', function() {
     alert(counter)
     counter+= 1 
     p.textContent = counter 
})