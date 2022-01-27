import {updateUI} from "./formPost";
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

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const isValid = Client.checkForInput(formText);

    const formdata = new FormData();
    // formdata.append("key", process.env.API_KEY);
    //console.log(`Your API key is ${API_KEY1}`);
    formdata.append("key", API_KEY1);
    formdata.append("txt", formText);

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    console.log(requestOptions);
    console.log("::: Form Submitted :::")

    if (isValid) {
        fetch(baseURL, requestOptions)
            .then(res => res.json())
            .then(function (res) {
                const newdatas = res.language_list;
                let i1 = 0;
                newdatas.forEach((newdata) => {
                    let lang    = newdata.name;
                    let relev   = newdata.relevance;
                    i1++;

                    Client.postData('/addHistory', {
                        langno: i1,
                        language: lang,
                        relevance: relev
                    })
                    // Object.entries(newdata).forEach(([key, value]) => {
                    //     console.log(`${key}: ${value}`);
                    // });
                });
                Client.updateUI()
            })
            .catch(error => console.log('error', error));
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
    console.log(formText);
    console.log(modelText);
    console.log(API_KEY1);
    const formdata = new FormData();
    // formdata.append("key", process.env.API_KEY);
    //console.log(`Your API key is ${API_KEY1}`);
    formdata.append("key", API_KEY1);
    formdata.append("url", formText);
    formdata.append("model", modelText);  // like IAB_2.0_en

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    console.log(requestOptions);
    console.log("::: Form Submitted :::")

    if (isValid) {
        fetch(baseURL, requestOptions)
            .then(res => res.json())
            .then(function (res) {
                console.log(res);
                const newdatas = res.category_list;
                let i1 = 0;
                newdatas.forEach((newdata) => {
                    let code    = newdata.code;
                    let name    = newdata.label;
                    let relev   = newdata.relevance;
                    i1++;

                    Client.postData('/addHistory', {
                        categoryno: i1,
                        code: code,
                        label: name,
                        relevance: relev
                    })
                    // Object.entries(newdata).forEach(([key, value]) => {
                    //     console.log(`${key}: ${value}`);
                    // });
                });
                Client.updateUI2()
                Client.createScoreboardTable()
            })
            .catch(error => console.log('error', error));
    } else {
        alert('Please enter a URL first!');
    }
}

export function createScoreboardTable()  {
    const scoreDiv = document.querySelector("div.scoreboard") // Find the scoreboard div in our html
    let tableHeaders = ["Global Ranking", "Username", "Score", "Time Alive [seconds]", "Accuracy [%]"]

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
export function appendScores(singleScore, singleScoreIndex) {
    const scoreboardTable = document.querySelector('.scoreboardTable') // Find the table we created
    let scoreboardTableBodyRow = document.createElement('tr') // Create the current table row
    scoreboardTableBodyRow.className = 'scoreboardTableBodyRow'
// Lines 72-85 create the 5 column cells that will be appended to the current table row
    let scoreRanking = document.createElement('td')
    scoreRanking.innerText = singleScoreIndex
    let usernameData = document.createElement('td')
    usernameData.innerText = singleScore.user.username
    let scoreData = document.createElement('td')
    scoreData.innerText = singleScore.score
    let timeData = document.createElement('td')
    timeData.innerText = singleScore.time_alive
    let accuracyData = document.createElement('td')
    accuracyData.innerText = singleScore.accuracy
    scoreboardTableBodyRow.append(scoreRanking, usernameData, scoreData, timeData, accuracyData) // Append all 5 cells to the table row
    scoreboardTable.append(scoreboardTableBodyRow) // Append the current row to the scoreboard table body
}

export function getScores() {
    fetch('http://localhost:3000/scores') // Fetch for all scores. The response is an array of objects that is sorted in decreasing order
        .then(res => res.json())
        .then(scores => {
            createScoreboardTable() // Clears scoreboard div if it has any children nodes, creates & appends the table
// Iterates through all the objects in the scores array and appends each one to the table body
            for (const score of scores) {
                let scoreIndex = scores.indexOf(score) + 1 // Index of score in score array for global ranking (these are already sorted in the back-end)
                appendScores(score, scoreIndex) // Creates and appends each row to the table body
            }
        })
}
