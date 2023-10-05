{
    let x = 5;
    var y =5;
}
console.log(y);
//console.log(x);

const z = 5;
//z = 6;
console.log(z);

for (var i = 0; i <5; i++) {    
console.log(i);
    for (let index = 0; index < 5; index++) {
        console.log(i);
    }
}
console.log(i);

var nome = "pippo";
console.log(`benvenuto ${nome}`);
const test = params => console.log('test');
const note =['do', 're', 'mi', 'fa','do#']
for (const nota of note) {
    console.log(nota.toUpperCase());
}
const noted=note
.filter(nota => nome.startsWith("d"))
.forEach(note => console.log(note.toUpperCase()));


let a = ['a','b','c']
let b = [a,'d','e']
console.log(b);
function avg(params){
    let totale = 0
    for (let index = 0;index < params.length; index++)
    {
        totale += params[index]
    }
    return totale / params.length;
}
console.log(avg(25,26,27,28,29,30));
console.log(avg(28,29,30));
const totale = [25,26,27,28,29,30].reduce((a,b)=>a+b,0)/6;
console.log(totale);

//destructuring array
const voti = [25, 23,26, 28, 29];
const [primo, secondo, ...altri] = voti;
console.log(secondo.reduce);

const presenze = ['Biagina Antonella', 'Alberti', 22,84.62, 2,4,4,4,4,4];
const [nome2, cognome,,, ...ore] = presenze;
console. log (cognome);
console.log (ore.reduce ((a,c)=>a+c, 0));

//destructuring oggetti

const libro = {
    titolo: 'Io, robot',
    autore: 'Asimov',
    lingue: {
    orig:'russo',
    trad:'inglese'
    }
}

const {autore,lingue: {orig},tipo='romanzo'} = libro;
console.log(autore);
console.log(orig);

function print( {nome, cognome} ) {
    console.log(`Benvenuto ${nome} ${cognome}`);
}
    const persona = {
    nome: 'mauro',
    cognome: 'bogliaccino',
    corsi: ['java','js','php']}

print(persona);

let moto = new Set();
moto. add ('Yamaha');
moto.add ('Honda');
moto. add ('BMW');
moto. add ('Yamaha');
moto. add( 'Suzuki');
moto. add( 'Ducati');
moto.add ('BMW');
console. log (moto);

const regioni = new Map();
regioni.set("piemonte", 'torino');
regioni.set("lombardia",'milano');
regioni.set ("lazio",'roma');

for (const [regione, citta] of regioni) {
    console. log(`La città capoluogo della regione ${regione} è ${citta}`)
}
//.map

let prodotti = [
    {prodotto: 'telefono apple', qty: 100},
    {prodotto: 'telefono samsung', qty: 50},
    {prodotto: 'telefono motorola', qty: 80},
    {prodotto: 'telefono huawey', qty: 70},
    ]
let telefoni = prodotti.map (p => p.prodotto)
console. log(telefoni);