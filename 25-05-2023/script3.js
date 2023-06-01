const URL = 'https://jsonplaceholder.typicode.com/posts';
fetch(URL)//promise

    .then(    response => response.json()    )
    .then(response =>{
        /*
        for (let index = 0; index < response.length; index++) {
            const element = response[index];
            console.log(element.title);
        }

        response.forEach(post => {
            console.log(post.title);
        });
        */
       const UL = document.createElement('ul');
        for (const post of response) {
            const LI = document.createElement('li');
            const ANCOR = document.createElement('a');

            ANCOR.setAttribute('href','#');
            
            LI.onclick= function() {
                fetch(URL+'/'+post_id)
                .then(res => res.json())
                .then(single => {
                    console.log(single);
                });
            };
            
            ANCOR.textContent = post.title;
            LI.append(ANCOR);
            UL.append(LI);
            
        };
        document.body.append(UL);
    });
