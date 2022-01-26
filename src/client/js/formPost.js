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

    try {
        const newData = await response.json();
        //console.log(newData);
        return newData;
    }catch(error) {
        console.log("error", error);
    }
}

export async function updateUI() {
    const request = await fetch('/ProjData');
    try{
        const allData = await request.json();
        //console.log(allData);
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temperature;
        document.getElementById('content').innerHTML = allData.feeling;

    }catch(error){
        console.log("error", error);
    }
}
