let a =5;
let b = 7;

if (a>b){
    console.log("A > b");
    
}else if (a==b){
    console.log("A = b");
    
}else{
    console.log("A < b");

}


switch(a){
    case 7: console.log("A=7");break;
    default: console.log("non 7");break;
}

let resoult = (a>7) ? 'ciao':'hola';
console.log(resoult);