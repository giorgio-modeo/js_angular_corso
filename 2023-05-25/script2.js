const URL = 'https://jsonplaceholder.typicode.com/posts';

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
console.log(xhr.readyState);
if (xhr.readyState == 4 && xhr.status == 200){
    const OBJECT = JSON.parse(xhr.responseText);
    for (const post of OBJECT){
        const TITLE =document.createElement('h2');
        TITLE.textContent = post.title;
        document.body.append(TITLE);
        );
    }
}
}
xhr.open('GET',URL);
xhr.send();