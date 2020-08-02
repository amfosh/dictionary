// 9914489d-b5db-4c45-b32f-278fe3a89f71
const searchForm = document.querySelector('#search-form');
searchForm.addEventListener("submit", fetchWord);
const definition = document.getElementById('word-display');

function fetchWord(e) {
    e.preventDefault();
    const word = document.querySelector("#search-term").value;
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=9914489d-b5db-4c45-b32f-278fe3a89f71`)
      .then(response => response.json())
      .then(data => {
          console.log(data)
        let output = `<h2>${word}</h2>`;
        output += '<p>'
        output += `${data[0].fl}`
        output += '</p>'
        output += '<h3>definitions:</h3>'
        output += '<p>'
        output += `${data[0].shortdef[0]}`
        output += '<br>'
        output += data[0].shortdef[1] ? `${data[0].shortdef[1]}` : ``
        output += '<br>'
        output += data[0].shortdef[2] ? `${data[0].shortdef[2]}` : ``
        output += '</p>'
        document.getElementById("word-display").innerHTML = output;
    })}