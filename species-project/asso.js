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



fetcharticle("");
function fetcharticle(type) {
  const Cartes = fetch('http://localhost:1337/associations?Titre_contains='+type)
    .then(response => response.json())
    .then(data => {
      console.log(data); 
      if (data.length==0){
        pageasso.innerHTML = "<span class='messageerreur erreurasso mb-4'>Aucun article ne correspond à votre recherche</span>"
    }
    else    
      ///insert here data    
      pageasso.innerHTML = (
        data.map(data =>
          `
          <div class="col-md-4 mb-4 ">
          <div class="card profile-card-3  cartassopresentation ">
              <div class="background-block bckpageassocart"></div>
              <div class="profile-thumb-block">
                  <img src="http://localhost:1337${data.Logo.url}" alt="profile-image" class="profile imglogopageasso"/>
              </div>
              <div class="card-content ">
                  <h2>${data.Titre}<small><p>Email : ${data.ContactMail}</p>  <p>tel : ${data.Telephone}</p>  </small> </h2> 
                  <p class="presentation">${data.presentation} </p>
                  <button type="button" class="btn btn-dark btncartpageasso"><a href="${data.pageweb}" target="_blank">Aller sur le site</a></button>
                  </div>
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




// const results = document.getElementById('results');

// fetchasso();
// function fetchasso() {
  
//   const Associations = fetch('https://simplon-species-project.herokuapp.com/Associations')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       ///insert here data    
//       results.innerHTML = (
        
//         data.map(data =>
//           `
//             <div class="searchContainer">
//             <h2>${data.nom_association}</h2>
 