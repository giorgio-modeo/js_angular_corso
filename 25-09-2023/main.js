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
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.disegna = function () {
        console.log("x: ".concat(this.x, ", y: ").concat(this.y));
    };
    Punto.prototype.calcolaDistanza = function (altroPunto) {
        console.log("la distanza tra i due punti e: ".concat(Math.sqrt(Math.pow((this.x - altroPunto.x), 2) + Math.pow((this.y - altroPunto.y), 2)), " "));
    };
    return Punto;
}());
var a;
a = new Punto(1, 2);
a.disegna();
var b;
b = new Punto(2, 3);
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
