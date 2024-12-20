const destinationBtn = document.getElementById("btnSearch");
const clearBtn = document.getElementById("btnClear");
const resultDiv = document.getElementById('result');

function searchDestination(){
    const searchInput = document.getElementById("destinationInput").value.toLowerCase();

    resultDiv.innerHTML = '';
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(
        data => {
            const foundCountries = data.countries.filter(country => country.name.toLowerCase().includes(searchInput));
            if (foundCountries) {
                foundCountries.forEach (country => {
                    const cities = country.cities;
                    cities.forEach(city => {
                        resultDiv.innerHTML += `<h2>City name ${city.name}</h2>`;
                        resultDiv.innerHTML += `<img src="${city.imageUrl}" alt="hjh">`;
                        resultDiv.innerHTML += `<p><strong>Description:</strong> ${city.description}</p>`;

                        addButtonToResultDiv();
                    });
                })   
              } 

              const foundTemples = data.temples.filter(temple => temple.name.toLowerCase().includes(searchInput));
              if (foundTemples) {
                    foundTemples.forEach(temple => {
                    resultDiv.innerHTML += `<h2>Temple name ${temple.name}</h2>`;
                    resultDiv.innerHTML += `<img src="${temple.imageUrl}" alt="hjh">`;
                    resultDiv.innerHTML += `<p><strong>Description:</strong> ${temple.description}</p>`;

                    addButtonToResultDiv();
                })   
              } 
              
              const foundBeaches = data.beaches.filter(beach => beach.name.toLowerCase().includes(searchInput));
              if (foundBeaches) {
                foundBeaches.forEach(beach => {
                    resultDiv.innerHTML += `<h2>Beach name ${beach.name}</h2>`;
                    resultDiv.innerHTML += `<img src="${beach.imageUrl}" alt="hjh">`;
                    resultDiv.innerHTML += `<p><strong>Description:</strong> ${beach.description}</p>`;

                    addButtonToResultDiv();
                })   
              } 
              console.log(foundBeaches);
              console.log(foundCountries);
              console.log(foundTemples);
              if( foundBeaches.length === 0 && foundCountries.length === 0 && foundTemples.length === 0) {
                resultDiv.innerHTML = 'Content is not found.';
              }
        }
    ).catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });

    clearDestination();
}

function addButtonToResultDiv(){
    const button = document.createElement('button');
    button.textContent = 'BOOK NOW';
    button.className = 'DYNAMIC BUTTON';
    // Set a data attribute for identifying the item 
    resultDiv.appendChild(button);
}

function handleBookButtonClick(event) { 
    alert("You have booked the tour");
}

function clearDestination(){
    document.getElementById("destinationInput").value = "";
}

function clearReport(){
    document.getElementById('result').innerHTML='';
}

destinationBtn.addEventListener('click', searchDestination);
clearBtn.addEventListener('click', clearReport);
resultDiv.addEventListener('click', (event) => {
    if (event.target.className === 'DYNAMIC BUTTON'){
        handleBookButtonClick(event);
    }
})
