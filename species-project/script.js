// Importations 3 cartes d'asoos au hasard 
const pageasso = document.querySelector(".pagecartes");
async function nombredasso() {
  var nmbrasso = fetch('http://localhost:1337/associations/count')
    .then(response => response.json())
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

        window.location.href = "http://127.0.0.1:5500/species-project/article.html?" + articlerecherche;

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
              <div class="card-heading"> ${data.Titre}
              </div>                       
          </div>
          <a href="http://127.0.0.1:5500/species-project/lesAssos.html"> <button class="card-button boutonasso"> En savoir plus ...</button></a>
      </div>          
          `
        )
      ).join('');


    }
    )
}

let imgcarousel1 =document.querySelector(".imgcarosel1");
let imgcarousel2 =document.querySelector(".imgcarosel2");
let imgcarousel3 =document.querySelector(".imgcarosel3");
fetchcaroussel();
function fetchcaroussel() {
  const association = fetch('http://localhost:1337/carousels/')
    .then(response => response.json())
    .then(data => {
      
      let lien1 =data[0].imgCarousel[0].url;
      imgcarousel1.src ="http://localhost:1337"+lien1;
      let lien2 =data[1].imgCarousel[0].url;
      imgcarousel2.src ="http://localhost:1337"+lien2;
      let lien3 =data[2].imgCarousel[0].url;
      imgcarousel3.src ="http://localhost:1337"+lien3;
          
    
    }
     ) }