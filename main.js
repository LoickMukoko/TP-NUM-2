let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes = [
  '"Les vainqueurs sont ceux qui n\'abandonnent jamais" - Loick. M',
  '"Combat les bons combats" - Jordan Massamba',
  '"Battre le fer quand il est chaud" - Daniel Mbamvua',
];
btn.addEventListener("click", function () {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  output.innerHTML = randomQuote;
});
