/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array with different quote objects
***/
const quotes = [
  {
    quote:'In recognizing the humanity of our fellow beings, we pay ourselves the highest tribute.', 
    source: 'Thurgood Marshall',
    citation: 'countryliving.com',
    year: 1992,
    tags: 'speech, civil rights'
  },
  {
    quote:'Hate is too great a burden to bear. It injures the hater more than it injures the hated.', 
    source: 'Coretta Scott King',
    citation: 'countryliving.com',
    tags: 'civil rights'
  },
  {
    quote:'My humanity is bound up in yours, for we can only be human together.', 
    source: 'Desmond Tutu',
    citation: 'countryliving.com',
    tags: 'equality, civil rights'
  },
  {
    quote:'Defining myself, as opposed to being defined by others, is one of the most difficult challenges I face.', 
    source: 'Carol Moseley-Braun',
    citation: 'countryliving.com',
    tags: 'self-esteem'
  },
  {
    quote:'Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome while trying to succeed.', 
    source: 'Booker T. Washington',
    citation: 'countryliving.com',
    tags: 'self-esteem'
  }
];


/***
 * `getRandomQuote` function that returns a random number that represents the index positions for
 * quotes array
***/
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * (quotes.length));
  return quotes[randomNumber];
}

/***
 * `getrandomColor` function returns a number between 0 and 255 to represent the r,b, or g
***/
function getrandomColor() {
  return Math.floor(Math.random() * 256);
}

/***
 * `getBackgroundColor` function returns the rgb color
***/
function getBackgroundColor() {
  return `rgb(${getrandomColor()}, ${getrandomColor()}, ${getrandomColor()})`;
}

/***
 * `timerToChangeQuote` function sets timer to refresh quotes at 10 seconds
***/
function timerToChangeQuote() {
  setInterval(printQuote, 10000);
}
timerToChangeQuote();

/***
 * `printQuote` function gets a random quotes and puts it together for html display
***/
function printQuote() {
  const quoteObj = getRandomQuote();
  let html = 
    `<p class="quote"> ${quoteObj.quote} </p>
    <p class="source">${quoteObj.source}
    `;
    
    //check if citation and/or year are provided
    if(quoteObj.citation) {
      html += `<span class="citation"> ${quoteObj.citation} </span>`;
    }
    if(quoteObj.year) {
      html += `<span class="year"> ${quoteObj.year} </span>`;
    }
    if(quoteObj.tags) {
      html += `<p><span class="tags">Tags: ${quoteObj.tags} </span></p>`;
    }

    //combine the html
    html += '</p>';
    document.getElementById('quote-box').innerHTML = html; 
    document.querySelector('body').style.backgroundColor = getBackgroundColor();
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
