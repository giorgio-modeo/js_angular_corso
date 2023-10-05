const URL = 'http://localhost:8090/utente';
fetch(URL)//promise

    .then(    response => response.json()    )
    .then(response =>{
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
