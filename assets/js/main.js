/**Declare Quotes array */
var quotesArray = [{
    quote: `"Be yourself; everyone else is already taken."`,
    author: `Oscar Wilde`
},
{
    quote: `
    "So many books, so little time."`,
    author: `Frank Zappa`
},
{
    quote: `"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    `,
    author: `Marilyn Monroe`
},
{
    quote: `"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."`,
    author: `Bernard M. Baruch`
},
{
    quote: `
    "Be the change that you wish to see in the world."`,
    author: `Mahatma Gandhi`
},
{
    quote: `"In three words I can sum up everything I've learned about life: it goes on."`,
    author: `Robert Frost`
},
{
    quote: `"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."`,
    author: `J.K. Rowling`
},
{
    quote: `"If you tell the truth, you don't have to remember anything."`,
    author: `Mark Twain`
},
{
    quote: `"A friend is someone who knows all about you and still loves you."`,
    author: `Elbert Hubbard`
},
{
    quote: `"Always forgive your enemies; nothing annoys them so much."`,
    author: `Oscar Wilde`
}]

/**Declare quote and author variables */
var quoteContainer = document.getElementById('quote')
var authorContainer = document.getElementById('author')
var noRepeat = -1
generateQuote()
function generateQuote(){
    var indexNum

    do {
        indexNum = Math.floor(Math.random() * quotesArray.length);
    } while ( indexNum === noRepeat)
        noRepeat = indexNum
    
    var quoteContainer = `
    ${quotesArray[indexNum].quote}
    `
    document.getElementById('quote').innerHTML =quoteContainer

    var authorContainer = `
    ${quotesArray[indexNum].author}
    `
    document.getElementById('author').innerHTML =authorContainer


}



