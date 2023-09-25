/**
let n
um: number;
let b: boolean;
let c: string;
let d: any;


let voti: number[]=[1,2,3];
let generic: any[]= ['pippo',30,true];

enum Color{ROSSO = 0,GREEN = 2 ,BLUE = 3};
console.log(Color.ROSSO);
*/

class Punto {

    constructor(public x?:number, public y?:number) {}

    disegna(){
    console.log(`x: ${this.x}, y: ${this.y}`);
    }
    calcolaDistanza(altroPunto: Punto){
        console.log(`la distanza tra i due punti e: ${Math.sqrt((this.x - altroPunto.x)**2+(this.y - altroPunto.y)**2)} `);
    }
}

let a : Punto;
a = new Punto(1,2);
a.disegna();
let b : Punto;
b = new Punto(2,3);
b.disegna();
a.calcolaDistanza(b);
/**
  let disegnaPunto = (punto: Punto) => {
    console.log(`x: ${punto.x}, y: ${punto.y}`);
}

let calcolaDistanza = (puntoA: Punto, puntoB: Punto) => {
    console.log('.......')    
    }
disegnaPunto({
    x:1,
    y: 2
});

    */