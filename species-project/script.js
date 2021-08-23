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
  const Cartes = fetch('http://localhost:1337/articles?id_eq=7&id_eq=5&id_eq=3')
    .then(response => response.json())
    .then(data => {
      console.log(data);     
      ///insert here data    
      pageasso.innerHTML = (
        data.map(data =>
          `
          <div class="col-4 cart1 " >
           <div class="h-100 p-5 text-white bg-dark rounded-3 ">           
           <img src="http://localhost:1337${data.imagearticle.url}" class="logoasso" </p>
            <h2>${data.titre}</h2>
            <p>${data.resume} </p>
             
          </div> 
          </div>`
         
        )
      ).join('')

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
 
