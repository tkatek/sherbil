let main = document.getElementById('main')
let red = document.getElementById('red')
let blue = document.getElementById('blue')
let black = document.getElementById('black')
let yellow = document.getElementById('yellow')


console.log(main,red,blue,black);

black.onclick = function(){
   main.src=black.src 
}
red.onclick = function(){
    main.src=red.src 
 }
blue.onclick = function(){
    main.src=blue.src 
 }
 yellow.onclick = function(){
    main.src=yellow.src 
 }
