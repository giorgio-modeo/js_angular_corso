console.log("hello world!1");
alert("hello world!2");

var message = "questa e una variabile quindi puo cambiare";
console.log(message+"3");

const message2 = "questa e una costante quindi non varia";
console.log(message2+"4 const");

// gli array costanti non possono diventare altro ma si puo aggiungere e togliere item al interno
const numeri = [];

let message3 = (message == message2) ? "le due stringe sono uguali":"le stringe sono diverse";
console.log(message3+"questa e un let quindi puo cambiare e viene visualizzata solo al interno delle funzioni dove dichiarato 5");
// se la metti dentro alle parentesi fuori non si vede e viceversa 

var n = 4;
var n2 = 8;
console.log(n+n2);
const a=5;
if (a<5){
    console.log("minore");
}
else{
    console.log("maggiore");
}
for (let i = 0; i < 10; i++) {
    document.write("<h2>ciao"+i+"</h2>");
}