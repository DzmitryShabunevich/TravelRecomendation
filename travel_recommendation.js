const destinationBtn = document.getElementById("btnSearch");
const clearBtn = document.getElementById("btnClear");



function searchDestination(){
    const searchInput = document.getElementById("destinationInput").ariaValueMax.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(
        data => {
            const destination = data.countries
        }
    ).catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });

    clearDestination();
}

function clearDestination(){
    searchInput = "";
}

destinationBtn.addEventListener('click',searchDestination);
clearBtn.addEventListener('click', clearDestination);