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
      .then(data => {
        let output = `<h2>${word}</h2>`;
        output += '<p>'
        output += `${data[0].hwi.hw} ${data[0].date} ${data[0].fl} ${data[0].shortdef}`
        output += '</p>'
        document.getElementById("word-display").innerHTML = output;
    })}