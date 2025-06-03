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
/**Get user quotes from local storage */
var userQuotes = JSON.parse(localStorage.getItem('quotes'))
/**Check if there are user quotes and add them to original array  */
if (userQuotes) {
    quotesArray = quotesArray.concat(userQuotes)
}

/**Declare quote and author variables */
var quoteContainer = document.getElementById('quote')
var authorContainer = document.getElementById('author')
/**Declare user quote and author variables */
var newQuote = document.getElementById('newQuote')
var newAuthor = document.getElementById('newAuthor')

/**Setting the noRepeat value on load */
var noRepeat = -1
generateQuote()

/**Generates and displays a quote without repeating the number */
function generateQuote(){
/**Clear add and clear messages */
    document.getElementById('clearConfirm').innerHTML = ''
    document.getElementById('addConfirm').innerHTML = ''


    var indexNum
/**Generate a random number (indexNum) between 0 and the quotes array length and repeat if it matches the last number generated stored in the (noRepeat) variable */
    do {
        indexNum = Math.floor(Math.random() * quotesArray.length);
    } while ( indexNum === noRepeat)
        noRepeat = indexNum
/**Push the chosen quote and author to the HTML */
    var quoteContainer = `
    ${quotesArray[indexNum].quote}
    `
    document.getElementById('quote').innerHTML =quoteContainer

    var authorContainer = `
    ${quotesArray[indexNum].author}
    `
    document.getElementById('author').innerHTML ='--'+authorContainer


}

/**Takes user input as a quote and stores it in the array */
function addQuote(){
/**Clear add and clear messages */
document.getElementById('clearConfirm').innerHTML = ''
document.getElementById('addConfirm').innerHTML = ''
var quoteAuthorObj={
        quote: newQuote.value,
        author: newAuthor.value
    }

    quotesArray.push(quoteAuthorObj)

    var userQuotes = JSON.parse(localStorage.getItem('quotes')) || []

    userQuotes.push(quoteAuthorObj)

    localStorage.setItem('quotes',JSON.stringify(userQuotes))

    document.getElementById('addConfirm').innerHTML = 
    `
    <p class="m-auto shadow rounded card bg-success-subtle p-3 mt-2">
    Your quote has been added!
    </p>
    `
    newQuote.value = ''
    newAuthor.value = ''

    displayAddedQuote()
}

function displayAddedQuote(){
    lastQuoteAdded = quotesArray.length - 1

    var quoteContainer = `
    ${quotesArray[lastQuoteAdded].quote}
    `
    document.getElementById('quote').innerHTML =quoteContainer

    var authorContainer = `
    ${quotesArray[lastQuoteAdded].author}
    `
    document.getElementById('author').innerHTML =authorContainer
}

function clearConfirm(){
    /**Clear add and clear messages */
    document.getElementById('clearConfirm').innerHTML = ''
    document.getElementById('addConfirm').innerHTML = ''

    document.getElementById('confirmClear').innerHTML = `<button class="bg-danger text-light fw-bold my-2" type="button" id="confirmClear" onclick="clearQuotes()">This can't be undone. Click again if you are sure.</button>`
}


function clearQuotes(){
/**Clear add and clear messages */
document.getElementById('clearConfirm').innerHTML = ''
document.getElementById('addConfirm').innerHTML = ''


    localStorage.removeItem('quotes')
    document.getElementById('clearConfirm').innerHTML = 
    `
    <p class="m-auto shadow rounded card bg-danger-subtle p-3 mt-2">
    All saved quotes have been cleared.
    </p>
    `
    document.getElementById('confirmClear').innerHTML = `
    <button
    class="bg-danger-subtle my-2"
    type="button"
    id="confirmClear"
    onclick="clearConfirm()"
  >
    Clear all added quotes!
  </button>`

}
