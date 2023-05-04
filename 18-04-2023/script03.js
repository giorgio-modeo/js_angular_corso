for(let i=0;i<10;i++) {
    console.log(i);
}

for(let i=9; i<0; i--) {
    console.log(i);
}

let gira = true;
while(gira) {
    console.log("mi giro");
    if(Math.random()>0.5) {
        break;
    }
}

do {
    console.log(`gira`);
} while (false);