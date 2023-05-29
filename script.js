const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQuotes = document.getElementById("newQuotes");
const tweet = document.getElementById("tweet");

let realdata = "";
let quotedata = "";

const tweetnow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotedata.text}`
    window.open(tweetPost)
};

const getNewQuotes = () => {
  let random = Math.floor(Math.random() * 20);
  quotedata = realdata[random];
  //   console.log(realdata[random].text)
  //   console.log(realdata[random].author);
  quotes.innerText = `${quotedata.text}`;
  quotedata.author == null
    ? (author.innerText = "unknown")
    : (author.innerText = `${quotedata.author}`);
};

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realdata = await data.json();
    getNewQuotes();
    // console.log(realdata)
  } catch (error) {}
};

tweet.addEventListener("click", tweetnow);
newQuotes.addEventListener("click", getNewQuotes);

getQuotes();
