// 9914489d-b5db-4c45-b32f-278fe3a89f71
let word = "cat"
// document.getElementById("search-term").value
url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/`

//function that defines word as search term

fetch(url + `${word}?key=9914489d-b5db-4c45-b32f-278fe3a89f71`)
  .then(response => response.json())
  .then(data => console.log(data));

//fetch adds word to document under word-container

//changes

