export function handleSubmit(event) {
    event.preventDefault()

    let baseURL = "https://api.meaningcloud.com/lang-4.0/identification";

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const isValid = Client.checkForInput(formText);

    const formdata = new FormData();
    // formdata.append("key", process.env.API_KEY);
    console.log(`Your API key is ${API_KEY1}`);
    formdata.append("key", 'ac87b3c4a9c2a7be5f31812df5ecf2c3');
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
                console.log(res);
                const lang = res.language_list[0].name;
                const relev = res.language_list[0].relevance;
                //postData('/addHistory', {language: lang, relevance: relev})
                document.getElementById('results').innerHTML = res.language_list[0].name;
            })
            .catch(error => console.log('error', error));
    } else {
        alert('Please enter a phrase first!');
    }
}

    // const getLang = (baseURL, requestOptions)=>{
    //     console.log("1");
    //     let data;
    //     const res = fetch(baseURL, requestOptions)
    //         .then(res => ({
    //             const data = res.json();
    //             console.log(data);
    //             // ;
    //             // status: res.status,
    //             // body: res.json()
    //         }))
//            .then({status, body} => console.log(status, body))
        // try {
        //     const data = res.json();
        //     console.log(data);
        //     return data;
        // }  catch(error) {
        //     console.log("3");
        //     console.log("error", error);
        //     // appropriately handle the error
        // }
    // }

export function onFocus() {
    document.getElementById('name').style.backgroundColor = "yellow";
}

export function onBlur() {
    document.getElementById('name').style.backgroundColor = "";
}
