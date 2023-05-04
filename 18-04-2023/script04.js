let user = "pippo";
let pass = "pass12345";
console.log('\n'+user.toLocaleUpperCase());
if (user =='pippo' && pass == 'pass12345')
    console.log('logged\n\n')


    const collezzione = ['mammolo'];

    collezzione.push('pisolo')
    collezzione.push('eolo')
    collezzione.push("gongolo")
    collezzione.push("brontolo")
    
    let lungezza =collezzione.length
    console.log(lungezza);

    for (const nano of collezzione) {
        console.log(nano);
    }
    const nanoRimosso = collezzione.pop();
    console.log(nanoRimosso);