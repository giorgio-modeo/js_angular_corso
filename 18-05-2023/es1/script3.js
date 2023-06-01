const TITOLO = document.getElementById('titolo');
const btn = document.getElementById('btn');
const output = document.getElementById('output');
const nomeserie = document.getElementById('nome_serie');
const foto = document.getElementById('foto');

const URL = 'https://api.tvmaze.com/singlesearch/shows?q='

btn.onclick = function() {
    fetch(URL+TITOLO.value)
        .then(res=> res.json())
        .then(serie=> {
            console.log(serie);
            nomeserie.textContent =serie.name+' '+ serie.rating.average;
            
            foto.src = serie.image.medium
        })
}
