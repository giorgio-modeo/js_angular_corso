const titoli = [];

titoli.push('io, robot');

let altriLibri =['i malavoglia','i promessi sposi'];

let tutti = [...titoli, ...altriLibri];
console.log(tutti);

for (let index = 0; index < tutti.length; index++) {
    console.log(tutti[index]);
}

for (let titolo of titoli) {
    console.log(titolo);
}

tutti
    .filter(titolo => titolo.startsWith('i'))
    .forEach(titolo => console.log(titolo));



