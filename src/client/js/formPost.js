// /* Function to POST data */
export async function postData( url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header
        body: JSON.stringify(data),
    });

    console.log("in postData");
    try {
        const newData = await response.json();
        // console.log(newData);
        return newData;
    }catch(error) {
        console.log("error", error);
    }
}

export async function updateUI() {
    const request = await fetch('/ProjData');
    try{
        const allData = await request.json();
        console.log("inupdateUI");
        console.log(allData);
        document.getElementById('Language').innerHTML = allData.language;
        document.getElementById('Relevance').innerHTML = allData.relevance;

    }catch(error){
        console.log("error", error);
    }
}

export async function updateUI2() {
    const request = await fetch('/ProjData');
    try{
        const allData = await request.json();
        console.log("inupdateUI2");
        console.log(allData);
        document.getElementById('Code').innerHTML = allData.code;
        document.getElementById('Label').innerHTML = allData.label;
        document.getElementById('Relevance2').innerHTML = allData.relevance;

    }catch(error){
        console.log("error", error);
    }
}
