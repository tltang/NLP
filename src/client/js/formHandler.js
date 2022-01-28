import {checkForURL} from "./nameChecker";

export function onFocus() {
    document.getElementById('name').style.backgroundColor = "yellow";
}

export function onBlur() {
    document.getElementById('name').style.backgroundColor = "";
}

export function handleSubmit(event) {
    event.preventDefault()

    let baseURL = "https://api.meaningcloud.com/lang-4.0/identification";

    // console.log("i am in submit");
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const isValid = Client.checkForInput(formText);

    const formdata = new FormData();
    //console.log(`Your API key is ${API_KEY1}`);
    formdata.append("key", API_KEY1);
    formdata.append("txt", formText);

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    // console.log(requestOptions);
    // console.log("::: Form Submitted :::")

    if (isValid) {
        Client.createLanguageTable();
        Client.fetchLanguage(baseURL, requestOptions);
    } else {
        alert('Please enter a phrase first!');
    }
}

export function handleSubmit2(event) {
    event.preventDefault()

    let baseURL = "https://api.meaningcloud.com/deepcategorization-1.0";

    // check what text was put into the form field
    let formText  = document.getElementById('name').value
    let modelText = document.getElementById('models').value

    const isValid = Client.checkForURL(formText);
    // console.log(formText);
    // console.log(modelText);
    // console.log(API_KEY1);
    const formdata = new FormData();
    formdata.append("key", API_KEY1);
    formdata.append("url", formText);
    formdata.append("model", modelText);  // like IAB_2.0_en

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    // console.log(requestOptions);
    // console.log("::: Form Submitted :::")

    if (isValid) {
        Client.createCategoryTable();
        Client.fetchCategory(baseURL, requestOptions);
    } else {
        alert('Please enter a URL first!');
    }
}

export function createLanguageTable()  {
    const scoreDiv = document.querySelector("div.scoreboard") // Find the scoreboard div in our html
    let tableHeaders = ["Language#", "Language", "Relevance"]

    while (scoreDiv.firstChild) scoreDiv.removeChild(scoreDiv.firstChild) // Remove all children from scoreboard div (if any)

    let scoreboardTable = document.createElement('table') // Create the table itself
    scoreboardTable.className = 'scoreboardTable'
    let scoreboardTableHead = document.createElement('thead') // Creates the table header group element
    scoreboardTableHead.className = 'scoreboardTableHead'
    let scoreboardTableHeaderRow = document.createElement('tr') // Creates the row that will contain the headers
    scoreboardTableHeaderRow.className = 'scoreboardTableHeaderRow'
// Will iterate over all the strings in the tableHeader array and will append the header cells to the table header row
    tableHeaders.forEach(header => {
        let scoreHeader = document.createElement('th') // Creates the current header cell during a specific iteration
        scoreHeader.innerText = header
        scoreboardTableHeaderRow.append(scoreHeader) // Appends the current header cell to the header row
    })
    scoreboardTableHead.append(scoreboardTableHeaderRow) // Appends the header row to the table header group element
    scoreboardTable.append(scoreboardTableHead)
    let scoreboardTableBody = document.createElement('tbody') // Creates the table body group element
    scoreboardTableBody.className = "scoreboardTable-Body"
    scoreboardTable.append(scoreboardTableBody) // Appends the table body group element to the table
    scoreDiv.append(scoreboardTable) // Appends the table to the scoreboard div
}

// The function below will accept a single score and its index to create the global ranking
export function appendLanguage(langNo, language1, relev1) {
    const scoreboardTable = document.querySelector('.scoreboardTable') // Find the table we created
    let scoreboardTableBodyRow = document.createElement('tr') // Create the current table row
    scoreboardTableBodyRow.className = 'scoreboardTableBodyRow'
    let langNoData = document.createElement('td')
    langNoData.innerText = langNo
    let langData = document.createElement('td')
    langData.innerText = language1
    let relevData = document.createElement('td')
    relevData.innerText = relev1
    scoreboardTableBodyRow.append(langNoData, langData, relevData) // Append all 5 cells to the table row
    scoreboardTable.append(scoreboardTableBodyRow) // Append the current row to the scoreboard table body
}

export function createCategoryTable()  {
    const scoreDiv = document.querySelector("div.scoreboard") // Find the scoreboard div in our html
    let tableHeaders = ["Category#", "Code", "Label", "Relevance"]

    while (scoreDiv.firstChild) scoreDiv.removeChild(scoreDiv.firstChild) // Remove all children from scoreboard div (if any)
    let scoreboardTable = document.createElement('table') // Create the table itself
    scoreboardTable.className = 'scoreboardTable'
    let scoreboardTableHead = document.createElement('thead') // Creates the table header group element
    scoreboardTableHead.className = 'scoreboardTableHead'
    let scoreboardTableHeaderRow = document.createElement('tr') // Creates the row that will contain the headers
    scoreboardTableHeaderRow.className = 'scoreboardTableHeaderRow'
// Will iterate over all the strings in the tableHeader array and will append the header cells to the table header row
    tableHeaders.forEach(header => {
        let scoreHeader = document.createElement('th') // Creates the current header cell during a specific iteration
        scoreHeader.innerText = header
        scoreboardTableHeaderRow.append(scoreHeader) // Appends the current header cell to the header row
    })
    scoreboardTableHead.append(scoreboardTableHeaderRow) // Appends the header row to the table header group element
    scoreboardTable.append(scoreboardTableHead)
    let scoreboardTableBody = document.createElement('tbody') // Creates the table body group element
    scoreboardTableBody.className = "scoreboardTable-Body"
    scoreboardTable.append(scoreboardTableBody) // Appends the table body group element to the table
    scoreDiv.append(scoreboardTable) // Appends the table to the scoreboard div
}

// The function below will accept a single score and its index to create the global ranking
export function appendCategory(CategoryNo, code1, name1, relev1) {
    const scoreboardTable = document.querySelector('.scoreboardTable') // Find the table we created
    let scoreboardTableBodyRow = document.createElement('tr') // Create the current table row
    scoreboardTableBodyRow.className = 'scoreboardTableBodyRow'
    let categoryNoData = document.createElement('td')
    categoryNoData.innerText = CategoryNo
    let codeData = document.createElement('td')
    codeData.innerText = code1
    let nameData = document.createElement('td')
    nameData.innerText = name1
    let relevData = document.createElement('td')
    relevData.innerText = relev1
    scoreboardTableBodyRow.append(categoryNoData, codeData, nameData, relevData) // Append all 4 cells to the table row
    scoreboardTable.append(scoreboardTableBodyRow)
}