const pagearticle = document.querySelector(".pagearticles");


fetcharticle("");
function fetcharticle(valeur) {
    const Cartes = fetch('http://localhost:1337/articles?titre_contains='+valeur)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.length==0){
                pagearticle.innerHTML = "<span class='messageerreur'>Aucun article ne correspond à votre recherche</span>"
            }
            else
            ///insert here data    
            pagearticle.innerHTML = (
                data.map(data =>
                    `
          <div class="card col-md-5 cartpagearticle  ">
          <div class=""><img src="http://localhost:1337${data.imagearticle.url}" class="card-img-top imgpagearticle img-fluid mt-3 " alt="animal"></div>
          <div class="card-body">
              <h3 class=" ">${data.titre}</h3>
              <i class="  font-italic">${data.resume}</i> <br><br>
              <p class=" contenucartarticle ">${data.contenu}</p>
              
          </div>
          <div class="card p-2 source">
            <p class="card-text">
            <small class="text-muted">Source : ${data.source}</small></p>
            <p class="card-text">
            <small class="text-muted">Date de publication : ${data.datepublication}</small></p></div>
      </div>
      </div>
          `
                )
            ).join('')
        }
        )
}

let barrederecherche = document.querySelector(".searcharticle");
barrederecherche.addEventListener('input', (e) =>{
    valeursaisierecherche = e.target.value;    
    fetcharticle(valeursaisierecherche);
});





