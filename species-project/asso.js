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
  const Cartes = fetch('http://localhost:1337/associations')
    .then(response => response.json())
    .then(data => {
      console.log(data);     
      ///insert here data    
      pageasso.innerHTML = (
        data.map(data =>
          `
          <div class="col-12 col-md-6 cart1">
           <div class="h-100 p-5 text-white bg-dark rounded-3">           
           <img src="http://localhost:1337${data.Logo.url}" class="logoasso" </p>
            <h2>${data.Titre}</h2>
            <p>Email : ${data.ContactMail}</p>
            <p>tel : ${data.Telephone}</p>
            <p>${data.presentation} </p>
             
          </div> 
          </div>`
         
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
 