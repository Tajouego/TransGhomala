
  var language1 = document.querySelector(".lang1");
  var language2 = document.querySelector(".lang2");
  var swapButton= document.querySelector(".swap-button");

swapButton.addEventListener('click', () => {
  const temp = language1.textContent;
  language1.textContent = language2.textContent;
  language2.textContent = temp;

});

  
// Replace 'YOUR_API_KEY' with your actual Google Cloud API key
const apiKey = 'YOUR_API_KEY';
const endpoint = 'https://translation.googleapis.com/language/translate/v2';



