function getNumberFact() {
    fetch('http://numbersapi.com/random/trivia')
    .then(response => response.text())
    .then(fact => {
        document.getElementById('factDisplay').textContent = fact;
    })
    .catch(error => {
        document.getElementById('factDisplay').textContent = "Error fetching fact.";
    });
}

function getCatFact() {
    fetch('https://catfact.ninja/fact')
    .then(response => response.json())  
    .then(data => {
        document.getElementById('catFactDisplay').textContent = data.fact; 
    })
    .catch(error => {
        document.getElementById('catFactDisplay').textContent = "Error fetching cat fact.";
        console.error("Cat Fact Error:", error);
    });
}


function dogPicture() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())  
    .then(data => {
        document.getElementById('dogPicDisplay').innerHTML = `<img src="${data.message}" alt="Random Dog" width="300">`;
    })
    .catch(error => {
        document.getElementById('dogPicDisplay').textContent = "Error fetching dog picture.";
        console.error("Dog Picture Error:", error);
    });
}



