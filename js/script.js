/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'You must be the change you wish to see in the world.',
    source: 'Ghandi',
    citation: 'genesisca.org'
  },
  {
    quote: 'Lil Wayne raps good',
    source: 'Your Mom',
    citation: 'Facebook',
    year: 2008
  },
  {
    quote: 'Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.',
    source: 'Earl Nightingale',
    citation: 'medicalschoolhq ig'
  },
  {
    quote: 'The world is over',
    source: 'Daniel',
    citation: 'Twitter',
    year: 2013
  },
  {
    quote: 'Kick Rocks',
    source: 'Auntie Shannon',
    citation: 'Theresa',
    year: 2002
  }
];



/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    let randSelected = Math.floor(Math.random() * quotes.length)
    return quotes[randSelected];
    };

//You can uncomment this console log to verify above function is working correctly........       console.log(getRandomQuote());

/***
 * `printQuote` function
***/
function printQuote () {
  let outputRandomQuote = (getRandomQuote(quotes));//call "getRandomQuote" function
  
  let html = `<p class="quote"> ${outputRandomQuote.quote} </p>
  <p class="source"> ${outputRandomQuote.source}`; //html string to store variables
  
  if (outputRandomQuote["citation"]) {
    html += `<span class="citation"> ${outputRandomQuote.citation} </span>`;//html string to check for "citation"
  };
  
  if (outputRandomQuote["year"]) { 
    html += `<span class="year"> ${outputRandomQuote.year} </span>`;//html string to check for "year"
    } 
    `</p>`;
    document.getElementById("quote-box").innerHTML = html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);