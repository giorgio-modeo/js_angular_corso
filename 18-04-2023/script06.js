let i = 0;
for (const studente of STUDENTI) {
    var nome = studente[1];
    var cognome = studente[2];
    if (studente[3] % 5 == 0){
        console.log('--------------------------------');
    }
    // oggetto
    const DIV = document.createElement('div');
    DIV.setAttribute('class', 'card')
    // oggetto ma brutto
    DIV.innerHTML = '<p>' +nome +' '+cognome + '</p>'; 

    document.body.append(DIV);

}