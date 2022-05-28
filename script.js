// Establish DOM elements
let APOD = document.getElementById('APOD')
let fetchedImageExplanation = document.getElementById('fetchedImageExplanation')
let fetchedImageAuthor = document.getElementById('fetchedImageAuthor')
let imageDate = document.getElementById('date')

// API Fetch
async function fetchAPIData() {
    let NASAAPIResults = fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    let NASAAPIResultsAsJSON = (await NASAAPIResults).json()
    return await NASAAPIResultsAsJSON
}

// Display API Data on page
async function displayAPIData() {
    let fetchedAPIDATA = await fetchAPIData()
    APOD.src = fetchedAPIDATA.url
    fetchedImageExplanation.innerHTML = fetchedAPIDATA.explanation
    fetchedImageAuthor.innerHTML = `Credit: ${fetchedAPIDATA.copyright}`
    imageDate.innerHTML = fetchedAPIDATA.date
}

displayAPIData()
