// Importations 3 cartes d'asoos au hasard 
const pageasso = document.querySelector(".pagecartes");
async function nombredasso (){
var nmbrasso = fetch('http://localhost:1337/associations/count')
.then(response =>response.json())
.then(data => {
  console.log(data)
  
})
}
var nombre = nombredasso();
console.log(nombre)

fetcharticle();
function fetcharticle() {
  const Cartes = fetch('http://localhost:1337/articles?id=1&id=4&id=6')
    .then(response => response.json())
    .then(data => {
      console.log(data);     
      ///insert here data    
      pageasso.innerHTML = (
        data.map(data =>
          `
          <div class="col-md-6 col-xl-4 mb-3">
          <div class="card text-white card-has-bg click-col cardaccueil"
            style="background-image:url('http://localhost:1337${data.imagearticle.url}');">
       
            <div class="card-img-overlay d-flex flex-column">
              <div class="card-body">
                <h4 class="card-title mt-0  "><p class="text-white titreart" herf="#">${data.titre}</p></h4>
                <div class="presentation " >${data.resume}</div>
              </div>
              <div class="">
                <div class="media">
                  <div class="media-body">
                    
                    <small>${data.datepublication}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
         
        )
      ).join('')
      
let blockasso = document.querySelector(".pagecartes");
let titrearticle = document.querySelector(".titreart");
blockasso.addEventListener('click', (event) => {
 let articlerecherche = titrearticle.innerHTML;
  console.log(articlerecherche);
  window.location.href= "http://127.0.0.1:5500/species-project/article.html/'"+articlerecherche+'"';

})
    }
    )
}

const assoacceuil = document.querySelector(".pageacceuil");

fetchasso();
function fetchasso() {
  const association = fetch('http://localhost:1337/associations?id_eq=7&id_eq=5&id_eq=3')
    .then(response => response.json())
    .then(data => {
      console.log(data);     
      ///insert here data    
      assoacceuil.innerHTML = (
        data.map(data =>
          `
          <div class="cardcontainer col-md-4">
          <section class="card">        
         <div class="losange">
            <img src="http://localhost:1337${data.Logo.url}" alt="" class="panda">
            <ul class="listt">
                <p>${data.pageweb}</p>
                <p>${data.Telephone}</p>
                <p>${data.ContactMail}</p>
            </ul>          
        </div>        
        <p class="titre">${data.Titre} </p>         
    </section>
</div>
          
          `
         
        )
      ).join('')

    }
    )
}




const carteassoacceuil = document.querySelector(".carte4assoauharsardaccueil");

fetchasso();
function fetchasso() {
  const association = fetch('http://localhost:1337/associations?id_eq=7&id_eq=5&id_eq=3&id_eq=9')
    .then(response => response.json())
    .then(data => {
      console.log(data);     
      ///insert here data    
      carteassoacceuil.innerHTML = (
        data.map(data =>
          ` 
          <div class="col-md-6 col-xl-3 mb-3 ">
          <div class="card-sl containeraccueilass">
              <div class="card-image">
                  <img
                      src="http://localhost:1337${data.Logo.url}" class="imgassoaccueil"/>
              </div>

             
              <div class="card-heading">
              ${data.Titre}
              </div>         
              
          </div>
          <a href="#" class="card-button boutonasso"> En savoir plus ...</a>
      </div>
          
          `
         
        )
      ).join('')

    }
    )
}