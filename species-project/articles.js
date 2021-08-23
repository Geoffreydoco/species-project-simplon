const pagearticle = document.querySelector(".pagearticles");


fetcharticle();
function fetcharticle() {
    const Cartes = fetch('http://localhost:1337/articles ')
        .then(response => response.json())
        .then(data => {
            console.log(data);
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





