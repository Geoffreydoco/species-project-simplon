const results = document.getElementById('results');


fetchasso();
function fetchasso() {
  const Associations = fetch('https://simplon-species-project.herokuapp.com/Associations')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      ///insert here data    
      results.innerHTML = (
        data.map(data =>
          `
            <div class="searchContainer">
            <h2>${data.nom_association}</h2>
            <div class="infos">
            <div>Contact mail : ${data.ContactMail}</div>
              <div>Téléphone : ${data.Telephone}</div>
              <div>Url : https://simplon-species-project.herokuapp.com${data.Logo.url}</div>
              </div>
              <img src='https://simplon-species-project.herokuapp.com${data.Logo.url}' style="height:100px"/></br>
              
              </i></a>
              </div>
            `
        )
      ).join('')

    }
    )
  ////end data
}

