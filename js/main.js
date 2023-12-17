var lastCount;
var names = ["-Oscar Wilde-", "-Albert Einstein-", "-Frank Zappa-", "-Marcus Cicero-"];
var quotes = [
  "“Be yourself; everyone else is already taken.”",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  "“So many books, so little time.”",
  "“A room without books is like a body without a soul.”",
];
function randomQuote() {
  var count = getRandomNumber()
  var quote = quotes[count];
  var nameQuote = names[count];
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("name").innerHTML = nameQuote;
  lastCount = count;
}

function getRandomNumber() {
  var count;
  do {
    count = Math.floor(Math.random() * quotes.length);
  } while (count == lastCount);

  lastCount = count;
  return count;
}
