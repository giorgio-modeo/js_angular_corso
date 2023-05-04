
let counter = 0;

const divContatore = document.getElementById('contatore');
const btnDown = document.getElementById('down');
const btnUp = document.getElementById('up');



btnDown.onclick = function(){
    decrementa();
    showCounter();

}


console.log(typeof divContatore);


function incrementa() {
    // counter = counter + 1;
    // counter += 1;
    counter++;
    showCounter()
}
function decrementa() {
    counter--;
    showCounter()
}
function showCounter() {
    divContatore.innerHTML = '<h1>'+counter+'</h1>';
}
