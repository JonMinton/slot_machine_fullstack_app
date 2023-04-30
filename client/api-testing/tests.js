const emojiURL = 'https://emoji-api.com/emojis?access_key=5016d83d04f72724758ae08a4456fa3294998ce1'
const count = 25 // Count indicates how many cards can be displayed
const cardURL = `https://deckofcardsapi.com/api/deck/new/draw/?count=${count}`
const flagURL = `https://restcountries.com/v3.1/all?fields=name,flags`

const emojiAPI = () => {
  fetch(emojiURL)
  .then(res => res.json())
  .then(data => console.log(data))
}

const cardAPI = () => {
  fetch(cardURL)
  .then(res => res.json())
  .then(data => console.log(data))
}

const flagAPI = () => {
  fetch(flagURL)
  .then(res => res.json())
  .then(data => console.log(data))
}

// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer 6fOT4pecrk5OgLT1BqRxPfLk5R9XsezXlGScvk4TtI0='
//     }
//   };
  
// fetch('https://api.brandfetch.io/v2/brands/brandfetch.com', options)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));

// emojiAPI() // Returns array of objects, map and call data.character to get image
// cardAPI() // Returns array of objects, map and call data.image to get image
// flagAPI() // Returns array of objects, map and call data.png or svg to get image