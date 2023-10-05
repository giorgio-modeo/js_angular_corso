const Dado1 = document.getElementById("dado1");
const Dado2 = document.getElementById("dado2");
var n = parseInt((Math.random()*6)+1);
var n2 = parseInt((Math.random()*6)+1);
var url="https://raw.githubusercontent.com/maboglia/ProgrammingResources/master/images/dadi/f"+n+".jpg";
var url2="https://raw.githubusercontent.com/maboglia/ProgrammingResources/master/images/dadi/f"+n2+".jpg";
console.log(n);
console.log(n2);
Dado1.src = n;
Dado2.src = n2;
let n3 = (n == n2) ? true:false;

