//your JS code here. If required.

let btn = document.getElementById("btn")
let p = document.querySelector("p")
let counter = 0
btn.addEventListener('click', function() {
     counter+= 1
     p.innerHTML = counter
})