// 9914489d-b5db-4c45-b32f-278fe3a89f71
const searchForm = document.querySelector('#search-form');
searchForm.addEventListener("submit", fetchWord);
const definition = document.getElementById('word-display');

// search.addEventListener('input', () => searchWords(search.value))
// const word = "cat" 
// document.getElementById("search-term").value

// let url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=9914489d-b5db-4c45-b32f-278fe3a89f71`

//function that defines word as search term

function fetchWord(e) {
    e.preventDefault();
    const word = document.querySelector("#search-term").value;
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=9914489d-b5db-4c45-b32f-278fe3a89f71`)
      .then(response => response.json())
        .then(json => console.log(json));
    // .then((response) => {return response.json(); })
    // .then((resp => {
    //     // Here we get the data array from the response object
    //     let dataArray = resp.data
    //     console.log(dataArray)
        // We pass the array to showGiphs function
        // showWord(dataArray);
    }
//     .catch(err => console.log(err)); // We use catch method for Error handling



// function showWord(dataArray) {
//   const results = document.getElementById('word-display');
//   let output = '<div class="container">';
//   document.querySelector('.results').innerHTML = output;
// }

