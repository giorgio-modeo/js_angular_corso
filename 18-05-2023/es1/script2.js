// const auto = {
//     marca: 'fiat',
//     modello: 'punto',

//     stampa: function() { return this.cilindrata + ' '+this.marca+' '+this.modello; }
// }
// //auto.cilindrata = 1100

// console.info(auto.stampa());

// function Auto(_marca,_modello){
//     return{

//         marca: 'fiat',
//         modello: 'punto',
        
//         stampa: function() { return this.cilindrata + ' '+this.marca+' '+this.modello; }
//     }
// }
// function Auto(marca,modello){
//     this.marca = marca;
//     this.modello = modello;
//     this.stampa = function(){
//         return `marca: ${this.marca} modello: ${this.modello}`
//     }
// }

class Auto{
    constructor(marca,modello){
        this.marca = marca;
        this.modello = modello;

    }
}

const a =+++++++++++++++ new Auto ('fiat', 'punto')
const b = new Auto ('mercedess', 'classe b')
console.info(b.stampa());