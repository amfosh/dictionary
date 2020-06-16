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
          console.log(data)
        let output = `<h2>${word}</h2>`;
        output += '<p>'
        output += `${data[0].hwi.prs[0].mw}`
        output += '</p>'
        output += '<p>'
        output += `${data[0].fl}`
        output += '</p>'
        output += '<h3>definitions:</h3>'
        output += '<ol>'
        output += `${data[0].shortdef[0]}`
        output += '</ol>'
        output += '<ol>'
        output += data[0].shortdef[1] ? `${data[0].shortdef[1]}` : ``
        output += '</ol>'
        output += '<ol>'
        output += data[0].shortdef[2] ? `${data[0].shortdef[2]}` : ``
        output += '</ol>'
        document.getElementById("word-display").innerHTML = output;
    })}